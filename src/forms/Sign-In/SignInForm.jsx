import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Snackbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
  });

  const apiUrl = "http://localhost:8000/api/users/login";

  // Local Sign-In Handler
  const handleLocalSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields",
        type: "error",
      });
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Sign-In Successful!",
          type: "success",
        });
        navigate("/home");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setSnackbar({ open: true, message: error.message, type: "error" });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f9f9f9"
    >
      <Box
        width={400}
        p={4}
        boxShadow={3}
        borderRadius={2}
        bgcolor="white"
        textAlign="center"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to Luxe
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Sign in to continue
        </Typography>

        {/* Local Sign-In Form */}
        <form onSubmit={handleLocalSignIn}>
          <TextField
            label="Email or mobile phone number"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Continue
          </Button>
        </form>

        <Typography variant="body2" color="textSecondary" mt={2}>
          By continuing, you agree to Luxes{" "}
          <a href="/conditions-of-use">Conditions of Use</a> and{" "}
          <a href="/privacy-notice">Privacy Notice</a>.
        </Typography>

        <Divider sx={{ mt: 2, mb: 2 }}>OR</Divider>

        <Typography variant="body2" color="textSecondary">
          New to Luxe?{" "}
          <Button
            variant="text"
            color="primary"
            onClick={() => navigate("/sign-up")}
          >
            Create your Luxe account
          </Button>
        </Typography>

        {/* Snackbar for Feedback */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <MuiAlert elevation={6} variant="filled" severity={snackbar.type}>
            {snackbar.message}
          </MuiAlert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default SignInPage;
