import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import AnimatedButton from '../components/AnimatedButton';

export default function LandingPage() {
  // Use brand tokens for colors
  const containerBg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const headingColor = useColorModeValue('brand.cardinal', 'brand.chartreuse');
  const bodyColor = useColorModeValue('brand.textPrimaryLight', 'brand.textSecondaryDark');


  const landingBlurb = `
From Navy submarine mechanic to FAANG software engineer, I bring 15+ years of disciplined problem-solving and technical mastery to every project. 
Driven by passion and precision, I build scalable, impactful software solutions that improve lives. 
Specializing in full-stack development, I combine deep technical expertise with a relentless focus on clean, maintainable code and innovative design.
`;

  return (
    <Flex
      bg={useColorModeValue('brand.backgroundLight', 'brand.backgroundDark')}
      align="center"
      justify="center"
      px={{ base: 6, md: 12 }}
      py={{ base: 10, md: 20 }}
    >
      <Box
        bg={containerBg}
        borderRadius="md"
        boxShadow="md"
        maxW="900px"
        w="full"
        p={{ base: 6, md: 12 }}
        display={{ base: 'block', md: 'flex' }}
        alignItems="center"
        gap={10}
        mt={0}
      >
        {/* Left content */}
        <Box flex="1" maxW={{ base: '100%', md: '50%' }}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            fontWeight="bold"
            color={headingColor}
            fontFamily="heading"
          >
            Teddy Wyatt | Your Future Tech Solutions Expert 
          </Heading>

          <Text fontSize="lg" mb={8} maxW="lg" color={bodyColor} lineHeight="tall" whiteSpace="pre-line" fontFamily="body">
            {landingBlurb}
          </Text>

          <HStack spacing={6}>
            <AnimatedButton
              label="View My Projects"
              onClick={() => (window.location.href = '/projects')}
            />
            <AnimatedButton
    label="Get in Touch"
    to="/contact"
  />
          </HStack>
        </Box>

        {/* Right image */}
        <Box flex="1" maxW={{ base: '100%', md: '50%' }} textAlign="center">
          <Image
            src="/assets/img/about-me.png"
            alt="Teddy Wyatt"
            borderRadius="md"
            maxW="100%"
            maxH="400px"
            objectFit="cover"
            mx="auto"
            boxShadow="md"
          />
        </Box>
      </Box>
    </Flex>
  );
}