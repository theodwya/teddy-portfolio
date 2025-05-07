import React from 'react';
import { Flex, HStack, Box, useColorModeValue, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';


const navItems = [
  { label: 'Home', path: '/' }, // Changed to '/' for landing page
  { label: 'About Me', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const bg = useColorModeValue('french_gray.50', 'space_cadet.800');

  return (
    <Box bg={bg} px={6} py={3} shadow="md" position="sticky" top="0" zIndex="1000">
      <Flex maxW="900px" mx="auto" alignItems="center" gap={4}>
        {/* Logo wrapped in Router Link */}
        <Link as={RouterLink} to="/" display="inline-block" _hover={{ textDecoration: 'none' }}>
          <Image
            src='/assets/logo.png' // Adjust the path to your logo image
            alt="Teddy Wyatt Solutions Logo"
            height="45px"
            objectFit="contain"
            cursor="pointer"
          />
        </Link>

        {/* Spacer to push logo left */}
        <Box flex="1" />

        {/* Buttons */}
        <HStack spacing={4}>
          {navItems.map(({ label, path }) => (
            <AnimatedButton key={label} label={label} to={path} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}