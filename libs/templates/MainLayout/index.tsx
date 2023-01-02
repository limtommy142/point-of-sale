import { ReactNode } from "react"
import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import SideBar from "@templates/SideBar"

const MainLayout = ({children}: {children: ReactNode}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box height={'100vh'} bg={useColorModeValue('whiteAlpha.800', 'gray.900')}>
            <SideBar
                onClose={onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size={'full'}
            >
                <DrawerContent>
                    <SideBar onClose={onClose}/>
                </DrawerContent>
            </Drawer>
            <Box
                ml={{ base: 0, md: 64 }}
                px="6"
                pt="24"
                pb="16"
                bgColor='white'
            >
                {/* <PageBreadcrumbs /> */}
                <main id='contentArea'>
                    {children}
                </main>
            </Box>
        </Box>
    )
}

export default MainLayout