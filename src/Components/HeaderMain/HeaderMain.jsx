import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart,
  Favorite,
} from "@mui/icons-material";
import logo_luxe from "../../assets/logo.jpg";
import { useState } from "react";

const HeaderMain = ({ setSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate(`/search-results?query=${query}`); // Navigate with query
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: 1 }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 8 }}>
          <Link to="/">
            <img
              src={logo_luxe}
              alt="Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: "flex", gap: 4 }}>
          <Link
            to="/men-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="button" sx={{ fontWeight: "600" }}>
              Mens
            </Typography>
          </Link>
          <Link
            to="/women-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="button" sx={{ fontWeight: "600" }}>
              Women
            </Typography>
          </Link>
          <Link
            to="/beauty-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="button" sx={{ fontWeight: "600" }}>
              Beauty
            </Typography>
          </Link>
          <Link
            to="/home-kitchen"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="button" sx={{ fontWeight: "600" }}>
              Home & Kitchen
            </Typography>
          </Link>
          <Link
            to="/faq-page"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="button" sx={{ fontWeight: "600" }}>
              FAQs
            </Typography>
          </Link>
          <Link
            to="/contact-page"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="button" sx={{ fontWeight: "600" }}>
              Contact Us
            </Typography>
          </Link>
        </Box>

        {/* Search Input and Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "20px",
              px: 2,
            }}
          >
            <SearchIcon
              onClick={handleSearchSubmit}
              style={{ cursor: "pointer" }}
            />
            <InputBase
              placeholder="Search Luxe"
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              sx={{ ml: 1, flex: 1 }}
            />
          </Box>
          <Link to="/love-product">
            <IconButton>
              <Favorite color="action" />
            </IconButton>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart-page">
            <IconButton>
              <ShoppingCart color="action" />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMain;
