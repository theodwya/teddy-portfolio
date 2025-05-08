// src/components/AboutMe.tsx
import { Box, Flex, Heading, Text, List, ListItem, ListIcon, Divider, useColorModeValue } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const aboutMeText = `
I’m a former Navy submarine mechanic with 13 years of service, who successfully transitioned into the tech industry. After leaving the military, I earned a role at a leading FAANG company and have since dedicated the past five years to immersing myself in software engineering. From working hands-on with complex machinery to mastering new programming languages and technologies, I bring a disciplined, problem-solving mindset to every project.

My mission is to leverage my disciplined problem-solving skills and passion for technology to build impactful, scalable software solutions that improve lives. I strive to continuously learn and grow as a developer while maintaining a balanced life that fuels creativity and resilience.

Outside of technology, I live with my wife and son and enjoy an active lifestyle. I’m passionate about football—Go Cowboys!—and have a love for speed, owning three motorcycles that I ride whenever the weather permits. Gaming is another hobby of mine, especially first-person shooters and sports games, though I occasionally dive into role-playing games, where my mage once dominated raids in World of Warcraft.
`;

const top3 = {
  Movies: ['Inception', 'Office Space', 'Interstellar'],
  'TV Shows': ['Severance', 'Family Guy', 'Stranger Things'],
  'Places I’ve Visited': ['Saesebo, Japan', 'Honolulu, Hawaii', 'Grand Canyon, Nevada'],
  'Places I Want to Go': ['Africa', 'Sydney, Australia', 'Rome, Italy'],
};

export default function AboutMe() {
  // Use theme tokens for colors
  const headingColor = useColorModeValue('brand.cardinal', 'brand.chartreuse');
  const textColor = useColorModeValue('brand.black', 'brand.chartreuse');
  const sidebarBg = useColorModeValue('brand.backgroundLight', 'brand.backgroundDark');
  const sidebarBorder = useColorModeValue('brand.neutralGrayLight', 'brand.neutralGrayDark');
  const starColor = useColorModeValue('brand.chartreuse', 'brand.chartreuse');

  return (
    <Flex
      maxW="900px"
      mx="auto"
      my={12}
      p={6}
      bg={sidebarBg}
      rounded="md"
      shadow="md"
      direction={{ base: 'column', md: 'row' }}
      gap={8}
    >
      {/* Main About Me content */}
      <Box flex="2">
        <Heading as="h2" size="xl" mb={6} color={headingColor} fontFamily="heading">
          About Me
        </Heading>
        <Text whiteSpace="pre-line" color={textColor} fontSize="md" lineHeight="tall" fontFamily="body">
          {aboutMeText}
        </Text>
      </Box>

      {/* Sidebar */}
      <Box
        flex="1"
        bg={sidebarBg}
        p={4}
        rounded="md"
        shadow="sm"
        borderWidth="1px"
        borderColor={sidebarBorder}
      >
        <Heading as="h3" size="md" mb={4} color={headingColor} textAlign="center" fontFamily="heading">
          Get to Know Me: Top 3's
        </Heading>
        {Object.entries(top3).map(([category, items]) => (
          <Box key={category} mb={4}>
            <Heading as="h4" size="sm" mb={2} color={textColor} fontFamily="heading">
              {category}
            </Heading>
            <List spacing={1}>
              {items.map((item, idx) => (
                <ListItem key={idx} display="flex" alignItems="center" color={textColor} fontFamily="body">
                  <ListIcon as={StarIcon} color={starColor} />
                  {item}
                </ListItem>
              ))}
            </List>
            <Divider mt={4} borderColor={sidebarBorder} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
}