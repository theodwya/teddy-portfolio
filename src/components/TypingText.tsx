import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;    // ms per letter
  deletingSpeed?: number;  // ms per letter deleting
  pauseTime?: number;      // ms pause before deleting
  fontSize?: string | object;
  color?: string;
  fontWeight?: string;
  fontFamily?: string;
  minWidth?: string | object;
}

export default function TypingText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  fontSize = { base: '3xl', md: '4xl' },
  color = 'icterine.400',
  fontWeight = 'bold',
  fontFamily = 'serif',
  minWidth = '350px',
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentText = texts[textIndex];

    if (!isDeleting && displayedText.length < currentText.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <Box
      as="span"
      fontSize={{ base: '4xl', md: '5xl' }}  // bigger font size
      color="night.900"                      // strong dark color
      fontWeight="extrabold"                 // very bold
      fontFamily="serif"
      minW={minWidth}
      whiteSpace="nowrap"
      borderRight="3px solid"                // slightly thicker cursor
      borderColor="night.900"
      pr={2}
      userSelect="none"
      textShadow="1px 1px 2px rgba(0,0,0,0.15)"  // subtle shadow for depth
    >
      {displayedText}
    </Box>
  );
}