import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Link,
  Icon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCloud,
  FaCode,
  FaCogs,
  FaShieldAlt,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa';
import AnimatedButton from './AnimatedButton';

const MotionBox = motion(Box);

const services = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'Building scalable, secure, and maintainable web and mobile applications using modern technologies.',
    icon: FaCode,
    link: '/projects/fullstack',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Designing and automating cloud infrastructure and CI/CD pipelines on AWS, Azure, GCP, and Kubernetes.',
    icon: FaCloud,
    link: '/projects/cloud-devops',
  },
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    description:
      'Migrating legacy systems to microservices and event-driven architectures for improved scalability.',
    icon: FaProjectDiagram,
    link: '/projects/microservices',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description:
      'Ensuring applications meet FedRAMP, GDPR, ATO, and ICD 503 compliance with best security practices.',
    icon: FaShieldAlt,
    link: '/projects/security',
  },
  {
    id: 'automation',
    title: 'Automation & Scripting',
    description:
      'Custom scripting and automation to streamline workflows and reduce manual effort.',
    icon: FaCogs,
    link: '/projects/automation',
  },
  {
    id: 'leadership',
    title: 'Technical Leadership & Mentorship',
    description:
      'Providing guidance and mentoring to engineering teams to improve productivity and delivery.',
    icon: FaUsers,
    link: '/projects/leadership',
  },
];

export default function MyServices() {
  const bg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const headingColor = useColorModeValue('brand.cardinal', 'brand.chartreuse');
  const textColor = useColorModeValue('brand.textPrimaryLight', 'brand.textSecondaryDark');
  const boxBg = useColorModeValue('white', 'gray.700');
  const boxShadow = useColorModeValue('md', 'dark-lg');
  const iconBg = useColorModeValue('brand.chartreuse', 'brand.cardinal');
  const iconColor = useColorModeValue('brand.black', 'brand.backgroundDark');

  // Floating animation with random-ish x and y movement for cloud effect
  const floatVariants = {
    float: (custom: number) => ({
      x: [
        0,
        10 * Math.sin(custom * 2),  // side to side offset varies per card
        0,
        -10 * Math.sin(custom * 3),
        0,
      ],
      y: [
        0,
        -15 + 5 * Math.cos(custom * 2), // up/down offset varies per card
        0,
        -10 + 5 * Math.cos(custom * 3),
        0,
      ],
      transition: {
        delay: custom * 0.5, // stagger start times
        duration: 8 + custom, // slightly different durations
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <Box maxW="900px" mx="auto" py={{ base: 12, md: 20 }} px={{ base: 6, md: 12 }} bg={bg} rounded="md" shadow="md">
      <VStack spacing={4} mb={12} textAlign="center">
        <Heading fontFamily="heading" color={headingColor} fontSize={{ base: '3xl', md: '4xl' }}>
          My Services
        </Heading>
        <Text fontFamily="body" color={textColor} maxW="600px" fontSize="md">
          I offer a range of expert services tailored to help you build scalable, secure, and efficient software solutions.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {services.map(({ id, title, description, icon, link }, index) => (
          <MotionBox
            key={id}
            as={Link}
            to={link}
            rounded="md"
            bg={boxBg}
            p={6}
            shadow={boxShadow}
            transition="box-shadow 0.3s ease"
            cursor="pointer"
            display="flex"
            alignItems="flex-start"
            gap={4}
            _hover={{ boxShadow: 'xl' }}
            variants={floatVariants}
            animate="float"
            custom={index}
          >
            <Box
              bg={iconBg}
              p={3}
              rounded="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="50px"
              flexShrink={0}
            >
              <Icon as={icon as React.ElementType} w={6} h={6} color={iconColor} />
            </Box>
            <Box>
              <Heading fontFamily="heading" fontSize="xl" mb={2} color={headingColor}>
                {title}
              </Heading>
              <Text fontFamily="body" color={textColor} fontSize="md" lineHeight="tall">
                {description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
                  <AnimatedButton
          label="Which Service Do You Need?"
          to="/contact"
        />
    </Box>
  );
}