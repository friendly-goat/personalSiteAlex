// Header.jsx
import { useState } from "react";
// import { supabase } from "../../../supabaseClient";
// import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useLocation } from "react-router-dom";

const Header = ({ mode, setMode }) => {
  //   const [user, setUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     const getUser = async () => {
  //       const { data } = await supabase.auth.getUser();
  //       setUser(data.user);
  //     };
  //     getUser();
  //   }, []);

  //   const handleLogout = async () => {
  //     await supabase.auth.signOut();
  //     window.location.reload();
  //   };

  const navLinks = [
    { text: "Home", link: "/" },
    { text: "Team", link: "/team" },
    { text: "FAQ", link: "/faq" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <Box
      component="header"
      sx={theme => ({
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        py: 1.5,
        bgcolor: theme.palette.customBackground.footer,
        color: theme.palette.customText.heading,
        transition: theme.customTransitions.surface(theme),
      })}
    >
      {/* Logo + Identity */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <a href="/home">
          <Box
            component="img"
            src="/logos/SmallerLogo.PNG"
            alt="Logo"
            sx={{ height: 48, width: "auto" }}
          />
        </a>
        <a href="/home" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <Typography
              sx={theme => ({
                fontWeight: 600,
                fontSize: "1.25rem",
                color: theme.palette.customText.heading,
              })}
            >
              Template
            </Typography>
            <Typography
              sx={theme => ({
                fontSize: "0.875rem",
                color: theme.palette.customText.textMuted,
              })}
            >
              Slogan
            </Typography>
          </Box>
        </a>
      </Box>

      {/* Hamburger - mobile */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          fontSize: "1.875rem",
          cursor: "pointer",
        }}
        onClick={() => setIsDrawerOpen(true)}
      >
        ☰
      </Box>

      {/* Desktop Nav Links */}
      <Box
        component="nav"
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
        }}
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

        {/* Dark mode toggle */}
        <IconButton
          onClick={() => setMode(prev => (prev === "light" ? "dark" : "light"))}
          color="inherit"
        >
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>

      {/* Account menu */}
      {/* {user && (
        <div className="relative group">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
            👤
          </div>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/my-account")}>
                Account Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Notifications</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Billing</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help Center</li>
              <li
                className="border-t px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )} */}

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 30,
          }}
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <Box
        sx={theme => ({
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: 256,
          bgcolor: theme.palette.customBackground.section,
          transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 40,
          boxShadow: theme.shadows[6],
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 10,
          }}
        >
          <img
            src="/src/assets/react.svg"
            alt="Drawer Logo"
            style={{ height: "5rem", marginBottom: "1rem" }}
          />
          <Typography
            sx={theme => ({
              fontWeight: "bold",
              fontSize: "1.25rem",
              color: theme.palette.customText.heading,
            })}
          >
            Name
          </Typography>
          <Typography
            sx={theme => ({
              fontSize: "0.875rem",
              color: theme.palette.customText.textMuted,
            })}
          >
            Slogan
          </Typography>
        </Box>
        <Box
          component="nav"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            px: 3,
            mt: 6,
          }}
        >
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              style={{
                fontSize: "1rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => setIsDrawerOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
