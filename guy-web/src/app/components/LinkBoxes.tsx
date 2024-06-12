import React from 'react'
import { LinkBox, LinkOverlay, Box, Heading, Text } from '@chakra-ui/react'

function LinkBoxes() {
    return (
        <main className='p-4'>
            <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                <Heading size='md' my='2'>
                    <LinkOverlay href='#'>
                        Social
                    </LinkOverlay>
                </Heading>
                <Text>
                    Click here!
                </Text>
            </LinkBox>
        </main>
    )
}

export default LinkBoxes
