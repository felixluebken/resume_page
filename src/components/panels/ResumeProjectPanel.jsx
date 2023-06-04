import { Box, Flex, List, ListIcon, ListItem, Tag, Text } from "@chakra-ui/react"
import FadeIn from "react-fade-in/lib/FadeIn"
import { HiCode } from "react-icons/hi"
import RenderIfVisible from "react-render-if-visible"
import useMobile from "../../utils/useMobile"





const ResumeProjectPanel = (props) => {
    const isTablet = useMobile(852)

    const size = isTablet ? '64px' : '128px'

    return <RenderIfVisible>
        <FadeIn>
            <Flex m='20px 0'>
                <Box minW={size} maxW={size} maxH={size}>
                    {props.image}
                </Box>
                <Box ml='20px' w='100%'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Flex>
                            <Text color='text.900' fontSize='xl' fontWeight='600' mb='10px'>{props.title}</Text>
                            {isTablet ? <></> : <Text color='text.200' fontSize='sm' ml='10px' mt='2px'>{props.date}</Text>}
                        </Flex>
                        <Tag fontSize='xs' h='24px' colorScheme={props.live ? 'green' : 'red'}>
                            {props.live ? 'LIVE' : 'INACTIVE'}
                        </Tag>
                    </Flex>
                    {isTablet ?
                        <></> :
                        <Text color='text.500' fontSize='md' mb='20px'>{props.description}</Text>
                    }
                    <List spacing={1}>
                        {props.contributions.map((contribution,i) => (
                            <ListItem key={i} color='text.300' fontSize={isTablet ? "xs" : 'md'}>
                                <ListIcon as={HiCode} color='text.500' />
                                {contribution}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Flex>
        </FadeIn>
    </RenderIfVisible>
}


export default ResumeProjectPanel