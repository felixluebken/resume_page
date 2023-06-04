
import { Icon, Tooltip, Tag } from "@chakra-ui/react"

const TooltipIcon = (props) => {
    return <Tooltip label={props.label} hasArrow bg='panel.900' borderRadius='8px'>
        <Tag onClick={() => props.onClick()} cursor={props.cursor ? props.cursor : 'default'} background='transparent' mr='5px'>
            <Icon as={props.icon} w={props.w} h={props.w} color='text.900' />
        </Tag>
    </Tooltip>
}

export default TooltipIcon