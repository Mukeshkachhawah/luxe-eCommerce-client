
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import SingleProductCart from "../SingleProductCart/SingleProductCart";
import useFetch from "../../Hooks/FetchApiHook";

const FeatureProducts = () => {
  const url = "http://localhost:8000/products/random_3";
  const { data, error } = useFetch(url);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        FEATURED PRODUCTS
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        paragraph
      >
        Bring called seed first of third give itself now ment
      </Typography>

      <Grid container spacing={4}>
        {/* Displaying loading spinner if no data yet */}
        {error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : !data ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <CircularProgress />
          </Box>
        ) : (
          data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SingleProductCart product={item} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default FeatureProducts;
