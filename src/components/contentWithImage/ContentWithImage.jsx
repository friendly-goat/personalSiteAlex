import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typography, Box } from "@mui/material";

const ContentWithImage = ({
  imageSrc,
  imageAlt = "",
  imageOnLeft = false,
  content = [],
  paddingX,      // replaces containerStyle
  imageSx = {},  // replaces imageStyle
  textSx = {},   // replaces textStyle
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      if (imageSrc) {
        imageControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.8 },
        });
      }
      textControls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    }
  }, [isInView, imageSrc, imageControls, textControls]);

  const renderContent = () =>
    content.map((item, index) => {
      switch (item.type) {
        case "header":
          return (
            <Typography
              key={index}
              component="h2"
              sx={theme => ({
                fontSize: {
                  xs: '1.875rem',
                  md: '2.25rem',
                },
                fontWeight: 800,
                mb: 3,
                lineHeight: '1.25',
                color: theme.palette.customText.heading,
                textAlign: 'center', // ✅ center header only
                transition: theme.customTransitions.text(theme),
              })}
            >
              {item.text}
            </Typography>
          );
        case "subheader":
          return (
            <Typography
              key={index}
              component="h3"
              sx={theme => ({
                fontSize: {
                  xs: '1.25rem',
                  md: '1.5rem',
                },
                fontWeight: 600,
                mb: 3,
                lineHeight: '1.375',
                color: theme.palette.customText.subheading,
                transition: theme.customTransitions.text(theme),
              })}
            >
              {item.text}
            </Typography>
          );
        case "paragraph":
          return (
            <Typography
              key={index}
              component="p"
              sx={theme => ({
                fontSize: {
                  xs: '1rem',
                  md: '1.125rem',
                },
                mb: 3,
                lineHeight: '1.625',
                color: theme.palette.customText.body,
                transition: theme.customTransitions.text(theme),
              })}
            >
              {item.text}
            </Typography>
          );
        default:
          return null;
      }
    });

  const imageInitial = { x: imageOnLeft ? "100vw" : "-100vw", opacity: 0 };
  const textInitial = { x: imageOnLeft ? "-100vw" : "100vw", opacity: 0 };

  return (
    <Box
      ref={ref}
      component="section"
      sx={theme => ({
        py: { xs: 8, md: 10 },
        px: paddingX ?? { xs: 6, md: 16 },
        bgcolor: theme.palette.customBackground.section,
        transition: theme.customTransitions.surface(theme),
        overflow: 'hidden',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: imageOnLeft ? 'row-reverse' : 'row',
          },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: {
            xs: 10,
            md: 14,
          },
        }}
      >
        {imageSrc && (
          <motion.div
            initial={imageInitial}
            animate={imageControls}
            style={{ width: '100%' }}
          >
            <Box
              component="img"
              src={imageSrc}
              alt={imageAlt}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '1rem',
                ...imageSx,
              }}
            />
          </motion.div>
        )}

        <motion.div
          initial={textInitial}
          animate={textControls}
          style={{ width: '100%' }}
        >
          <Box
            sx={theme => ({
              width: '100%',
              bgcolor: theme.palette.customCard.background,
              border: `1px solid ${theme.palette.customCard.border}`,
              borderRadius: theme.palette.customCard.radius,
              p: theme.palette.customCard.padding,
              transition: theme.customTransitions.surface(theme),
              ...textSx,
            })}
          >
            {renderContent()}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContentWithImage;

ContentWithImage.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageOnLeft: PropTypes.bool,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["header", "subheader", "paragraph"]).isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  paddingX: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  imageSx: PropTypes.object,
  textSx: PropTypes.object,
};
