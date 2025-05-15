import HeroSection from "../../components/hero/HeroSection";
import chevronDown from "/icons/arrows/chevron-down.svg";
import TwistomyGenCapWafer from "../../assets/pictures/Twistomy_gen_cap_wafer.png";
import Twist from "../../assets/pictures/Twisted.png";
import ContinentAssembly from "../../assets/pictures/continent_assembly_exploded.png";
import ExcretoryAssembly from "../../assets/pictures/excretory_assembly_collapsed.png";
import Table from "../../assets/pictures/Table.png";
import ContentWithImage from "../../components/contentWithImage/ContentWithImage";
import SectionDivider from "../../components/sectionDivider/sectionDivider";

import { Box, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={theme => ({
        bgcolor: theme.palette.customBackground.section,
        color: theme.palette.customText.body,
        transition: theme.customTransitions.surface(theme),
      })}
    >
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          bgcolor: "black",
          color: "white",
          height: "93vh",
          position: "relative",
        }}
      >
        <HeroSection />

        {/* Bouncing Arrow */}
        <Box
          onClick={() => {
            const detailsSection = document.getElementById("details-section");
            if (detailsSection) {
              detailsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          sx={{
            position: "absolute",
            zIndex: 20,
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={chevronDown}
            alt="Scroll Down"
            sx={{
              width: 40,
              height: 40,
              cursor: "pointer",
              animation: "bounce 2s infinite",
              filter: theme.palette.mode === "dark"
                ? "invert(87%) sepia(11%) saturate(233%) hue-rotate(179deg) brightness(94%) contrast(85%)" // matches #d1d5db
                : "invert(22%) sepia(5%) saturate(784%) hue-rotate(173deg) brightness(94%) contrast(91%)", // matches #374151
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          />
        </Box>
      </Box>

      <SectionDivider text="Lorem ipsum" />

      <Box id="details-section">
        {/* Keep original ContentWithImage calls, but eventually convert props */}
        <ContentWithImage
          imageSrc={TwistomyGenCapWafer}
          imageAlt="About Twistomy™"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue dui sed cursus feugiat. In lobortis nisl nec risus tincidunt, vel rhoncus quam viverra. Aenean imperdiet, metus nec fermentum efficitur, nulla quam posuere risus, nec rhoncus sem odio ut lorem.",
            },
          ]}
          imageOnLeft={true}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />

        <ContentWithImage
          imageSrc={TwistomyGenCapWafer}
          imageAlt="The Problem"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec blandit dolor. Suspendisse in orci vitae ligula varius consequat. Morbi porta sollicitudin sagittis. Pellentesque fermentum sapien eget justo malesuada, ac fringilla tellus tincidunt.",
            },
          ]}
          imageOnLeft={false}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />

        <SectionDivider text="Lorem ipsum" />

        <ContentWithImage
          imageSrc={ContinentAssembly}
          imageAlt="The Twistomy™ Solution"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim, justo ac lobortis cursus, tellus nisi porta justo, in mattis risus urna sit amet lorem.",
            },
          ]}
          imageOnLeft={true}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />

        <ContentWithImage
          imageSrc={Twist}
          imageAlt="Core Features"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim magna in libero faucibus, in dictum velit feugiat. Duis id faucibus eros.",
            },
          ]}
          imageOnLeft={false}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />

        <ContentWithImage
          imageSrc={ExcretoryAssembly}
          imageAlt="Seamless Integration & User Control"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra turpis ut est fringilla, a lacinia risus egestas. Suspendisse potenti. Integer ac purus velit. Nullam porta a erat nec imperdiet.",
            },
          ]}
          imageOnLeft={true}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />

        <SectionDivider text="Lorem ipsum" />

        <ContentWithImage
          imageSrc={Table}
          imageAlt="What makes Twistomy™ different?"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, velit nec blandit viverra, augue sapien tincidunt metus, eget commodo justo nisl ac lorem.",
            },
          ]}
          imageOnLeft={true}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />

        <ContentWithImage
          imageAlt="Why Twistomy™?"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta arcu a velit iaculis, sed porttitor felis ultrices. Duis rhoncus congue justo, nec tempus turpis ultrices ut.",
            },
          ]}
          imageOnLeft={false}
          paddingX={{ xs: 6, md: 12 }}
          imageSx={{ borderRadius: "0.5rem" }}
          textSx={{
            textAlign: { xs: "center", md: "left" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
