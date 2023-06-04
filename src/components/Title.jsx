import { Center, Text } from "@chakra-ui/react"
import FadeIn from "react-fade-in/lib/FadeIn"
import RenderIfVisible from "react-render-if-visible"




const Title = (props) => {
    return <RenderIfVisible>
        <FadeIn>
            <Center mt='120px'>
                <Text fontSize='28pt' color='text.500'>{props.children}</Text>
            </Center>
        </FadeIn>
    </RenderIfVisible>
}


export default Title