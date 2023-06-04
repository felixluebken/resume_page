import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    colors:{
        text:{
            100:'#716f7a',
            200:'#8F8D98',
            300:'#AEACB7',
            400:'#CCCAD5',
            500:'#eae8f3',
            600:'#EFEEF6',
            700:'#F5F4F9',
            800:'#FAF9FC',
            900:'#ffffff'
        },
        panel:{
            100:'#292D3C',
            200:'#272A39',
            300:'#252735',
            400:'#232432',
            500:'#21222F',
            600:'#1E1F2B',
            700:'#1C1C28',
            800:'#1A1924',
            900:'#181621'
        },
        purple:{
            100:'#C04DFE',
            200:'#B94CFE',
            300:'#B24BFD',
            400:'#AB4AFD',
            500:'#A549FC',
            600:'#9E48FC',
            700:'#9747FB',
            800:'#9046FB',
            900:'#8945FA'
        },
        blue:{
            100:'#5790FC',
            200:'#518AF9',
            300:'#4A85F5',
            400:'#447FF2',
            500:'#3E7AEE',
            600:'#3774EB',
            700:'#316EE7',
            800:'#2A69E4',
            900:'#2463E0'
        },
        pink:{
            100:'#E06DB9',
            200:'#E067AF',
            300:'#DF61A5',
            400:'#DF5B9B',
            500:'#DF5591',
            600:'#DE4F87',
            700:'#DE497D',
            800:'#DD4373',
            900:'#DD3D69'
        }
    },
    styles: {
        global: () => ({
            body: {
                bg: "linear-gradient(137.49deg, #2b1b3f 0%, #221a2f 20.51%, #1d1b29 96.01%)",
                height: "100vh"
            }
        })
    }
})
export default theme;