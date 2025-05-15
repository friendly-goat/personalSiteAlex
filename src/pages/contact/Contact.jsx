import React from "react";
import { Box, Typography, Button, Link, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.customBackground.section,
        py: 8,
        px: 4,
        transition: theme.customTransitions.surface(theme),
      }}
    >
      <Box
        component="section"
        sx={{
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          bgcolor: theme.palette.customCard.background,
          boxShadow: theme.shadows[theme.palette.customCard.shadow],
          borderRadius: theme.palette.customCard.radius,
          border: `1px solid ${theme.palette.customCard.border}`,
          p: theme.palette.customCard.padding,
          transition: theme.customTransitions.surface(theme),
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: theme.palette.customText.heading,
            mb: 2,
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.customText.body,
            fontSize: "1.125rem",
            mb: 4,
          }}
        >
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
          drop us an email and we'll get back to you as soon as possible.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            mb: 2,
          }}
        >
          <EmailIcon sx={{ color: theme.palette.brand.basePink }} />
          <Link
            href="mailto:team@template.com"
            underline="hover"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 500,
              color: theme.palette.brand.basePink,
            }}
          >
            team@template.com
          </Link>
        </Box>

        <Button
          variant="contained"
          onClick={() => window.location = "mailto:team@template.com"}
          sx={{
            mt: 2,
            backgroundColor: theme.palette.brand.basePink,
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            px: 4,
            py: 1.5,
            borderRadius: "0.5rem",
            "&:hover": {
              backgroundColor: theme.palette.brand.basePinkDark,
            },
            transition: theme.customTransitions.surface(theme),
          }}
        >
          Send Us an Email
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
