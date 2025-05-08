import React, { useState, useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

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
  fontSize = { base: '4xl', md: '5xl' },
  color,
  fontWeight = 'extrabold',
  fontFamily = 'heading',
  minWidth = '350px',
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Use brand colors from theme if color prop not provided
  const textColor = useColorModeValue(color ?? 'brand.cardinal', color ?? 'brand.black');
  const borderColor = useColorModeValue('brand.cardinal', 'brand.black');

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
      fontSize={fontSize}
      color={textColor}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      minW={minWidth}
      whiteSpace="nowrap"
      borderRight="3px solid"
      borderColor={borderColor}
      pr={2}
      userSelect="none"
      textShadow="1px 1px 2px rgba(0,0,0,0.15)"
    >
      {displayedText}
    </Box>
  );
}