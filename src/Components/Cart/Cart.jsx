import { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { Remove, Add, Delete } from "@mui/icons-material";

const Cart = () => {
  // Initial cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 2,
      name: "Product 2",
      price: 59.99,
      quantity: 2,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ]);

  // Update quantity of an item
  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Your Cart
        </Typography>

        {/* Display each cart item vertically */}
        <Grid container spacing={2} direction="column">
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Paper sx={{ padding: 2, display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="100"
                  height="100"
                  style={{ marginRight: "20px" }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    onClick={() => updateQuantity(item.id, "decrease")}
                    disabled={item.quantity <= 1}
                  >
                    <Remove />
                  </IconButton>
                  <Typography variant="body1" sx={{ margin: "0 10px" }}>
                    {item.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => updateQuantity(item.id, "increase")}
                  >
                    <Add />
                  </IconButton>
                  <IconButton
                    onClick={() => removeItem(item.id)}
                    sx={{ marginLeft: 2 }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Cart Summary */}
        <Box sx={{ marginTop: 4, textAlign: "right" }}>
          <Typography variant="h6">Total: ${calculateTotal()}</Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Proceed to Checkout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Cart;
