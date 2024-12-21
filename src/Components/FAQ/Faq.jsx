import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6">How do I place an order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To place an order, browse our products, select the items you
                have like to purchase, and add them to your cart. Once you are
                ready, proceed to checkout, enter your shipping details, and
                complete the payment process.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h6">
                What payment methods do you accept?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We accept a wide range of payment methods including credit
                cards, debit cards, and PayPal. You can choose your preferred
                payment option during checkout.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h6">How can I track my order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once your order is shipped, you will receive an email with a
                tracking number and a link to track your order's progress. You
                can also track your order from your account page.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography variant="h6">
                Can I cancel or modify my order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Orders can be canceled or modified only before they are shipped.
                If you need to make changes, please contact our support team as
                soon as possible.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography variant="h6">How do I return an item?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you're not satisfied with your purchase, you can initiate a
                return within 30 days of receiving your item. Please visit our
                returns page for further instructions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </Container>
  );
};

export default Faq;
