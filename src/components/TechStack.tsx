import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  VStack,
  Heading,
  useColorModeValue,
  useToken,
  chakra,
  Progress,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';

const MotionBox = motion(chakra.div);

interface Project {
  name: string;
  url: string;
}

interface Skill {
  name: string;
  proficiency: number; // 0-100
  familiarity: string;
  usage: string;
  projects: Project[];
  icon: React.ElementType;
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    proficiency: 90,
    familiarity: 'Expert',
    usage: 'Daily use in frontend and backend projects.',
    projects: [
      { name: 'NexaVerse Dashboard', url: '/projects/nexaverse-dashboard' },
      { name: 'TaskMaster Mobile App', url: '/projects/taskmaster' },
    ],
    icon: FaJsSquare as React.ElementType,
  },
  {
    name: 'React',
    proficiency: 85,
    familiarity: 'Advanced',
    usage: 'Building dynamic and responsive UIs.',
    projects: [
      { name: 'NexaVerse Dashboard', url: '/projects/nexaverse-dashboard' },
      { name: 'Analytics Dashboard', url: '/projects/analytics-dashboard' },
    ],
    icon: FaReact as React.ElementType,
  },
  {
    name: 'Node.js',
    proficiency: 80,
    familiarity: 'Advanced',
    usage: 'Backend services and API development.',
    projects: [{ name: 'NexaVerse Dashboard', url: '/projects/nexaverse-dashboard' }],
    icon: FaNodeJs as React.ElementType,
  },
  {
    name: 'Python',
    proficiency: 75,
    familiarity: 'Intermediate',
    usage: 'Automation scripts and data processing.',
    projects: [{ name: 'Automation Scripts', url: '/projects/automation' }],
    icon: FaPython as React.ElementType,
  },
  {
    name: 'AWS',
    proficiency: 80,
    familiarity: 'Advanced',
    usage: 'Cloud infrastructure and deployment.',
    projects: [{ name: 'Cloud Infrastructure', url: '/projects/cloud-infra' }],
    icon: FaAws as React.ElementType,
  },
  {
    name: 'Docker',
    proficiency: 70,
    familiarity: 'Intermediate',
    usage: 'Containerizing applications for deployment.',
    projects: [{ name: 'Containerized Apps', url: '/projects/containerized-apps' }],
    icon: FaDocker as React.ElementType,
  },
  {
    name: 'Git',
    proficiency: 85,
    familiarity: 'Expert',
    usage: 'Version control and collaboration.',
    projects: [{ name: 'Version Control', url: '/projects/version-control' }],
    icon: FaGitAlt as React.ElementType,
  },
  {
    name: 'Databases',
    proficiency: 75,
    familiarity: 'Intermediate',
    usage: 'Design and management of relational and NoSQL databases.',
    projects: [{ name: 'Data Management', url: '/projects/data-management' }],
    icon: FaDatabase as React.ElementType,
  },
];

const radius = 160; // radius of the circle in px

export default function SkillWheelWithDetails() {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(null);

  const brandCardinal = useToken('colors', 'brand.cardinal');
  const brandChartreuse = useToken('colors', 'brand.chartreuse');
  const bg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const textColor = useColorModeValue('brand.textPrimaryLight', 'brand.textSecondaryDark');
  const headingColor = useColorModeValue(brandCardinal, brandChartreuse);
  const iconBgSelected = useColorModeValue(brandCardinal, brandChartreuse);
  const iconBgDefault = useColorModeValue('brand.black', brandCardinal);
  const frontTextColor = useColorModeValue('brand.black', 'brand.backgroundLight');
  const backTextColor = useColorModeValue('brand.backgroundLight', 'brand.black');

  const selectedSkill = selectedSkillIndex !== null ? skills[selectedSkillIndex] : null;

  return (
    <Flex
      maxW="900px"
      mx="auto"
      py={12}
      px={6}
      bg={bg}
      rounded="md"
      shadow="md"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      gap={10}
    >
      {/* Left: Circular Skill Wheel */}
      <Box position="relative" w={{ base: '320px', md: '400px' }} h={{ base: '320px', md: '400px' }} overflow={'visible'}>
        {/* Center photo */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          boxSize={{ base: '140px', md: '180px' }}
          rounded="full"
          overflow="hidden"
          boxShadow="2xl"
          border="5px solid"
          borderColor={headingColor}
          cursor="default"
          aria-label="Teddy Wyatt profile photo"
          zIndex={20}
        >
          <Image
            src="/assets/profile-photo.png"
            alt="Teddy Wyatt"
            objectFit="cover"
            width="100%"
            height="100%"
            draggable={false}
          />
        </Box>

        {/* Skill icons */}
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          const isSelected = index === selectedSkillIndex;
          const isAnySelected = selectedSkillIndex !== null;

          return (
            <MotionBox
              key={skill.name}
              position="absolute"
              top="50%"
              left="50%"
              transform={`translate(${x}px, ${y}px) translate(-50%, -50%)`}
              cursor="pointer"
              onMouseEnter={() => setSelectedSkillIndex(index)}
              onMouseLeave={() => setSelectedSkillIndex(null)}
              onFocus={() => setSelectedSkillIndex(index)}
              onBlur={() => setSelectedSkillIndex(null)}
              tabIndex={0}
              role="button"
              aria-pressed={isSelected}
              aria-label={`Select skill ${skill.name}`}
              rounded="full"
              p={3}
              boxShadow={isSelected ? 'xl' : 'md'}

              _hover={{ boxShadow: 'xl', bg: iconBgSelected }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              w={{ base: '90px', md: '100px' }}
              h={{ base: '90px', md: '100px' }}
              color={backTextColor}
              fontWeight="bold"
              fontFamily="heading"
              fontSize={{ base: 'sm', md: 'md' }}
              textAlign="center"
              userSelect="none"
              // Blur other skills when one is selected and this is not selected
              filter={isAnySelected && !isSelected ? 'blur(3px) brightness(0.7)' : 'none'}
              pointerEvents={isAnySelected && !isSelected ? 'none' : 'auto'}
              // Flip animation
              sx={{
                perspective: '100px',
                border: `3px solid black`,
                boxSizing: 'border-box',
                backgroundColor: '#D4E44D', // chartreuse
                zIndex: isSelected ? 30 : 1,
                transformOrigin: 'center center',
      }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Inner box to flip */}
              <Box
                position="relative"
                width="100%"
                height="100%"
                textAlign="center"
                sx={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: isSelected ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  borderRadius: '50%',
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                {/* Front side: icon + name */}
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  sx={{ backfaceVisibility: 'hidden' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  bg={iconBgDefault}
                  color={backTextColor}
                  p={2}
                >
                  <Icon as={skill.icon} w={8} h={8} mb={1} aria-hidden="true" />
                </Box>

                {/* Back side: project links */}
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  sx={{ backfaceVisibility: 'hidden' }}
                  transform="rotateY(180deg)"
                  bg={iconBgSelected}
                  color={frontTextColor}
                  p={2}
                  rounded="full"
                  overflowY="auto"
                  fontSize={{ base: 'xs', md: 'xs' }}
                  textAlign="center"
                  whiteSpace="normal"
                >
                  <VStack spacing={1} maxH="100%" overflowY="auto" justifyContent="center" px={-1}>
                    {skill.projects.map((proj) => (
                      <Link
                        key={proj.url}
                        href={proj.url}
                        isExternal
                        color={backTextColor}
                        _hover={{ textDecoration: 'underline' }}
                        fontWeight="semibold"
                        noOfLines={1}
                      >
                        {proj.name}
                      </Link>
                    ))}
                  </VStack>
                </Box>
              </Box>
            </MotionBox>
          );
        })}
      </Box>

      {/* Right: Side Panel with details */}
      <Box
        flex="1"
        maxW={{ base: '100%', md: '400px' }}
        bg={useColorModeValue('white', 'gray.700')}
        p={6}
        rounded="md"
        shadow="md"
        fontFamily="body"
        color={textColor}
        minH={{ base: 'auto', md: '320px' }}
      >
        {selectedSkill ? (
          <>
            <Heading fontFamily="heading" fontSize="2xl" mb={4} color={headingColor}>
              {selectedSkill.name}
            </Heading>

            <Text mb={2}>
              <strong>Proficiency:</strong> {selectedSkill.proficiency}%
            </Text>
            <Box mb={4}>
              <Progress
                value={selectedSkill.proficiency}
                size="sm"
                colorScheme="green"
                borderRadius="md"
              />
            </Box>

            <Text mb={2}>
              <strong>Familiarity:</strong> {selectedSkill.familiarity}
            </Text>

            <Text mb={4}>
              <strong>Usage:</strong> {selectedSkill.usage}
            </Text>

            <Text fontWeight="bold" mb={2}>
              Projects:
            </Text>
            <VStack spacing={2} align="start">
              {selectedSkill.projects.map((proj) => (
                <Link
                  key={proj.url}
                  href={proj.url}
                  color={headingColor}
                  fontWeight="semibold"
                  isExternal
                  _hover={{ textDecoration: 'underline' }}
                >
                  {proj.name}
                </Link>
              ))}
            </VStack>
          </>
        ) : (
          <Text fontStyle="italic" color={textColor}>
            Hover or focus on a skill to see details here.
          </Text>
        )}
      </Box>
    </Flex>
  );
}