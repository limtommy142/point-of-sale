import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
    AiOutlineHome,
    AiOutlineShoppingCart
} from "react-icons/ai"
import { FaProductHunt } from "react-icons/fa"

export interface NavItemProps extends FlexProps {
    label: string
    href?: string
    icon?: IconType
    haveChildren?: boolean
    childrenItem?: Array<NavItemProps> | any
}

const LinkItems: Array<NavItemProps> = [
    {
        label: 'Dashboard',
        href: '/',
        icon: AiOutlineHome,
        haveChildren: false
    },
    {
        label: 'Produk',
        href: '/daftar-produk',
        icon: FaProductHunt,
        haveChildren: false
    },
    {
        label: 'Penjualan',
        href: '/daftar-penjualan',
        icon: AiOutlineShoppingCart,
        haveChildren: false
    }
]

export default LinkItems