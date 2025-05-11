import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const HeadShotWithText = ({ members }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      {members.map((member, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <Box
            key={index}
            onClick={() => handleClick(index)}
            sx={theme => ({
              position: 'relative',
              width: {
                xs: '100%',
                sm: 280,
                md: 300,
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              bgcolor: theme.palette.mode === 'dark'
                ? theme.palette.customBackground.highlightBox
                : theme.palette.customBackground.surfaceLight,
              p: 6,
              borderRadius: '1rem',
              minHeight: 320,
              cursor: member.bio ? 'pointer' : 'default',
              overflow: 'hidden',
              transition: theme.customTransitions.surface(theme),
              border: `1px solid ${theme.palette.brand.basePink}`, // ✅ same pink as header
            })}
          >
            {/* Expandable image */}
            <Box
              component="img"
              src={member.imageSrc}
              alt={member.name}
              sx={{
                position: 'absolute',
                objectFit: 'cover',
                transition: 'all 0.3s ease-in-out',
                ...(isExpanded
                  ? {
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      zIndex: 10,
                      borderRadius: 0,
                    }
                  : {
                      width: 96,
                      height: 96,
                      top: 24,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '9999px',
                      zIndex: 10,
                      '&:hover': {
                        transform: 'translateX(-50%) scale(1.05)',
                      },
                    }),
              }}
            />

            {/* Fades when expanded */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 20,
                transition: 'opacity 0.3s ease-in-out',
                opacity: isExpanded ? 0 : 1,
                pointerEvents: isExpanded ? 'none' : 'auto',
              }}
            >
              <Box
                sx={{
                  mt: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    component="h3"
                    sx={theme => ({
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: theme.palette.customText.heading,
                      mb: 1,
                    })}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={theme => ({
                      fontSize: '0.875rem',
                      color: theme.palette.brand.basePink, // ✅ match nav pink
                      mb: 2,
                    })}
                  >
                    {member.role}
                  </Typography>
                </Box>

                {member.bio && (
                  <Typography
                    sx={theme => ({
                      fontSize: '0.875rem',
                      color: theme.palette.customText.body,
                      mt: 2,
                    })}
                  >
                    {member.bio}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

HeadShotWithText.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      bio: PropTypes.string,
    })
  ).isRequired,
};

export default HeadShotWithText;
