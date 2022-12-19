import { Navbar as MantineNavbar, NavbarProps, NavLink } from "@mantine/core";
import { Link } from "react-router-dom";

type Props = Omit<NavbarProps, "children"> & {
    toggleBurger?: () => void;
};

const Navbar = (props: Props) => {
    const { toggleBurger, ...restProps } = props;

    // Go to next week if now is after 17:00 on Friday

    return (
        <MantineNavbar {...restProps}>
            <MantineNavbar.Section>
                <NavLink
                    component={Link}
                    to="/guess"
                    label="Guess"
                    onClick={toggleBurger}
                />
            </MantineNavbar.Section>
            <MantineNavbar.Section>
                <NavLink
                    component={Link}
                    to="/statistics"
                    label="Statistics"
                    onClick={toggleBurger}
                />
            </MantineNavbar.Section>
            <MantineNavbar.Section>
                <NavLink
                    component={Link}
                    to="/manage"
                    label="Manage"
                    onClick={toggleBurger}
                />
            </MantineNavbar.Section>
        </MantineNavbar>
    );
};

export default Navbar;
