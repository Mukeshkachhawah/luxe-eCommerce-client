import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const openModal = (isSignUp) => {
    setIsSignUp(isSignUp);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const getInputData = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    closeModal();
  };

  const userProfilePageRedirect = () => {
    navigate("/sign-in");
  };
  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        sx={{ height: "40px", padding: 0, margin: 0, marginTop: "-15px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            minHeight: "10px",
            padding: "0 10px",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Navigate to user-profile page */}
            <Button
              onClick={userProfilePageRedirect}
              sx={{
                color: "#333",
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Sign In
              <Typography
                sx={{ color: "#333", fontSize: "18px", margin: "5px" }}
              >
                |
              </Typography>
              Join LUXE
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
