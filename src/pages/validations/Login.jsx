import { useState } from "react";
import { Box, FormControl, Input, InputAdornment, InputLabel, Typography, IconButton, Button } from "@mui/material";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordIcon from '@mui/icons-material/Password';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "30%",
                    // height: "70%",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 3px 5px #e0e0e0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                    px: 3,
                    py: 4,
                }}
            >
                <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: 700 }}>
                    Admin Login
                </Typography>

                {/* Email Field */}
                <FormControl variant="standard" sx={{ width: "100%" }}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon sx={{ width: "18px" }} />
                            </InputAdornment>
                        }
                    />
                </FormControl>

                {/* Password Field */}
                <FormControl variant="standard" sx={{ width: "100%" }}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        startAdornment={
                            <InputAdornment position="start">
                                <PasswordIcon sx={{ width: "18px" }} />
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button
                    sx={{
                        backgroundColor: 'blue',
                        color: 'white',
                        py: 1.5,
                        width: '100%',
                        borderRadius: '6px',
                        fontSize: 14,
                        outline: 0,
                    }}
                    style={{ outline: 'none' }}
                >Login</Button>
            </Box>
        </Box>
    );
};

export default Login;
