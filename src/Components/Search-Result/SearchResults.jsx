import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

const API_URL = "http://localhost:8000/products";

const SearchResults = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    setSearchQuery(query);

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();
        if (query) {
          const results = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredProducts(results);
        } else {
          setFilteredProducts(products); // Show all products if no query
        }
      } catch (error) {
        console.error("Error fetching products:", error.message);
        setFilteredProducts([]); // Fallback to empty state
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); // Call fetchProducts here
  }, [location.search]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Search Results for "{searchQuery}"
      </Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : filteredProducts.length === 0 ? (
        <Typography>No products found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <SingleProductCart product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SearchResults;
