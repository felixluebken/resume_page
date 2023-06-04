import { Box, Center, Divider, Flex, Icon, Progress, Text } from "@chakra-ui/react"
import { SiC, SiCplusplus, SiHaskell, SiHtml5, SiJavascript, SiPostgresql, SiPython, SiRuby, SiRust, SiTypescript } from "react-icons/si"
import { FaJava } from 'react-icons/fa'

import Title from "../Title"
import Panel from "../Panel"
import useMobile from "../../utils/useMobile"
import FadeIn from "react-fade-in/lib/FadeIn"
import RenderIfVisible from "react-render-if-visible"


const getPercentageColor = (percentage) => {
    if(percentage >= 80) {
        return 'purple'
    } else if(percentage >= 60) {
        return 'blue'
    } else {
        return 'pink'
    }
}

const LANGUAGES = [
    {
       label:'Javascript',
       percentage:98,
       icon:SiJavascript
    },
    {
        label:'Python',
        percentage:93,
        icon:SiPython
    },
    {
        label:'Typescript',
        percentage:82,
        icon:SiTypescript
    },
    {
        label:'HTML',
        percentage:82,
        icon:SiHtml5
    },
    {
        label:'SQL',
        percentage:75,
        icon:SiPostgresql
    },
    {
        label:'C & C++',
        percentage:70,
        icon:SiCplusplus
    },
    {
        label:'Ruby',
        percentage:65,
        icon:SiRuby
    },
    {
        label:'Java',
        percentage:50,
        icon:FaJava
    },
    {
        label:'Haskell',
        percentage:45,
        icon:SiHaskell
    },
    {
        label:'Rust',
        percentage:30,
        icon:SiRust
    },
]


const IRL_LANGUAGES = [
    {
       label:'English',
       percentage:98,
       icon:"🇺🇸"
    },
    {
        label:'German',
        percentage:90,
        icon:"🇩🇪"
     },
     {
        label:'Mandarin',
        percentage:64,
        icon:"🇨🇳"
     },
     {
        label:'Dutch',
        percentage:38,
        icon:"🇳🇱"
     },
]

const Languages = () => {
    const isTablet = useMobile(852)
    const isMobile = useMobile(580)


    return <>
        <Title>Languages</Title>
        
        <Box w={isTablet ? isMobile ? '100%' : '70%' : '100%'} mt='20px' >
            <Panel dark>
            <RenderIfVisible>
                <FadeIn delay={300}>
                    <Flex flexWrap='wrap' justifyContent='space-evenly' p={isMobile ? '40px 0px' : ''}>
                        {LANGUAGES.map((lang) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Flex alignItems='center' m='20px'>
                                    <Icon as={lang.icon} color='text.900' w={8} h={8} />
                                    <Box ml='10px'>
                                    <Text color='text.900' mb='7px' lineHeight='12px'>{lang.label}</Text>
                                    <Progress value={lang.percentage} colorScheme={getPercentageColor(lang.percentage)}  w='280px' borderRadius='20px' size='sm' />
                                    </Box>
                                </Flex>
                            )
                        })}
                    </Flex>
                </FadeIn>
                    <Divider m='20px 0' borderColor='text.100' />
                    <Text w='100%' textAlign='center' color='text.600' fontSize='lg' fontWeight='500'>
                        IRL Languages
                    </Text>
                    <FadeIn>

                        <Flex flexWrap='wrap' justifyContent='space-evenly' p={isMobile ? '40px 0px' : ''}>
                            {IRL_LANGUAGES.map((lang) => {
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <Flex alignItems='center' m='20px'>
                                        <Text fontSize='2xl'>{lang.icon}</Text>
                                        <Box ml='10px'>
                                        <Text color='text.900' mb='7px' lineHeight='12px'>{lang.label}</Text>
                                        <Progress value={lang.percentage} colorScheme={getPercentageColor(lang.percentage)}  w='280px' borderRadius='20px' size='sm' />
                                        </Box>
                                    </Flex>
                                )
                            })}
                        </Flex>
                    </FadeIn>

            </RenderIfVisible>
                
            </Panel>
        </Box>
    </>
}


export default Languages