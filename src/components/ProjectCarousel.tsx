import React from 'react';
import Slider from 'react-slick';
import { Box, Image, useColorModeValue, useTheme } from '@chakra-ui/react';
import { Card, CardName, CardButton } from './StyledProjectCard';

export default function ProjectCarousel() {
  const theme = useTheme();

  // Use brand tokens for colors with light/dark mode support
  const bgColor = useColorModeValue(theme.colors.brand.chartreuse, theme.colors.brand.chartreuse);
  const shadowColor = useColorModeValue(theme.colors.brand.black, theme.colors.brand.cardinal);
  const shadowOffset = '12px';
  const shadowOffsetLight = '16px';
  const cardNameColor = useColorModeValue(theme.colors.brand.black, theme.colors.brand.chartreuse);
  const buttonText = useColorModeValue(theme.colors.brand.black, theme.colors.brand.black);
  const buttonBg = useColorModeValue(theme.colors.brand.backgroundLight, theme.colors.brand.backgroundDark);
  const buttonBgHover = useColorModeValue(theme.colors.brand.backgroundLight, theme.colors.brand.backgroundDark);

  const projects = [
    {
      title: 'NexaVerse Dashboard',
      imageUrl: '/assets/img/work-1.jpg',
      projectUrl: 'https://github.com/yourusername/nexaverse-dashboard',
    },
    {
      title: 'Project Two',
      imageUrl: '/assets/img/work-2.jpg',
      projectUrl: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Three',
      imageUrl: '/assets/img/work-3.jpg',
      projectUrl: 'https://github.com/yourusername/project-three',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box maxW="1200px" mx="auto" mt={12} px={{ base: 6, md: 12 }} overflowX="visible">
      <Box
        as="h2"
        fontFamily="serif"
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="bold"
        color={useColorModeValue(theme.colors.brand.black, theme.colors.brand.chartreuse)}
        mb={8}
        textAlign="center"
      >
        Top New Projects
      </Box>

      <Slider {...settings}>
        {projects.map(({ title, imageUrl, projectUrl }, idx) => (
          <Box key={idx} px={4}>
            <Card
              bgColor={bgColor}
              shadowColor={shadowColor}
              shadowOffset={shadowOffset}
              shadowOffsetLight={shadowOffsetLight}
              onClick={() => projectUrl && window.open(projectUrl, '_blank')}
            >
              <Image
                src={imageUrl}
                alt={title}
                borderRadius="md"
                mb={4}
                objectFit="cover"
                maxH="180px"
                w="100%"
                loading="lazy"
              />
              <CardName color={cardNameColor}>{title}</CardName>
              <CardButton
                textColor={buttonText}
                bgColor={buttonBg}
                bgHover={buttonBgHover}
                onClick={(e) => {
                  e.stopPropagation();
                  if (projectUrl) window.open(projectUrl, '_blank');
                }}
              >
                View Project
              </CardButton>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}