import React from "react";
import HeadShotWithText from "../../components/headShotWithText/headShotWithText";
import headShotPic from "../../assets/pictures/headshots/placeholder-headshot.png";
import { Box, Typography } from "@mui/material";

const teamMembers = [
  {
    imageSrc: headShotPic,
    name: "John Doe, MD",
    role: "Lorem Ipsum Position",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Jane Smith, CNS-BC",
    role: "Lorem Ipsum Position",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Alex Johnson, BS",
    role: "Lorem Ipsum Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Chris Lee, BS",
    role: "Lorem Ipsum Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Taylor Morgan, MBA",
    role: "Lorem Ipsum Title",
    bio: "",
  },
];

const Team = () => {
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
        Meet The Team
      </Typography>

      <HeadShotWithText members={teamMembers} />
    </Box>
  );
};

export default Team;