import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const LoveProducts = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBuy = () => {
    console.log(`Product  added to cart`);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
        <CardMedia component="img" height="140" image="" alt="fsadkoi" />
        <CardContent>
          <Typography variant="h6" component="div"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography variant="h6" color="primary">
              $
            </Typography>

            <IconButton onClick={handleLike}>
              {liked ? (
                <Favorite sx={{ color: "red" }} />
              ) : (
                <FavoriteBorder sx={{ color: "gray" }} />
              )}
            </IconButton>
          </Box>
        </CardContent>
        <Box sx={{ padding: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleBuy}
          >
            Buy Now
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default LoveProducts;
