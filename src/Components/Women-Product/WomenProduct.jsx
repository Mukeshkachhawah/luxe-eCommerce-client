import { useEffect, useState } from "react";
import SingleProductCart from "./../SingleProductCart/SingleProductCart";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";

const WomenProduct = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  const url = "http://localhost:8000/products/random";

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false on error
      }
    };
    fetchData(url);
  }, [url]);

  const filterData = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filterBySort = () => {
    if (sort === "asc") {
      return [...filterData].sort((a, b) => a.new_price - b.new_price);
    }
    if (sort === "dsc") {
      return [...filterData].sort((a, b) => b.new_price - a.new_price);
    }
    return filterData;
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Sorting dropdown */}
        <Grid item xs={12} md={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              displayEmpty
              sx={{ width: 200 }}
            >
              <MenuItem value="">Relevance</MenuItem>
              <MenuItem value="asc">Low to High</MenuItem>
              <MenuItem value="dsc">High to Low</MenuItem>
            </Select>
          </Box>
        </Grid>

        {/* Product listing */}
        <Grid item xs={12}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography variant="h6" color="error">
              {error}
            </Typography>
          ) : (
            <Grid container spacing={4}>
              {filterBySort().map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <SingleProductCart product={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WomenProduct;
