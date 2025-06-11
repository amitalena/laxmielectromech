import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useCallback, useMemo, useState, useEffect } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import useAxios from "../../../hooks/useAxios";
// import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const axios = useAxios();

  const validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Enter a valid email")
          .required("Email is required"),
        contact: yup
          .string()
          .min(10, "Contact number should be at least 10 digits")
          .required("Contact number is required"),
        address: yup.string(),
        message: yup.string().required("Message is required"),
      }),
    []
  );

  const sendData = async (data) => {
    try {
      // const response = await axios.post("http://localhost:3000/server.php", data);
      const formData = new FormData();
      formData.append('name', data?.name);
      formData.append('email', data?.email);
      formData.append('contact', data?.contact);
      formData.append('address', data?.address);
      formData.append('message', data?.message);
      
      const response = await axios.postForm('/server.php', formData);
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
      }
    } catch (error) {
      console.log("send data error: ----- ");
    } finally {
      setIsLoad(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      address: "",
      message: "",
    },
    validationSchema,
    onSubmit: useCallback((values, { resetForm }) => {
      setIsLoad(true);
      setStatus("Sending...");
      sendData(values);
      // You can uncomment emailjs logic if needed.
      // emailjs.send(...);
      setStatus("Message sent successfully!");
      resetForm();
    }, []),
  });

  useEffect(() => {
    emailjs.init("uMWum8ECeWLklefRl");
  }, []);

  return (
    <Card
      elevation={0}
      sx={{
        p: { lg: 4, xs: 2 },
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ my: 0, py: 0, textTransform: 'uppercase', fontWeight: '600 !important', textAlign: 'center' }}>
        <span className="text-[var(--colorOne)]">Feel Free</span> To Contact Us
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ my: 0, py: 0, textAlign: 'center' }}>
        Let’s Get in Touch
      </Typography>

      <CardContent
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ flex: 1, width: "100%", px: 0, my: 0 }}
      >
        <Grid container spacing={2}>
          {[
            {
              name: "name",
              label: "Name",
              xs: 12,
              md: 6,
              type: "text",
            },
            {
              name: "email",
              label: "Email",
              xs: 12,
              md: 6,
              type: "email",
            },
            {
              name: "contact",
              label: "Mobile",
              xs: 12,
              md: 6,
              type: "tel",
            },
            {
              name: "address",
              label: "Address (optional)",
              xs: 12,
              md: 6,
              type: "text",
            },
          ].map(({ name, label, xs, md, type }) => (
            <Grid item xs={xs} md={md} key={name}>
              <TextField
                fullWidth
                size="small"
                type={type}
                placeholder={label}
                {...formik.getFieldProps(name)}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                sx={{ border: '1px solid #9e9e9e' }}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Your Message..."
              multiline
              rows={3}
              {...formik.getFieldProps("message")}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{ border: '1px solid #9e9e9e', }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Button size="large" variant="contained" type="submit" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
              {
                isLoad ? <CircularProgress size="18px" color="white" /> : null
              }
              <span>Send</span>
            </Button>
          </Grid>

          <Grid item xs={12}>
            {status && (
              <Typography variant="body2" color="primary">
                {status}
              </Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
