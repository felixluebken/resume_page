import { SimpleGrid } from "@chakra-ui/react"
import Title from "../Title"
import ExpertisePanel from "../panels/ExpertisePanel"
import TooltipIcon from "../Icon"
import { SiAmazonaws, SiDjango, SiDocker, SiFigma, SiKubernetes, SiLinux, SiNextdotjs, SiPrisma, SiReact, SiRedwoodjs, SiRubyonrails, SiTerraform } from "react-icons/si"
import { TbBrandSolidjs, TbCloudComputing, TbDeviceImac, TbServer } from "react-icons/tb"
import useMobile from "../../utils/useMobile"





const Expertise = (props) => {

    const isTablet = useMobile(852)
    const isMobile = useMobile(580)

    return <>
        <Title>Expertise</Title>
        <SimpleGrid 
            mt='20px'
            w={isTablet && !isMobile ? '70%' : '100%' }
            minChildWidth={isTablet && !isMobile ? '400px' : '260px'}
            spacing='20px'
        >
        <ExpertisePanel 
            icon={TbDeviceImac}
            delay={200}
            iconGradient='linear(to-r, purple.100, purple.900)'
            title='Frontend'
            description='Experienced frontend developer skilled in React.js and Solid.js, 
            with a strong focus on creating dynamic user interfaces. 
            Proficient in HTML, CSS, and JavaScript. 
            Also, occasionally involved in UX design projects.'
            footer={<>
                <TooltipIcon 
                    w={5} h={5}
                    label="React.js & React Native"
                    icon={SiReact}
                />
                <TooltipIcon 
                    w={5} h={5}
                    label="Solid.js"
                    icon={TbBrandSolidjs}
                />
                <TooltipIcon 
                    w={5} h={5}
                    label="Figma"
                    icon={SiFigma}
                />
            </>}
        />
        <ExpertisePanel 
            icon={TbServer}
            delay={300}

            iconGradient='linear(to-r, blue.100, blue.900)'
            title='Backend'
            description='Skilled backend developer proficient in utilizing a variety of ORMs 
            and backend frameworks to build robust and scalable applications. 
            Excels in designing efficient database structures and integrating them 
            seamlessly with backend architectures.'
            footer={<>
                <TooltipIcon 
                    w={5} h={5}
                    label="Django"
                    icon={SiDjango}
                />
                <TooltipIcon 
                    w={5} h={5}
                    label="Express + Prisma"
                    icon={SiPrisma}
                />
               
                <TooltipIcon 
                    w={5} h={5}
                    label="Redwood.js"
                    icon={SiRedwoodjs}
                />
                 <TooltipIcon 
                    w={8} h={5}
                    label="Ruby on rails"
                    icon={SiRubyonrails}
                />
            </>}
        />
        <ExpertisePanel 
            icon={TbCloudComputing}
            delay={400}

            iconGradient='linear(to-r, pink.100, pink.900)'
            title='Deployments'
            description='Skilled in various deployment strategies, I effectively utilize AWS, 
            Kubernetes, monolithic servers, and serverless architectures to ensure seamless 
            and reliable application deployment.'
            footer={<>
                <TooltipIcon 
                    w={6} h={5}
                    label="Various AWS services"
                    icon={SiAmazonaws}
                />
                <TooltipIcon 
                    w={5} h={5}
                    label="Monolithic deployments"
                    icon={SiLinux}
                />
                <TooltipIcon 
                    w={5} h={5}
                    label="Kubernetes"
                    icon={SiKubernetes}
                />
                <TooltipIcon 
                    w={5} h={5}
                    label="Terraform"
                    icon={SiTerraform}
                />
            </>}
        />
        </SimpleGrid>
    </>

}


export default Expertise;