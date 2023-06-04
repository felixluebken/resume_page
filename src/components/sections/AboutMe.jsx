
import { Avatar, Box, Center, Divider, Flex, Icon, Tag, Text, Tooltip } from '@chakra-ui/react'
import FadeIn from 'react-fade-in/lib/FadeIn'


import { TbBrandGithub, TbBrandLinkedin, TbBrandMedium } from 'react-icons/tb'
import RenderIfVisible from 'react-render-if-visible'
import useMobile from '../../utils/useMobile'
import TooltipIcon from '../Icon'


const AboutMeText = () => {


    const isTablet = useMobile(840)
    const isMobile = useMobile(530)
    const isTinyMobile = useMobile(409)


    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    return <Box w={isTablet ? isMobile ? '100%' : '500px' : '400px'}>
        {isTablet ? 
            <Flex alignItems='center'>
                <Avatar width='78px' height='78px' src='https://iili.io/HUeDXPS.jpg' mr='15px' />
                <Box>
                    <Flex flexWrap='wrap'>
                        <Text 
                            lineHeight='40pt' 
                            color='text.800' 
                            fontSize='48px'
                            fontWeight='600'
                        >
                            Felix
                        </Text>
                        <Text 
                            lineHeight='40pt' 
                            color='text.300' 
                            fontSize='48px'
                            ml={isTinyMobile ? '0px' : '12px'}
                            fontWeight='300'
                        >
                            Luebken
                        </Text>
                    </Flex>
                    <Text color='text.400' fontSize={isMobile ? '14pt' : '18pt'}>
                        DevOps Engineer
                    </Text>
                </Box>
            </Flex> :
            <>
                <Flex>
                    <Text 
                        lineHeight='40pt' 
                        color='text.800' 
                        fontSize='48pt' 
                        fontWeight='600'
                    >
                        Felix
                    </Text>
                    <Text 
                        lineHeight='40pt' 
                        color='text.300' 
                        fontSize='48pt' 
                        ml='12px' 
                        fontWeight='300'
                    >
                        Luebken
                    </Text>
                </Flex>
                <Text color='text.400' fontSize='18pt'>
                    DevOps Engineer
                </Text>
            </>
        
        }
        
        <Text color='text.300' mt='20px'>
            Web developer with 4 years experience in designing, developing, 
            and deploying full-stack applications. With extensive experience, 
            I excel in adapting to diverse environments and delivering exceptional 
            solutions that meet client needs.
        </Text>
        <Divider m='20px 0' />
        <Flex mt='10px'>
            <TooltipIcon 
                w={6} h={6}
                label="Check out my LinkedIn"
                icon={TbBrandLinkedin}
                cursor='pointer'
                onClick={() => openInNewTab('https://www.linkedin.com/in/felix-lübken-6b3968151/')}
            />
            <TooltipIcon 
                w={6} h={6}
                label="Take a look at my publications :)"
                icon={TbBrandMedium}
                cursor='pointer'
                onClick={() => openInNewTab('https://medium.com/@felixluebken2000')}
            />
            <TooltipIcon 
                w={6} h={6}
                label="See my github!"
                icon={TbBrandGithub}
                cursor='pointer'
                onClick={() => openInNewTab('https://github.com/felixluebken/')}
            />
        </Flex>
    </Box>
}

const AboutMe = () => {

    const isMobile = useMobile(840)

    if(isMobile) {
        return <Center mt='100px'>
            <RenderIfVisible>
                <FadeIn delay={100}>
                    <AboutMeText />
                </FadeIn>
            </RenderIfVisible>
        </Center>
    }

    return <Flex w='100%' alignItems='center' justifyContent='space-evenly' mt='100px'>
        <RenderIfVisible>
            <FadeIn delay={100}>
                <Avatar width='360px' height='360px' src='https://iili.io/HUeDXPS.jpg' />
            </FadeIn>
        </RenderIfVisible>
        <RenderIfVisible>
            <FadeIn delay={100}>
                <AboutMeText />
            </FadeIn>
        </RenderIfVisible>
    </Flex>
  
}

export default AboutMe