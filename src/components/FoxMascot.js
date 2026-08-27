import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Fox, the companion from the Fox widget app.
 * Illustrations live in public/mascot/ and are keyed by mood. The folder is
 * deliberately not named "fox": that would collide with the /fox route on
 * GitHub Pages, which serves a real directory in preference to the SPA.
 */
const moods = {
  focused: { file: 'focused.png', alt: 'Fox working at a laptop' },
  reading: { file: 'reading.png', alt: 'Fox reading with glasses' },
  proud: { file: 'proud.png', alt: 'Fox cheering with both arms up' },
  judging: { file: 'judging.png', alt: 'Fox with arms crossed, unimpressed' },
  sleepy: { file: 'sleepy.png', alt: 'Fox asleep on a cushion' },
  happy: { file: 'happy.png', alt: 'Fox winking and waving' },
};

const Image = styled(motion.img)`
  display: block;
  width: ${({ $size }) => $size}px;
  height: auto;
  user-select: none;
  -webkit-user-drag: none;
`;

const FoxMascot = ({ mood = 'focused', size = 160, ...props }) => {
  const { file, alt } = moods[mood] || moods.focused;
  const base = process.env.PUBLIC_URL || '';

  return (
    <Image
      key={file}
      src={`${base}/mascot/${file}`}
      alt={alt}
      $size={size}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    />
  );
};

export default FoxMascot;
