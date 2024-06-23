import { Box, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface ICountdownProps {
  targetDate: string;
}

const CountdownContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: 'center',
}));

const Countdown: React.FC<ICountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownContainer>
      <Typography variant="h4">Countdown</Typography>
      <Typography variant="h6">
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds}{' '}
        Seconds
      </Typography>
    </CountdownContainer>
  );
};

const calculateTimeLeft = (
  targetDate: string,
): Partial<{ days: number; hours: number; minutes: number; seconds: number }> => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default Countdown;
