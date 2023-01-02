import { Box, BoxProps, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react"
import LinkItems, { NavItemProps } from "./links"
import NavItem from "./navItem"
import { nanoid } from "nanoid"

interface SideBarProps extends BoxProps {
	onClose: () => void
}

const SideBar = ({ onClose, ...rest }: SideBarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('blue.50', 'gray.900' )}
            borderRight={'1px'}
            borderRightColor={useColorModeValue('blue.200', 'gray.700')}
            w={{ base: 'full', md: 64 }}
            pos={'fixed'}
            h={'full'}
            overflowY={'auto'}
            {...rest}
            >
                <Flex h={'20'} alignItems={'center'} mx={8} justifyContent={'space-between'}>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose}/>
                </Flex>
                {
                    LinkItems.map((link: NavItemProps) => (
                        <NavItem
                            key={nanoid()}
                            label={link.label}
                            icon={link.icon}
                            href={link.href}
                            haveChildren={link.haveChildren}
                            childrenItem={link.childrenItem!}
                        />
                    ))
                }
        </Box>
    )
}

export default SideBar