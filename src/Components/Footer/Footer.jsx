import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Facebook, Instagram, Twitter, Pinterest } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* AJIO Section */}
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Luxe
          </Typography>
          {[
            { name: "Who We Are", link: "/who-we-are" },
            { name: "Join Our Team", link: "/join-our-team" },
            { name: "Terms & Conditions", link: "/terms-conditions" },
            { name: "We Respect Your Privacy", link: "/privacy" },
            { name: "Fees & Payments", link: "/fees-payments" },
            { name: "Returns & Refunds Policy", link: "/returns-policy" },
            {
              name: "Promotions Terms & Conditions",
              link: "/promotions-terms",
            },
          ].map((item) => (
            <Link
              to={item.link}
              key={item.name}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#bbb",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Grid>

        {/* Help Section */}
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Help
          </Typography>
          {[
            { name: "Track Your Order", link: "/track-order" },
            { name: "Frequently Asked Questions", link: "/faq" },
            { name: "Returns", link: "/returns" },
            { name: "Cancellations", link: "/cancellations" },
            { name: "Payments", link: "/payments" },
            { name: "Customer Care", link: "/customer-care" },
            { name: "How Do I Redeem My Coupon", link: "/redeem-coupon" },
          ].map((item) => (
            <Link
              to={item.link}
              key={item.name}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#bbb",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Grid>

        {/* Shop by Section */}
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Shop by
          </Typography>
          {[
            { name: "All", link: "/all" },
            { name: "Men", link: "/men" },
            { name: "Women", link: "/women" },
            { name: "Kids", link: "/kids" },
            { name: "Indie Stores", link: "/indie-stores" },
            { name: "New Arrivals", link: "/new-arrivals" },
            { name: "Brand Directory", link: "/brand-directory" },
          ].map((item) => (
            <Link
              to={item.link}
              key={item.name}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#bbb",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={6} md={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Box sx={{ margin: 1 }}>
              <Facebook
                fontSize="large"
                sx={{ "&:hover": { color: "#bbb" } }}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Instagram
                fontSize="large"
                sx={{ "&:hover": { color: "#bbb" } }}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Twitter fontSize="large" sx={{ "&:hover": { color: "#bbb" } }} />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Pinterest
                fontSize="large"
                sx={{ "&:hover": { color: "#bbb" } }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ marginTop: 4, borderTop: "1px solid #444", paddingTop: 2 }}>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#bbb", marginBottom: 2 }}
        >
          Made with ❤️ by Mukesh
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
