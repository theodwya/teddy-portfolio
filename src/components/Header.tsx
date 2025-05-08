import React from 'react';
import { Flex, HStack, Box, useColorModeValue, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  // Use brand background colors for light/dark mode
  const bg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  // Optional: add subtle border or shadow color from theme
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(212, 228, 77, 0.3)');

  return (
    <Box
      bg={bg}
      px={{ base: 6, md: 12 }}
      py={3}
      shadow={`0 2px 4px ${shadowColor}`}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex maxW="900px" mx="auto" alignItems="center" gap={4}>
        {/* Logo wrapped in Router Link */}
        <Link as={RouterLink} to="/" display="inline-block" _hover={{ textDecoration: 'none' }}>
          <Image
            src="/assets/logo.png" // Adjust path if needed
            alt="Teddy Wyatt Solutions Logo"
            height="45px"
            objectFit="contain"
            cursor="pointer"
          />
        </Link>

        {/* Spacer to push nav buttons right */}
        <Box flex="1" />

        {/* Navigation Buttons */}
        <HStack spacing={4}>
          {navItems.map(({ label, path }) => (
            <AnimatedButton key={label} label={label} to={path} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}