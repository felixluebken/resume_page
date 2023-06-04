

import { Center, Flex, Icon, Text } from '@chakra-ui/react'



import Panel from '../Panel'
import RenderIfVisible from 'react-render-if-visible'
import FadeIn from 'react-fade-in/lib/FadeIn'
import useMobile from '../../utils/useMobile'

const ExpertisePanel = (props) => {

    const isTablet = useMobile(852)

    return <RenderIfVisible>
        <FadeIn delay={props.delay}>
            <Panel position='relative' light h={isTablet ? '260px' : '320px'}>
                <Flex alignItems='center' mb='20px'>
                <Center w='52px' h='52px' bgGradient={props.iconGradient} borderRadius='18px'>
                    <Icon as={props.icon} w={8} h={8} color='text.900' />
                </Center>
                <Text ml='10px' color='text.800' fontSize='2xl' fontWeight='600'>
                    {props.title}
                </Text>
                </Flex>
                <Text color='text.500' mb='20px' fontSize='sm'>
                {props.description}
                </Text>
                <Flex alignItems='center' position='absolute' bottom='20px'>
                    {props.footer}
                </Flex>
            </Panel>
        </FadeIn>
    </RenderIfVisible>
}

export default ExpertisePanel