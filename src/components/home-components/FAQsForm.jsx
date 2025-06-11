import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useCallback, useMemo, useState, useEffect } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const FAQsForm = () => {
  // State for status feedback
  const [status, setStatus] = useState("");

  // Validation Schema
  const validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Enter a valid email").required("Email is required"),
        phone: yup
          .string()
          .min(10, "Phone number should be at least 10 digits")
          .required("Phone number is required"),
        question: yup.string().required("Question is required"),
      }),
    []
  );

  // Formik for Form Handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      question: "",
    },
    validationSchema,
    onSubmit: useCallback((values, { resetForm }) => {
      setStatus("Sending...");

      emailjs
        .send(
          "service_5lur7ru", // Your EmailJS Service ID
          "template_7g0ze2c", // Your EmailJS Template ID (update if different)
          values, // Formik values
          "uMWum8ECeWLklefRl" // Your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus("Question sent successfully!");
            resetForm(); // Reset form after success
          },
          (error) => {
            console.error(error.text);
            setStatus("Error sending question");
          }
        );
    }, []),
  });

  // Initialize EmailJS (optional, but good practice)
  useEffect(() => {
    emailjs.init("uMWum8ECeWLklefRl"); // Initialize with Public Key
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.9)",
        px: 3,
        py: 1,
        backdropFilter: "blur(6px)",
        boxShadow: 1,
        width: "100%",
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "capitalize" }} gutterBottom>
        Didn’t find answer of your question?
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit} display="flex" flexDirection="column" gap={2} mt={1}>
        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          {...formik.getFieldProps("name")}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{
            disableUnderline: true,
            sx: {
              minHeight: "40px",
              px: 1.5,
              py: 0.5,
              fontSize: "14px",
              "& input": {
                padding: "14px 0 4px",
                fontSize: "14px",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "14px",
              transform: "translate(12px, 14px) scale(1)",
              "&.MuiInputLabel-shrink": {
                transform: "translate(12px, 3px) scale(0.85)",
              },
            },
          }}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          type="email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            disableUnderline: true,
            sx: {
              minHeight: "40px",
              px: 1.5,
              py: 0.5,
              fontSize: "14px",
              "& input": {
                padding: "14px 0 4px",
                fontSize: "14px",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "14px",
              transform: "translate(12px, 14px) scale(1)",
              "&.MuiInputLabel-shrink": {
                transform: "translate(12px, 3px) scale(0.85)",
              },
            },
          }}
        />

        {/* Phone */}
        <TextField
          fullWidth
          label="Phone"
          variant="filled"
          type="tel"
          {...formik.getFieldProps("phone")}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          InputProps={{
            disableUnderline: true,
            sx: {
              minHeight: "40px",
              px: 1.5,
              py: 0.5,
              fontSize: "14px",
              "& input": {
                padding: "14px 0 4px",
                fontSize: "14px",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "14px",
              transform: "translate(12px, 14px) scale(1)",
              "&.MuiInputLabel-shrink": {
                transform: "translate(12px, 3px) scale(0.85)",
              },
            },
          }}
        />

        {/* Question */}
        <TextField
          fullWidth
          label="Your Question"
          variant="filled"
          multiline
          rows={4}
          {...formik.getFieldProps("question")}
          error={formik.touched.question && Boolean(formik.errors.question)}
          helperText={formik.touched.question && formik.errors.question}
          InputProps={{
            disableUnderline: true,
            sx: {
              px: 1.5,
              py: 0.5,
              fontSize: "14px",
              "& textarea": {
                fontSize: "14px",
                padding: "24px 0px 6px",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "14px",
              transform: "translate(12px, 24px) scale(1)",
              "&.MuiInputLabel-shrink": {
                transform: "translate(12px, 6px) scale(0.85)",
              },
            },
          }}
        />

        {/* Submit Button */}
        <div className="flex justify-center items-center w-full">
          <Button
            type="submit"
            sx={{
              mt: 1.5,
              backgroundColor: "#333",
              color: "white",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#444",
              },
            }}
          >
            Raise your query
          </Button>
        </div>

        {/* Status Feedback */}
        {status && (
          <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
            {status}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FAQsForm;