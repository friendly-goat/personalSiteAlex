import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "Team", link: "/team" },
    { text: "News", link: "/news" },
    { text: "FAQ", link: "/faq" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <Box
      component="footer"
      sx={theme => ({
        bgcolor: theme.palette.customBackground.footer,
        color: theme.palette.customText.body,
        transition: theme.customTransitions.surface(theme),
        py: 4,
      })}
    >
      {/* Main Footer */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 6, md: 12 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 0 },
        }}
      >
        {/* Logo */}
        <Box>
          <Link href="/">
            <Box
              component="img"
              src="/logos/Logo_NoBackground.png"
              alt="Template Logo"
              sx={{
                height: 64,
                width: "auto",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </Link>
        </Box>

        {/* Nav Links */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
          flexWrap="wrap"
          useFlexGap
        >
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              underline="none"
              sx={theme => ({
                px: 1,
                py: 0.5,
                borderBottom: "2px solid transparent",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.3s",
                color: theme.palette.customText.footerLink,
                "&:hover": {
                  color: theme.palette.brand.basePink,
                  borderColor: theme.palette.brand.basePink,
                },
              })}
            >
              {item.text}
            </Link>
          ))}
        </Stack>

        {/* Contact */}
        <Stack
          spacing={1}
          alignItems={{ xs: "center", md: "flex-end" }}
          textAlign={{ xs: "center", md: "right" }}
        >
          <Typography variant="body2">
            Mail:&nbsp;
            <Link
              href="mailto:info@template.com"
              underline="hover"
              sx={theme => ({
                color: theme.palette.customText.footerLink,
                fontWeight: 500,
                "&:hover": {
                  color: theme.palette.brand.basePink,
                },
              })}
            >
              info@template.com
            </Link>
          </Typography>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={theme => ({
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              color: theme.palette.customText.footerLink,
              "&:hover": {
                color: theme.palette.brand.basePink,
              },
            })}
          >
            <Box
              component="img"
              src="/logos/LI-In-Bug.png"
              alt="LinkedIn"
              sx={{ width: 20, height: 20, mr: 1 }}
            />
            Connect with us on LinkedIn
          </Link>

          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={theme => ({
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              color: theme.palette.customText.footerLink,
              "&:hover": {
                color: theme.palette.brand.basePink,
              },
            })}
          >
            <Box
              component="img"
              src="/logos/yt_logo_mono_dark.png"
              alt="YouTube"
              sx={{ width: 20, height: 20, mr: 1 }}
            />
            Visit our YouTube Channel
          </Link>
        </Stack>
      </Box>

      {/* Footer Bottom */}
      <Typography
        sx={theme => ({
          mt: 4,
          textAlign: "center",
          fontSize: "0.75rem",
          color: theme.palette.customText.footerMuted,
        })}
      >
        &copy; {new Date().getFullYear()} Template. All rights reserved.
      </Typography>
    </Box>
  );
}
