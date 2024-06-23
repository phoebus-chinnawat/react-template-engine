// SocialMediaFeed.tsx
import { Box, Typography, styled } from '@mui/material';
import React from 'react';

export interface ISocialMediaFeedProps {
  platform: 'twitter' | 'instagram';
  handle: string;
}

const FeedContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const SocialMediaFeed: React.FC<ISocialMediaFeedProps> = ({ platform, handle }) => {
  const feedSrc =
    platform === 'twitter'
      ? `https://twitter.com/${handle}`
      : `https://instagram.com/${handle}/embed`;

  return (
    <FeedContainer>
      <Typography variant="h4">
        {platform.charAt(0).toUpperCase() + platform.slice(1)} Feed
      </Typography>
      <iframe src={feedSrc} width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
    </FeedContainer>
  );
};

export default SocialMediaFeed;
