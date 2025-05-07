import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedButton from '../components/AnimatedButton';

export default function LandingPage() {
  const containerBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('night.900', 'white');
  const bodyColor = useColorModeValue('blackAlpha.800', 'gray.300');
  const accentColor = useColorModeValue('icterine.400', 'icterine.400');

  const landingBlurb = `
From Navy submarine mechanic to FAANG software engineer, I bring 15+ years of disciplined problem-solving and technical mastery to every project. 
Driven by passion and precision, I build scalable, impactful software solutions that improve lives. 
Specializing in full-stack development, I combine deep technical expertise with a relentless focus on clean, maintainable code and innovative design.
`;

  return (
    <Flex
      bg={useColorModeValue('gray.50', 'gray.900')}
      minH="100vh"
      align="center"
      justify="center"
      px={{ base: 6, md: 12 }}
    >
      <Box
        bg={containerBg}
        borderRadius="lg"
        boxShadow="lg"
        maxW="1200px"
        w="full"
        p={{ base: 6, md: 12 }}
        display={{ base: 'block', md: 'flex' }}
        alignItems="center"
        gap={10}
        mt={-400}  // reduced top margin for seamless flow
        mb={6}
      >
        {/* Left content */}
        <Box flex="1" maxW={{ base: '100%', md: '50%' }}>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            fontWeight="bold"
            color={headingColor}
            fontFamily="serif"
          >
            Teddy Wyatt | Your Future Tech Solutions Expert 
          </Heading>

          <Text fontSize="lg" mb={8} maxW="lg" color={bodyColor} lineHeight="tall" whiteSpace="pre-line">
            {landingBlurb}
          </Text>

          <HStack spacing={6}>
            <AnimatedButton
              label="View My Projects"
              onClick={() => (window.location.href = '/projects')}
            />
            <Button
              as={RouterLink}
              to="/contact"
              bg={accentColor}
              color="night.900"
              fontWeight="bold"
              rounded="md"
              px={6}
              py={3}
              _hover={{ bg: 'icterine.300' }}
              fontFamily="serif"
            >
              Get in Touch
            </Button>
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
            boxShadow="lg"
          />
        </Box>
      </Box>
    </Flex>
  );
}