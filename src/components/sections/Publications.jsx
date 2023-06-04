import { SimpleGrid } from "@chakra-ui/react"
import PublicationPanel from "../panels/PublicationPanel"
import useMobile from "../../utils/useMobile"
import { SiMedium } from "react-icons/si"
import Title from "../Title"





const Publications = () => {
    const isTablet = useMobile(852)
    const isMobile = useMobile(580)

    return <>
        <Title>Publications</Title>
        <SimpleGrid
            mt='20px'
            w={isTablet && !isMobile ? '70%' : '100%' }
            minChildWidth={isTablet && !isMobile ? '400px' : '260px'}
            spacing='20px'
        >
            <PublicationPanel 
                icon={SiMedium}
                delay={200}
                date='Sep 26, 2022'
                title='Securing Backend Deployments'
                snippet=' Many developers tend to forget important steps, which could lead to 
                    vulnerabilities in production stage. In this article I will compile a checklist, 
                    which I have gathered over several years of backend development  ...'
                url='https://medium.com/dev-genius/securing-backend-deployments-9e57b93b93a0'
            />
            <PublicationPanel 
                icon={SiMedium}
                delay={300}
                title='Lessons Learned: Deploying an App for over 100k Users'
                date='May 22, 2023'
                snippet='In this article, I aim to share my firsthand experience 
                    from developing one of the largest apps in the Netherlands. 
                    I will outline the valuable lessons I’ve learned over the past months ...'
                url='https://medium.com/@felixluebken2000/lessons-learned-deploying-an-app-for-over-100k-users-338981770e91'

            />
            <PublicationPanel 
                icon={SiMedium}
                delay={400}
                title='Creating Beautiful Frontend Apps: A Guide to Consistent Aesthetics'
                snippet="But what if designing frontend apps were easier than many would think and didn't even require a UX designer to perfect a color palette and layout?"
                url="https://medium.com/@felixluebken2000/creating-beautiful-frontend-apps-a-guide-to-consistent-aesthetics-d7fdef10eb9a"
            />

        </SimpleGrid>
    </>
}

export default Publications