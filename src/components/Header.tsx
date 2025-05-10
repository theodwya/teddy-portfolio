import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Image,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

function NavLink({ label, path }: { label: string; path: string }) {
  const linkColor = useColorModeValue('brand.black', 'brand.chartreuse');
  const linkHoverColor = useColorModeValue('brand.cardinal', 'brand.cardinal');

  return (
    <Link
      as={RouterLink}
      to={path}
      px={3}
      py={2}
      rounded="md"
      fontWeight="semibold"
      fontFamily="heading"
      fontSize="md"
      color={linkColor}
      _hover={{
        textDecoration: 'none',
        color: linkHoverColor,
      }}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const shadowColor = useColorModeValue('rgba(0,0,0,0.1)', 'rgba(212, 228, 77, 0.3)');
  const mobileMenuBG= useColorModeValue('brand.chartreuse', 'brand.cardinal');
  const mobileMenuColor= useColorModeValue('brand.black', 'brand.backgroundDark');
  const mobileMenuHover= useColorModeValue('brand.cardinal', 'brand.chartreuse');
  const logoSrc = useColorModeValue('/assets/logo.png', '/assets/logo-dark.png');


  return (
    <Box
      bg={bg}
      px={{ base: 4, md: 8 }}
      py={3}
      shadow={`0 2px 4px ${shadowColor}`}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex maxW="900px" mx="auto" alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Image
            src={logoSrc}
            alt="Teddy Wyatt Solutions Logo"
            height={{ base: '100px', md: '150px' }}
            objectFit="contain"
            cursor="pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          {navItems.map(({ label, path }) => (
            <NavLink key={label} label={label} path={path} />
          ))}
          <Button
            onClick={toggleColorMode}
            aria-label="Toggle Dark Mode"
            size="sm"
            fontSize="md"
            fontWeight="bold"
            fontFamily="heading"
            bg={useColorModeValue('brand.chartreuse', 'brand.cardinal')}
            color={useColorModeValue('brand.black', 'brand.backgroundDark')}
            _hover={{ bg: useColorModeValue('brand.cardinal', 'brand.chartreuse') }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

        {/* Mobile Hamburger */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          bg={useColorModeValue('brand.chartreuse', 'brand.cardinal')}
          color={useColorModeValue('brand.black', 'brand.backgroundDark')}
          _hover={{ bg: useColorModeValue('brand.cardinal', 'brand.chartreuse') }}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {navItems.map(({ label, path }) => (
              <NavLink key={label} label={label} path={path} />
            ))}
            <Button
              onClick={toggleColorMode}
              aria-label="Toggle Dark Mode"
              size="sm"
              fontSize="md"
              fontWeight="bold"
              fontFamily="heading"
              bg={mobileMenuBG}
              color={mobileMenuColor}
              _hover={{ bg: mobileMenuHover}}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}