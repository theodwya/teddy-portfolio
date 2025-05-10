import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  useColorModeValue,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FaShip, FaLaptopCode, FaAws, FaAward } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const timelineItems = [
  {
    year: '2007 - 2019',
    title: 'Navy Submarine Mechanic',
    description: '13 years of disciplined service maintaining critical systems.',
    icon: FaShip,
    link: '/projects/navy-experience',
  },
  {
    year: '2019 - 2021',
    title: 'Technical Account Manager at AWS',
    description: 'Led AWS product adoption and client success.',
    icon: FaAws,
    link: '/projects/aws-tam',
  },
  {
    year: '2021 - 2024',
    title: 'Cloud Engineer at AWS',
    description: 'Designed scalable cloud infrastructure and automated pipelines.',
    icon: FaAws,
    link: '/projects/aws-cloud-engineer',
  },
  {
    year: '2024 - Present',
    title: 'Full Stack Developer',
    description: 'Building scalable, secure applications with modern tech.',
    icon: FaLaptopCode,
    link: '/projects/fullstack',
  },
  {
    year: 'Awards',
    title: 'Distinctions & Honors',
    description: 'Dean’s Fellowship, Alpha Sigma Lambda, and more.',
    icon: FaAward,
    link: '/projects/awards',
  },
];

export function ProfessionalTimeline() {
  const lineColor = useColorModeValue('brand.cardinal', 'brand.chartreuse');
  const bg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const textColor = useColorModeValue('brand.textPrimaryLight', 'brand.textSecondaryDark');

  return (
    <Box bg={bg} p={8} rounded="md" shadow="md" maxW="900px" mx="auto" mb={12}>
      <Heading fontFamily="heading" color={lineColor} mb={6} textAlign="center" fontSize={{ base: '2xl', md: '3xl' }}>
        Professional Timeline
      </Heading>
      <VStack spacing={8} position="relative" pl={8} _before={{
        content: '""',
        position: 'absolute',
        left: '24px',
        top: 0,
        bottom: 0,
        width: '4px',
        bg: lineColor,
        borderRadius: '2px',
      }}>
        {timelineItems.map(({ year, title, description, icon, link }) => (
          <HStack key={year} align="start" spacing={6} cursor="pointer" as={RouterLink} to={link} _hover={{ textDecoration: 'none', color: lineColor }}>
            <Box
              bg={lineColor}
              color={bg}
              p={3}
              rounded="full"
              boxShadow="md"
              flexShrink={0}
            >
              <Icon as={icon as React.ElementType} w={6} h={6} />
            </Box>
            <Box>
              <Text fontWeight="bold" fontFamily="heading" fontSize="lg" color={lineColor}>
                {year}
              </Text>
              <Heading fontFamily="heading" size="md" color={textColor} mb={1}>
                {title}
              </Heading>
              <Text fontFamily="body" color={textColor} maxW="600px">
                {description}
              </Text>
            </Box>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
} 