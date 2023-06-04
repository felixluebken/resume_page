import FadeIn from "react-fade-in/lib/FadeIn"
import RenderIfVisible from "react-render-if-visible"
import Panel from "../Panel"
import { Box, Button, Center, Flex, Icon, Text } from "@chakra-ui/react"
import useMobile from "../../utils/useMobile"






const PublicationPanel = (props) => {

    const isTablet = useMobile(852)
    



    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };


    return <RenderIfVisible>
        <FadeIn delay={props.delay}>
            <Panel position='relative' light h={isTablet ? '280px' : '320px'}>
                <Flex alignItems='top' justifyContent='space-between'>
                    <Center w='32px' h='32px' bg='black' borderRadius='10px' mb='5px'>
                        <Icon as={props.icon} w={5} h={8} color='text.900' />
                    </Center>
                    <Text color='text.200' fontSize='sm'>{props.date}</Text>
                </Flex>
                <Text color='text.800' fontSize='lg' fontWeight='600' mb='10px'>
                    {props.title}
                </Text>
                <Text color='text.500' mb='20px' fontSize='sm'>
                {props.snippet}
                </Text>
                <Flex alignItems='center' justifyContent='space-between' position='absolute' bottom='20px' right='20px'>
                    <Button size='sm' onClick={() => openInNewTab(props.url)}>
                        Read full article
                    </Button>
                </Flex>
            </Panel>
        </FadeIn>
    </RenderIfVisible>
}


export default PublicationPanel