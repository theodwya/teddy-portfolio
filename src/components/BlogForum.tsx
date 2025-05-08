import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  createdAt: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const bg = useColorModeValue('french_gray.50', 'space_cadet.800');
  const headingColor = useColorModeValue('cardinal.400', 'icterine.400');
  const textColor = useColorModeValue('night.700', 'gray.300');

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch('/api/blog/posts'); // Your backend API endpoint
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <Spinner size="xl" mx="auto" mt={20} display="block" />;
  if (error) return <Text color="red.500" textAlign="center" mt={20}>{error}</Text>;

  return (
    <Box maxW="900px" mx="auto" px={{ base: 6, md: 12 }} py={10} bg={bg} rounded="md" shadow="md">
      <Heading as="h1" size="2xl" mb={8} color={headingColor} fontFamily="serif" textAlign="center">
        My Blog & Journal
      </Heading>

      <VStack spacing={8} align="stretch">
        {posts.length === 0 && (
          <Text color={textColor} fontSize="lg" textAlign="center">
            No blog posts yet. Stay tuned!
          </Text>
        )}

        {posts.map(({ id, title, excerpt, createdAt, slug }) => (
          <Box key={id} p={6} bg={bg} rounded="md" shadow="sm">
            <Heading as="h2" size="lg" mb={2} color={headingColor} fontFamily="serif">
              <Link as={RouterLink} to={`/blog/${slug}`} _hover={{ textDecoration: 'underline' }}>
                {title}
              </Link>
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={4}>
              {new Date(createdAt).toLocaleDateString()}
            </Text>
            <Text color={textColor} noOfLines={3} mb={4}>
              {excerpt}
            </Text>
            <Link as={RouterLink} to={`/blog/${slug}`} color={headingColor} fontWeight="bold">
              Read More →
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}