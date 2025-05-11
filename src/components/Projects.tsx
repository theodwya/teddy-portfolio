import React from 'react';
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  useColorModeValue,
  chakra,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(chakra.div);

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'NexaVerse Dashboard',
    description: 'A powerful dashboard for NexaVerse analytics.',
    imageUrl: '/assets/img/work-1.jpg',
    url: '/projects/nexaverse-dashboard',
  },
  {
    id: '2',
    title: 'TaskMaster Mobile App',
    description: 'Mobile app for task management and productivity.',
    imageUrl: '/assets/img/work-2.jpg',
    url: '/projects/taskmaster',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts.',
    imageUrl: '/assets/img/work-3.jpg',
    url: '/projects/analytics-dashboard',
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  // Your brand colors
  const bg = useColorModeValue('#F9F9E9', '#1A202C'); // light/dark background fallback
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('#000000', '#D4E44D'); // black or chartreuse
  const accentColor = useColorModeValue('#E31B23', '#D4E44D'); // red or chartreuse

  return (
    <Box bg={bg} minH="100vh" py={16} px={{ base: 4, md: 12 }}>
      <Heading
        mb={12}
        color={accentColor}
        fontFamily="heading"
        fontSize={{ base: '3xl', md: '4xl' }}
        textAlign="center"
      >
        My Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
        {projects.map((project) => (
          <MotionBox
            key={project.id}
            bg={cardBg}
            rounded="md"
            shadow="md"
            overflow="hidden"
            cursor="pointer"
            whileHover={{ scale: 1.05, boxShadow: `0 10px 20px ${accentColor}88` }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            as="a"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            role="group"
          >
            <Box overflow="hidden" height="200px" position="relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                objectFit="cover"
                width="100%"
                height="100%"
                transition="transform 0.3s ease"
                _groupHover={{ transform: 'scale(1.1)' }}
                loading="lazy"
              />
            </Box>
            <Box p={6}>
              <Text
                fontWeight="bold"
                fontSize={{ base: 'xl', md: '2xl' }}
                mb={2}
                color={accentColor}
                fontFamily="heading"
              >
                {project.title}
              </Text>
              <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }} noOfLines={3}>
                {project.description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}