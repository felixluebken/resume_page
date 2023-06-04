import { Box, Center, Divider, Image, Button } from "@chakra-ui/react"
import Title from "../Title"
import Panel from "../Panel"


import ResumeProjectPanel from "../panels/ResumeProjectPanel"
import useMobile from "../../utils/useMobile";
import { useState } from "react";



const Projects = () => {
    const [showMore,setShowMore] = useState(false)

    const isTablet = useMobile(852)
    const isMobile = useMobile(580)

    return <>
        <Title>Projects</Title>
        <Box h='20px'/>
        <Panel w={isTablet && !isMobile ? '70%' : '100%' }>
            <Box maxH={showMore ? '5000px' : '500px'} overflow='hidden'>
            <ResumeProjectPanel 
                    image={<Center 
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='#EEE'
                >
                    <Image src='https://iili.io/HgVMXe4.png' w='50%' />
                </Center>}
                title="Capisoft CRM"
                date="May 2023"
                live={true}
                description="Capisoft CRM is a web app that simplifies the process of receiving customer calls and efficiently dispatching plumbers to their location. With its streamlined workflow, the app ensures prompt and effective plumbing services, enhancing customer satisfaction and optimizing service delivery."
                contributions={[
                    "Developed backend using Django & PostgreSQL",
                    "Deployed backend to a monolithic Linux server",
                    "Created frontend using Vite + React"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={
                    <Center 
                        minW='100%'
                        minH='100%'
                    >
                        <Image src='https://iili.io/HgVMW7f.png' w='95%' h='100%' />
                    </Center>
                }
                title="BONNETJE"
                date="April 2023"
                live={true}
                description="The Bonnetje app is a comprehensive full-stack application that simplifies the process of submitting fines and connects users with experienced lawyers who can effectively fight those fines on their behalf, providing a seamless solution for resolving legal matters efficiently and successfully."
                contributions={[
                    "Developed backend using Django & PostgreSQL",
                    "Deployed backend to Kubenetes cluster through Terraform & AWS EKS",
                    "Created web interface for lawyers using Vite + React"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={<Center 
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='white'
                >
                    <Image src='https://iili.io/HgVMVdG.png' w='50%' />
                </Center>}
                title="ZORGPLEIN"
                date="February 2023"
                live={true}
                description="Zorgplein is an app that connects caregivers with elderly individuals, facilitating personalized care and support. It serves as a platform for caregivers to offer their services, and for elderly individuals to find suitable caregivers based on their specific needs, ensuring a seamless and compassionate caregiving experience."
                contributions={[
                    "Developed backend using Django & MySQL",
                    "Deployed backend to a monolithic Linux server",
                    "Created the admin interface using Vite + React"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={<Center 
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='white'
                >
                    <Image src='https://iili.io/HgVMPIV.png' w='50%' />
                </Center>}
                title="KPN LEADS DB"
                date="November 2022"
                live={false}
                description="A scalable web app, which efficiently parses large CSV files, stores lead data of different formats, seamlessly links company details together, and handles millions of leads, providing a streamlined solution for managing and organizing diverse lead information."
                contributions={[
                    "Developed backend using Rails & MySQL",
                    "Minimized SQL querying times on large tables",
                    "Created the admin interface using Solid.js"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={<Center 
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='black'
                >
                    <Image src='https://iili.io/HgVVAG9.png' w='50%' />
                </Center>}
                title="JOBNINO REFERRALS"
                date="June 2022"
                live={false}
                description="An app, which connects businesses with qualified call center professionals, providing a streamlined referral system for job placements. Simplifying the process, we help companies find and hire call center agents efficiently and effectively."
                contributions={[
                    "Deployed using Redwood.js",
                    "Learned to use SMTP",
                    "Utilization of Twilio SMS"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={<Image src='https://iili.io/HgVMwI2.png' w='95%' />}
                title="WEPARTYNOW"
                date="April 2022"
                live={true}
                description="An app, which connects businesses with qualified call center professionals, providing a streamlined referral system for job placements. Simplifying the process, we help companies find and hire call center agents efficiently and effectively."
                contributions={[
                    "Deployed using Django & MySQL",
                    "Frontend web created with React",
                    "Mobile app done with React Native"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={<Center
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='#15151d'
                >
                    <Image src='https://iili.io/HgVW3wQ.pngg' w='30%' />
                </Center>}
                title="PHOTON TOOLKIT"
                date="SEPTEMBER 2021"
                live={false}
                description="A desktop app, which is a must-have tool for sneaker enthusiasts, providing assistance in securing limited edition shoe releases. With advanced features and real-time updates, it empowers sneakerheads to increase their chances of successfully purchasing coveted shoes during limited drops."
                contributions={[
                    "Frontend app built using Electron & React",
                    "Usage of Puppeteer.js and various requests libraries"
                ]}
            />
            <Divider m='20px 0px' />
            <ResumeProjectPanel 
                image={<Center
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='#19192c'
                >
                    <Image src='https://iili.io/HgVWTAv.png' w='50%' />
                </Center>}
                title="SPLASHMARKET"
                date="MAY 2021"
                live={false}
                description="This website serves as a dedicated platform for buying and reselling sneaker bots. It caters to the needs of sneaker enthusiasts looking to acquire or sell advanced automated tools specifically designed for purchasing limited-edition sneakers. Simplifying the process, it provides a seamless marketplace for connecting buyers and sellers of sneaker bots."
                contributions={[
                    "Web app built using React",
                    "Learned to build apps through Figma designs"
                ]}
            />
            <Divider m='20px 0px' />

            <ResumeProjectPanel 
                image={<Center
                    borderRadius='24%'
                    minW='100%'
                    minH='100%'
                    bg='#181d32'
                >
                    <Image src='https://iili.io/HgVXI19.png' w='50%' />
                </Center>}
                title="SPLASHX & SPLASHTOOLS"
                date="SEPTEMBER 2020"
                live={false}
                description='SplashX is a web app crafted to empower sneaker enthusiasts in their pursuit of exclusive kicks. It offers real-time release notifications, detailed bot reviews, and expert tips to enhance your chances of copping coveted sneakers.'
                contributions={[
                    "Full stack webapp using Django",
                    "Learned to build apps through Figma designs"
                ]}
            />
            </Box>
            <Center>
            <Button 
                variant='ghost' 
                colorScheme='text' 
                mt='20px'
                onClick={() => setShowMore(!showMore)}
            >{showMore ? 'Show less' : 'Show more'}</Button>
            </Center>
        </Panel>
    </>
}


export default Projects