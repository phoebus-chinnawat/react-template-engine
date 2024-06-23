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
  margin: theme.spacing(2),
}));

const Countdown: React.FC<ICountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      if (!newTimeLeft) {
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  if (!timeLeft) {
    return (
      <CountdownContainer>
        <Typography variant="h6">The countdown has ended!</Typography>
      </CountdownContainer>
    );
  }

  return (
    <CountdownContainer>
      <Typography variant="h6">
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds}{' '}
        Seconds
      </Typography>
    </CountdownContainer>
  );
};

const calculateTimeLeft = (
  targetDate: string,
): Partial<{ days: number; hours: number; minutes: number; seconds: number }> | null => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = null;

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
