import { useMemo, useState, useEffect } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Faq from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";

function App() {
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = useMemo(() => {
    // brandHue: Hue value (0–360) used to generate brand color variants
    // Common hues: Red=0, Orange=30, Yellow=50, Green=120, Blue=220, Purple=280, Pink=350
    const brandHue = 350;
    const brandSaturation = "65%";

    const baseColors = {
      light: {
        backgroundDefault: "#fefefe",         // Still bright, clean base
        backgroundPaper: "#ffffff",           // Main content paper stays white
        cardBackground: "#f9fafb",            // Light gray for separation
        footerBackground: "#e5e7eb",          // Noticeably gray, distinct from content
        textPrimary: "#0f172a",               // Strong navy black
        textSecondary: "#1e293b",             // Dark slate for contrast
        textTertiary: "#475569",              // Muted text
        footerMuted: "#6b7280",               // Mid-gray text for footer
        footerLink: "#1d4ed8",                // Clear interactive blue
        border: "#cbd5e1",                    // More defined light gray border
      },
      dark: {
        backgroundDefault: "#111827",
        backgroundPaper: "#1f2937",
        cardBackground: "#1f2937",
        footerBackground: "#0b1120",
        textPrimary: "#ffffff",
        textSecondary: "#e5e7eb",
        textTertiary: "#d1d5db",
        footerMuted: "#6b7280",
        footerLink: "#d1d5db",
        border: "#374151",
      },
    };

    const colors = mode === "dark" ? baseColors.dark : baseColors.light;

    // Dynamically generate brand variants from hue
    const brand = {
      main: `hsl(${brandHue}, ${brandSaturation}, 35%)`,
      accent: `hsl(${brandHue}, ${brandSaturation}, 15%)`,
      basePink: `hsl(${brandHue}, ${brandSaturation}, 55%)`,
      basePinkLight: `hsl(${brandHue}, ${brandSaturation}, 65%)`,
      basePinkDark: `hsl(${brandHue}, ${brandSaturation}, 30%)`,
      basePinkLightest: `hsl(${brandHue}, ${brandSaturation}, 80%)`,
      baseDark: "#404040",
      baseLight: "#E2E2E2",
      skyBlue: "#61dbfb",
      linkedin: "#0077b5",
      youtube: "#FF0000",
    };

    return createTheme({
      palette: {
        mode,
        background: {
          default: colors.backgroundDefault,
          paper: colors.backgroundPaper,
        },
        customText: {
          heading: colors.textPrimary,
          subheading: colors.textSecondary,
          textMuted: mode === "dark" ? "#9ca3af" : "#4b5563",
          body: colors.textTertiary,
          footerMuted: colors.footerMuted,
          footerLink: colors.footerLink,
        },
        customBackground: {
          section: colors.backgroundDefault,
          highlightBox: colors.cardBackground,
          surfaceLight: "#f9fafb",
          footer: colors.footerBackground,
        },
        customBorder: {
          standard: colors.border,
        },
        customCard: {
          background: colors.cardBackground,
          border: colors.border,
          radius: "1.5rem",
          padding: { xs: 4, md: 6 },
        },
        brand,
      },
      typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
      },
      transitions: {
        duration: {
          standard: 300,
        },
        easing: {
          standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
      customTransitions: {
        surface: (theme) =>
          theme.transitions.create(["background-color", "border-color"], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.standard,
          }),
        text: (theme) =>
          theme.transitions.create("color", {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.standard,
          }),
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
