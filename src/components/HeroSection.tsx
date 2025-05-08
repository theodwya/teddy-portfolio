import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingText from './TypingText';

const MotionBox = motion(Box);

const techIcons = [
  '/assets/tech-icons/git.svg',
  '/assets/tech-icons/react.svg',
  '/assets/tech-icons/python.svg',
  '/assets/tech-icons/springboot.svg',
  '/assets/tech-icons/github.svg',
  '/assets/tech-icons/aws.svg',
  '/assets/tech-icons/docker.svg',
  '/assets/tech-icons/typescript.svg',
  '/assets/tech-icons/css.svg',
  '/assets/tech-icons/html5.svg',
  '/assets/tech-icons/javascript.svg',
  '/assets/tech-icons/nodedotjs.svg',
];

const rotatingTexts = [
  'A FullStack Developer.',
  'A Web Designer.',
  'A DevOps Engineer.',
  'A Software Engineer.',
  'A Cloud Engineer.',
  'Your Tech Solutions Expert.',
];

export default function HeroSection() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  // Use brand colors from theme tokens
  const bg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const helloColor = useColorModeValue('brand.cardinal', 'brand.chartreuse');
  const nameColor = useColorModeValue('brand.black', 'brand.chartreuse');
  const rotatingTextColor = useColorModeValue('brand.cardinal', 'brand.black');

  useEffect(() => {
    const iconTimer = setInterval(() => {
      setCurrentIconIndex((i) => (i + 1) % techIcons.length);
    }, 4000);
    return () => clearInterval(iconTimer);
  }, []);

  return (
    <Box
      bg={bg}
      py={{ base: 12, md: 16 }}
      px={{ base: 6, md: 12 }}
      rounded="md"
      shadow="md"
      mb={12}
      maxW="900px"
      mx="auto"
    >
      <Flex direction="column" align="center" gap={8}>
        <Heading
          as="h1"
          fontSize={{ base: '6xl', md: '8xl' }}
          fontWeight="extrabold"
          color={helloColor}
          fontFamily="heading"
          textAlign="center"
          lineHeight="1"
        >
          Hello,
        </Heading>

        <Flex align="center" gap={6} flexWrap="wrap" justify="center">
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            color={nameColor}
            fontFamily="heading"
            mb={0}
          >
            I am Teddy
          </Heading>
          <Image
            src="/assets/profile-photo.png"
            alt="Teddy Wyatt"
            boxSize={{ base: '100px', md: '150px' }}
            borderRadius="full"
            objectFit="cover"
            boxShadow="lg"
          />
        </Flex>

        <Box position="relative" height={{ base: '120px', md: '150px' }} width={{ base: '120px', md: '150px' }}>
          <AnimatePresence mode="wait">
            <MotionBox
              key={techIcons[currentIconIndex]}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8 }}
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              mx="auto"
              my="auto"
              maxH="150px"
              maxW="150px"
            >
              <Image src={techIcons[currentIconIndex]} alt="Tech Icon" maxH="150px" maxW="150px" mx="auto" />
            </MotionBox>
          </AnimatePresence>
        </Box>

        <Box minW={{ base: '350px', md: '400px' }} textAlign="center" mt={4}>
          <Box
            bgGradient="linear(to-r, brand.chartreuse, brand.chartreuse)"
            px={4}
            py={2}
            rounded="md"
            display="inline-block"
            boxShadow="md"
          >
            <TypingText
              texts={rotatingTexts}
              typingSpeed={100}
              deletingSpeed={50}
              pauseTime={1500}
              fontSize={{ base: '3xl', md: '4xl' }}
              color={rotatingTextColor}
              fontWeight="bold"
              fontFamily="heading"
              minWidth="400px"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}