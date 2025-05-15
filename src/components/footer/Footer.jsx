import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "Team", link: "/team" },
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
          {navLinks.map((item, i) => {
            const isActive = location.pathname === item.link;
            return (
              <Box
                key={i}
                component="a"
                href={item.link}
                sx={theme => ({
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  px: 1.5,
                  py: 1,
                  borderBottom: isActive
                    ? `2px solid ${theme.palette.brand.basePink}`
                    : '2px solid transparent',
                  color: isActive ? theme.palette.brand.basePink : 'inherit',
                  transition: 'border-color 0.3s, color 0.3s',
                })}
              >
                {item.text}
              </Box>
            );
          })}

        </Stack>

        {/* Contact */}
        <Stack
          spacing={1}
          alignItems={{ xs: "center", md: "flex-end" }}
          textAlign={{ xs: "center", md: "right" }}
        >
          <Link
            href="mailto:info@template.com"
            underline="hover"
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
              src="/logos/icons8-mail-100.png"
              alt="Email"
              sx={{ width: 20, height: 20, mr: 1 }}
            />
            Email: team@template.com
          </Link>

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
              src="/logos/icons8-youtube-480.png"
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
