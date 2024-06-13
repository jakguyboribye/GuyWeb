import React from 'react';
import { LinkBox, LinkOverlay, Box, Heading, Text } from '@chakra-ui/react';

interface LinkBoxesProps {
    image?: string; // Optional string for image URL
    title: string; // Required string for title
    description: string; // Required string for description
    link?: string; // Optional string for redirect link
}

function LinkBoxes({ image, title, description, link }: LinkBoxesProps) {
    return (
        <LinkBox
            maxW={{ base: '20%', md: '20%' }}
            minW="200px"
            p="5"
            m="3"
            borderWidth="1px"
            rounded="md"
            cursor={link ? 'pointer' : 'default'}
            shadow="md"
            overflow="hidden"
            position="relative"
            transition="background-color 0.3s"
            _hover={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}
        >
            {image && (
                <Box mb="2" textAlign="left">
                    <img src={image} alt={title} style={{ maxWidth: '20%', height: 'auto', borderRadius: '8px' }} />
                </Box>
            )}
            <Heading size="md" my="2" textAlign="left">
                <LinkOverlay href={link || '#'} isExternal>
                    {title}
                </LinkOverlay>
            </Heading>
            <Text textAlign="left">
                {description}
            </Text>
            <Box
                bg="rgba(0, 0, 0, 0.3)"
                opacity={0}
                transition="opacity 0.5s"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                pointerEvents="none"
                _hover={{
                    opacity: 1,
                }}
            />
        </LinkBox>
    );
}

export default LinkBoxes;
