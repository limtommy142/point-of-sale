import { Link, Flex, Box, Icon } from "@chakra-ui/react"
import { NavItemProps } from "./links"
import { useState } from "react"

const NavItem = ({label, href, icon, haveChildren, children, ...rest}: NavItemProps) => {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const showSubNav = () => setNavOpen(!navOpen);
    return (
        <Link
            href={href}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align={'center'}
                p={'2'} pl={'3'} mx={'4'} my={'2'}
                borderRadius={'lg'}
                role={'group'}
                cursor={'pointer'}
                _hover={{ bg: 'green.500', color: 'white' }}
                onClick={showSubNav}
                flexWrap={'wrap'}
                {...rest}
            >
                <Box>
                    {
                        icon && (
                            <Icon mr={'2'} mb={'-1'} fontSize={'20'} _groupHover={{ color: 'white' }} as={icon} />
                        )
                    }
                    {label}
                </Box>
            </Flex>
        </Link>
    )
}

export default NavItem