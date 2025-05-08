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
import {
  FaCloud,
  FaCode,
  FaCogs,
  FaShieldAlt,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

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
  const iconBgLight = useColorModeValue('brand.chartreuse', 'brand.cardinal');
  const iconColorLight = useColorModeValue('brand.black', 'brand.backgroundDark');

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
        {services.map(({ id, title, description, icon, link }) => (
          <Link
            as={RouterLink}
            to={link}
            key={id}
            _hover={{ textDecoration: 'none', boxShadow: 'lg' }}
            rounded="md"
            bg={boxBg}
            p={6}
            shadow={boxShadow}
            transition="box-shadow 0.3s ease"
            cursor="pointer"
            display="flex"
            alignItems="flex-start"
            gap={4}
          >
            <Box
              bg={iconBgLight}
              p={3}
              rounded="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="50px"
              flexShrink={0}
            >
              <Icon as={icon as React.ElementType} w={6} h={6} color={iconColorLight} />
            </Box>
            <Box>
              <Heading fontFamily="heading" fontSize="xl" mb={2} color={headingColor}>
                {title}
              </Heading>
              <Text fontFamily="body" color={textColor} fontSize="md" lineHeight="tall">
                {description}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}