import React from "react";
import { Box, Typography } from "@mui/material";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.",
  },
  {
    question: "Quis nostrud exercitation ullamco?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Faq = () => {
  return (
    <Box
      component="section"
      sx={theme => ({
        py: 8,
        px: { xs: 4, md: 8 },
        bgcolor: theme.palette.customBackground.section,
        transition: theme.customTransitions.surface(theme),
      })}
    >
      <Typography
        component="h2"
        sx={theme => ({
          fontSize: { xs: '1.875rem', md: '2.25rem' },
          fontWeight: 800,
          color: theme.palette.customText.heading,
          textAlign: 'center',
          mb: 6,
        })}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          mx: 'auto',
        }}
      >
        {faqs.map((faq, index) => (
          <Box
            key={index}
            sx={theme => ({
              width: '100%',
              maxWidth: 800,
              bgcolor: theme.palette.customCard.background,
              border: `1px solid ${theme.palette.customCard.border}`,
              borderRadius: theme.palette.customCard.radius,
              p: 3, // compact padding for FAQ layout
              transition: theme.customTransitions.surface(theme),
            })}
          >
            <Typography
              component="h3"
              sx={theme => ({
                fontSize: '1rem',
                fontWeight: 600,
                mb: 1,
                color: theme.palette.customText.heading,
              })}
            >
              {faq.question}
            </Typography>
            <Typography
              component="p"
              sx={theme => ({
                fontSize: '0.95rem',
                lineHeight: 1.5,
                color: theme.palette.customText.body,
              })}
            >
              {faq.answer}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
