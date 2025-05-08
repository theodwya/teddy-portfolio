// src/components/ResumePage.tsx
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const resumeSummary = `
Dynamic Senior Software Engineer with 10+ years of experience designing,
developing, and operating scalable, highly-available distributed systems and
cloud-native full stack applications. Proven track record optimizing
infrastructure and automating CI/CD pipelines to improve reliability by 25% and
reduce operational costs by 20%. Skilled in JavaScript, Node.js, Python,
Kubernetes, and AWS cloud services, with deep expertise in API development,
automation, and performance validation. Experienced working in secure,
classified environments with TS/SCI clearance, now eager to apply technical
leadership and problem-solving skills to unclassified realworld projects.
`;

const technicalSkills = [
  'JavaScript, Node.js, Python, Oracle Java, Bash, Shell Script, React, HTML, CSS',
  'AWS (EC2, S3, Lambda, IAM, VPC, CloudWatch), Kubernetes, OpenShift, Docker, Podman, Terraform, CloudFormation, GCP, Microsoft Azure, OpenStack',
  'Jenkins, GitHub Actions, Helm, Rancher',
  'PostgreSQL, MySQL, MongoDB, DynamoDB, RDS, SQL, NoSQL',
  'Prometheus, Grafana, ElasticSearch, Zabbix, Nagios, Dynatrace, Catchpoint, Quantum Metric',
  'Jest, Selenium, Automated Test Frameworks',
  'Apache Kafka, NiFi, ETL, Geospatial Analysis, Agile Methodologies, Security Compliance (FedRAMP, GDPR, ATO, ICD 503)',
];

const professionalExperience = [
  {
    title: 'Full Stack Software Developer',
    company: 'Oxford Global Resources Inc',
    location: 'Herndon, VA',
    dates: 'February 2024 – Present',
    details: [
      'Designed and implemented automated CI/CD pipelines using JavaScript, Node.js, Docker/Podman, and Kubernetes/OpenShift, increasing deployment frequency by 50%.',
      'Migrated monolithic architectures to microservices with RESTful APIs, boosting system scalability and reliability by 25%.',
      'Centralized NFS storage and upgraded network switching, improving operational efficiency by 25% and reducing costs by 20%.',
      'Developed centralized monitoring solutions covering 98% of active VMs, maintaining 99.99% uptime.',
      'Coordinated cybersecurity and development teams to comply with ATO and ICD 503 guidelines.',
      'Created Python and Bash scripts to streamline workflows, reducing manual intervention by 35%.',
    ],
  },
  {
    title: 'Dedicated Cloud Engineer',
    company: 'Amazon Web Services (AWS)',
    location: 'Herndon, VA',
    dates: 'November 2021 – February 2024',
    details: [
      'Initiated serverless architecture strategy, cutting deployment times by 45%.',
      'Mentored junior engineers, increasing team productivity by 5%.',
      'Crafted scalable cloud solutions, reducing deployment time by 40% and post-deployment issues by 10%.',
      'Applied Agile and DevOps methodologies to improve cloud systems and processes.',
      'Automated complex tasks with scripting, reducing manual efforts by 17%.',
      'Maintained active TS/SCI with Polygraph clearance.',
    ],
  },
  {
    title: 'Technical Account Manager',
    company: 'Amazon Web Services (AWS)',
    location: 'Herndon, VA',
    dates: 'March 2020 – November 2021',
    details: [
      'Engineered adoption plans improving implementation cohesion by 20%.',
      'Led AWS product adoption, increasing service utilization by 55%.',
      'Reduced billing-related support inquiries by 60% through client education.',
      'Accelerated feature delivery by 30% via internal advocacy.',
    ],
  },
  {
    title: 'Machinist Mate Auxiliary / Quality Control Assurance Supervisor',
    company: 'United States Navy',
    location: 'Joint Base Pearl Harbor-Hickam, HI',
    dates: 'May 2007 – December 2019',
    details: [
      'Performed critical NDT procedures, maintaining fleet readiness.',
      'Led corrective actions reducing equipment failure rates by 85%.',
      'Developed QA training programs, increasing team qualifications by 90%.',
      'Facilitated interdepartmental integration of quality processes.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science, Computer and Information Sciences',
    school: 'Southern New Hampshire University, Hooksett, NH',
    year: '2023',
    honors: 'Graduated with Distinction and Honors | Dean’s Fellowship | Alpha Sigma Lambda',
  },
  {
    degree: 'Associate of Arts, Web Design',
    school: 'Skyline College, Richmond, VA',
  },
];

const sidebarHighlights = {
  'Core Competencies': [
    'Full-Stack Development',
    'Cloud Infrastructure (AWS, Azure, OpenStack)',
    'Microservices Architecture',
    'CI/CD Pipeline Automation',
    'Agile & DevOps',
    'React, JavaScript, Python',
    'Infrastructure as Code (Terraform, CloudFormation)',
    'API Integration',
    'Security Compliance (ATO, ICD 503, FedRAMP)',
    'Monitoring & Observability (ELK, Dynatrace, Prometheus)',
    'Performance Optimization',
    'Executive & Stakeholder Engagement',
    'System Scalability',
    'Team Leadership & Mentorship',
    'LLM Application in HR Tech',
    'Headless CMS Integration',
    'Serverless Architecture',
    'Big Data Tools (Kafka, NiFi)',
  ],
  'Links': [
    'LinkedIn: linkedin.com/in/navyteddy',
    'GitHub: github.com/navyteddy',
  ],
};

export default function ResumePage() {
  const headingColor = useColorModeValue('cardinal.400', 'icterine.400');
  const textColor = useColorModeValue('night.700', 'gray.300');
  const accentColor = useColorModeValue('icterine.400', 'icterine.300');
  const sidebarBg = useColorModeValue('white', 'space_cadet.700');
  const sidebarBorder = useColorModeValue('gray.200', 'gray.600');

  return (
    <Flex
      maxW="900px"
      mx="auto"
      my={12}
      p={6}
      bg="french_gray.50"
      rounded="md"
      shadow="md"
      direction={{ base: 'column', md: 'row' }}
      gap={8}
    >
      {/* Main Resume Content */}
      <Box flex="2">
        <Heading as="h2" size="xl" mb={6} color={headingColor}>
          Theodore (Teddy) G. Wyatt
        </Heading>

        {/* Summary */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={3} color={textColor}>
            Summary
          </Heading>
          <Text whiteSpace="pre-line" color={textColor} fontSize="md" lineHeight="tall">
            {resumeSummary}
          </Text>
        </Box>

        {/* Technical Skills */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={3} color={textColor}>
            Technical Skills
          </Heading>
          <List spacing={2} color={textColor} fontSize="md" styleType="disc" pl={6}>
            {technicalSkills.map((skill, idx) => (
              <ListItem key={idx}>{skill}</ListItem>
            ))}
          </List>
        </Box>

        {/* Professional Experience */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={3} color={textColor}>
            Professional Experience
          </Heading>
          {professionalExperience.map(({ title, company, location, dates, details }, idx) => (
            <Box key={idx} mb={6}>
              <Heading as="h4" size="md" color={headingColor}>
                {title} | {company} | {location}
              </Heading>
              <Text fontSize="sm" color={textColor} mb={2}>
                {dates}
              </Text>
              <List spacing={1} color={textColor} fontSize="md" pl={6} styleType="disc">
                {details.map((detail, i) => (
                  <ListItem key={i}>{detail}</ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box>
          <Heading as="h3" size="lg" mb={3} color={textColor}>
            Education
          </Heading>
          {education.map(({ degree, school, year, honors }, idx) => (
            <Box key={idx} mb={4}>
              <Heading as="h4" size="md" color={headingColor}>
                {degree}
              </Heading>
              <Text fontSize="sm" color={textColor}>
                {school} {year && `| ${year}`}
              </Text>
              {honors && (
                <Text fontSize="sm" color={textColor} fontStyle="italic">
                  {honors}
                </Text>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Sidebar */}
      <Box
        flex="1"
        bg={sidebarBg}
        p={4}
        rounded="md"
        shadow="sm"
        borderWidth="1px"
        maxH="fit-content"
      >
        {Object.entries(sidebarHighlights).map(([section, items]) => (
          <Box key={section} mb={6}>
            <Heading as="h4" size="md" mb={3} color={textColor} textAlign="center">
              {section}
            </Heading>
            <List spacing={2} color={textColor} fontSize="md" pl={4} styleType="disc">
              {items.map((item, idx) => (
                <ListItem key={idx}>
                    <ListIcon as={StarIcon} color={accentColor}/>{item}</ListItem>
              ))}
            </List>
            <Divider mt={4} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
}