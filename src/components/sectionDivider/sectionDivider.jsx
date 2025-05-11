import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionDivider = ({ text }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        my: 12,
        px: 4,
      }}
    >
      {/* Static gradient divider line */}
      <Box
        sx={theme => ({
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 0,
          height: '2px',
          width: '100%',
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(to right, #1f2937, #4b5563, #1f2937)'
            : 'linear-gradient(to right, #e5e7eb, #9ca3af, #e5e7eb)',
          transition: theme.customTransitions.surface(theme),
        })}
      />

      {/* Centered and animated text */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.div style={{ x }}>
          <Box
            sx={theme => ({
              bgcolor: theme.palette.customBackground.section,
              px: 4,
              py: 1,
              transition: theme.customTransitions.surface(theme),
              display: 'inline-block',
            })}
          >
            <Typography
              variant="h4"
              sx={theme => ({
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                color: theme.palette.customText.heading,
                transition: theme.customTransitions.text(theme),
              })}
            >
              {text}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default SectionDivider;
