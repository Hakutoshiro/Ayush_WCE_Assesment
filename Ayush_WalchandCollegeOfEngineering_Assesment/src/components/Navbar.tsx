import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button ,Link} from "@nextui-org/react";
import { useState } from "react";
// import { Link } from "react-router-dom";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const page = document.URL.split("/")[3]

    
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} >
            <NavbarContent>
                <NavbarBrand>
                    <p className="font-bold text-inherit">Crafts Shopee</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link href={"/"}>
                    <Button color="primary" variant={!page ? "light" : "flat"}  className={!page ?"bg-gradient-to-r from-primary-200 to-primary-500 text-white": ""}>
                        Home
                    </Button>
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href={"/products"}>
                    <Button  color="primary" variant={page === "products" ? "light" : "flat"} className={page === "products" ? "bg-gradient-to-r from-primary-200 to-primary-500 text-white": ""}>
                        Products
                    </Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href={"/contact"}>
                    <Button color="primary" variant={page === "contact" ? "light" : "flat"} className={page === "contact" ? "bg-gradient-to-r from-primary-200 to-primary-500 text-white": ""}>
                        Contact
                    </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-background text-foreground">
                <NavbarMenuItem  >
                    <Link
                        className="w-full"
                        href={"/"}
                        >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        href={"/products"}
                        >
                        Products
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        href={"/contact"}
                        >
                        Contact
                    </Link>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    );
}
