import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const SingleProductCart = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        overflow: "hidden",
        width: "303px", // Fixed width
        height: "auto", // Fixed height
        position: "relative", // To position Quick View on image hover

        transition: "all 0.3s ease-in-out", // Smooth transition
        backgroundColor: "#fff",
        border: "1px solid #f1f1f1", // Soft border for a premium feel
      }}
      onClick={() => navigate(`/productdetail/${product.id}`)}
    >
      {/* Container for the image and Quick View hover text */}
      <Box
        sx={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "300px",
          "&:hover .quick-view": {
            display: "block", // Show Quick View text on hover
          },
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          height="300"
          image={product.productImg}
          sx={{
            objectFit: "contain",
            transition: "transform 0.3s ease-in-out", // Smooth zoom effect
            "&:hover": {
              transform: "scale(1.05)", // Zoom effect on hover
            },
            display: "block",
            marginLeft: "auto",
            marginRight: "auto", // Center the image horizontally
          }}
        />

        {/* Quick View Text */}
        <Box
          className="quick-view"
          sx={{
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "none", // Initially hidden
            fontSize: "14px", // Quick View font size
            textAlign: "center",
          }}
        >
          Quick View
        </Box>
      </Box>

      {/* Card Content */}
      <CardContent
        sx={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertically center content
          alignItems: "center", // Horizontally center content
          textAlign: "center", // Align text in the center
          fontSize: "13px", // Font size for the content
        }}
      >
        {/* Product Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: 13, // Adjusted font size for product name
            color: "#866528", // Product name color
            marginBottom: 1,
          }}
        >
          {product.name}
        </Typography>

        {/* Rating */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#35a742", // Background color for rating
            padding: "5px 10px",
            borderRadius: "12px",
            marginBottom: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff", // Text color for rating
              fontWeight: "bold",
              marginRight: 1,
              fontSize: "12px", // Rating font size
            }}
          >
            {product.rating} <span>⭐</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#ffffff", // Text color for rating count
              fontWeight: "bold",
              fontSize: "12x", // Rating font size
            }}
          >
            | reviews
          </Typography>
        </Box>

        {/* Product Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "14px", // Adjusted font size for description
            marginBottom: 2,
            maxWidth: 250, // Limit the description width to avoid overflow
            color: "#333333", // Description text color
          }}
        >
          {product.description.slice(0, 80)}...
        </Typography>

        {/* New Price */}
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontWeight: 700,
            fontSize: "14px", // New price font size
            marginTop: 1,
            color: "#333333", // New price color
          }}
        >
          ₹{product.new_price}
        </Typography>

        {/* Old Price with Discount */}
        {product.old_price && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textDecoration: "line-through",
              fontSize: "12px", // Font size for old price
              marginTop: 1,
              color: "#7f8c8d", // Old price color
            }}
          >
            ₹{product.old_price}
          </Typography>
        )}
      </CardContent>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around", // Distribute icons evenly
          padding: 2,
          backgroundColor: "#f8f8f8", // Light background for the action area
          borderTop: "1px solid #eee", // Light border to separate actions
          borderRadius: "0 0 8px 8px",
        }}
      ></Box>
    </Card>
  );
};

export default SingleProductCart;
