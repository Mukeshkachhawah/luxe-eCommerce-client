import { useEffect, useState } from "react";
import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

// Dummy API URL for beauty products
const BEAUTY_API_URL = "http://localhost:8000/beauty";

const BeautyProducts = () => {
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching beauty products data from the API
  const fetchBeautyProducts = async () => {
    try {
      const response = await fetch(BEAUTY_API_URL);
      const data = await response.json();
      setBeautyProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching beauty products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeautyProducts();
  }, []);

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9" }}>
      {/* Heading for the Beauty Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
          marginBottom: 4,
        }}
      >
        Beauty Products
      </Typography>

      {/* Loading Indicator */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {/* Mapping over beauty products */}
          {beautyProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <SingleProductCart product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BeautyProducts;
