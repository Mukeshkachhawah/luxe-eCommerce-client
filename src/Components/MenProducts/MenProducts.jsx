import { useEffect, useState } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

// Dummy API URL
const API_URL = "http://localhost:8000/men";

const MenProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
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
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <SingleProductCart product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MenProducts;
