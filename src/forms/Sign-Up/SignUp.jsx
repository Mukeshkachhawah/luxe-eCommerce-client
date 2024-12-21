import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, password });
  };

  const navigateSignIN = () => {
    navigate("/sign-in");
  };

  return (
    <Container maxWidth="xs">
      <Paper
        sx={{
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#f5f5f5",
          marginTop: 6,
        }}
      >
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            Create Account
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Create your Luxe account to get started!
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{ backgroundColor: "#ffffff" }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ backgroundColor: "#ffffff" }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ backgroundColor: "#ffffff" }}
          />

          {!isVerified && (
            <Typography variant="body2" color="textSecondary" mt={2}>
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </Typography>
          )}

          <Button
            variant="outlined"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#1976d2",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
            onClick={() => setIsVerified(true)}
          >
            Verify mobile number
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Create Account
          </Button>
        </form>

        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          By creating an account or logging in, you agree to Luxe s{" "}
          <a href="/conditions-of-use">Conditions of Use</a> and{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </Typography>

        <Typography variant="body2" color="textSecondary" align="center" mt={1}>
          Already have an account?{" "}
          <Button
            variant="text"
            color="primary"
            onClick={() => navigateSignIN()}
          >
            Sign in
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignUp;
