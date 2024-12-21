import { useState } from "react";
import { Button, Typography, IconButton, Box } from "@mui/material";
import {
  Add,
  Remove,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

const ProductDetails = () => {
  const [sliderPos, setSliderPos] = useState(0);
  const [qty, setQty] = useState(1);
  const productPrice = 125;
  const totalSliderItems = 4;

  const [totalPrice, setTotalPrice] = useState(productPrice);

  const slideToNext = () => {
    if (sliderPos < totalSliderItems - 1) {
      setSliderPos(sliderPos + 1);
    }
  };

  const slideToPrev = () => {
    if (sliderPos > 0) {
      setSliderPos(sliderPos - 1);
    }
  };

  const increaseProductQty = () => {
    setQty(qty + 1);
    setTotalPrice((qty + 1) * productPrice);
  };

  const decreaseProductQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setTotalPrice((qty - 1) * productPrice);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${sliderPos * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {[...Array(totalSliderItems)].map((_, index) => (
            <img
              key={index}
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d7353c0-b7e7-4984-8eef-0844f9f84f39/NIKE+ISPA+LINK+AXIS.png"
              alt={`Product Image ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </Box>

        <IconButton
          onClick={slideToPrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={slideToNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <Box sx={{ padding: 2 }}>
        <Typography
          variant="subtitle1"
          color="green"
          sx={{ textTransform: "uppercase", fontWeight: 700 }}
        >
          Nike Company
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, marginY: 2 }}>
          Fall Limited Edition Sneakers
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: 2 }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ${totalPrice}.00
          </Typography>
          <Box
            sx={{
              backgroundColor: "rgba(0, 128, 0, 0.1)",
              color: "green",
              padding: "2px 10px",
              borderRadius: 2,
              fontWeight: 700,
            }}
          >
            50%
          </Box>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "gray",
              marginLeft: "auto",
            }}
          >
            $250.00
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <IconButton onClick={decreaseProductQty}>
            <Remove />
          </IconButton>
          <Typography variant="h6">{qty}</Typography>
          <IconButton onClick={increaseProductQty}>
            <Add />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color="success"
          sx={{
            width: "10%",
            padding: "15px",
            fontWeight: 500,
            borderRadius: 2,
          }}
          startIcon={<ShoppingBag />}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
