import { Box } from "@chakra-ui/react"




const Panel = (props) => {
    return <Box
        transition='0.2s'
        bg={props.light ? 'panel.100' : 'panel.900'}
        h={props.h ? props.h : ''}
        w={props.w ? props.w : ''}
        padding='20px'
        borderRadius='22px'
        position={props.position ? props.position : ''}
    >
        {props.children}
    </Box>
}

export default Panel