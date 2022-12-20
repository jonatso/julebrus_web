import { Navbar, ScrollArea, createStyles, NavbarProps } from "@mantine/core";
import {
    IconPresentationAnalytics,
    IconAdjustments,
    IconDeviceGamepad,
} from "@tabler/icons";
import NavbarLink from "./NavbarLink";
import NavbarLinksGroup from "./NavbarLinksGroup";

const mockdata = [
    { label: "Play", icon: IconDeviceGamepad, link: "/guess" },
    {
        label: "Statistics",
        icon: IconPresentationAnalytics,
        link: "/statistics",
    },
    {
        label: "Manage",
        icon: IconAdjustments,
        links: [
            { label: "Events", link: "/manage/events" },
            { label: "Players", link: "/manage/players" },
            { label: "Julebrus", link: "/manage/julebrus" },
        ],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
        paddingTop: 0,
    },
    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },
}));

type Props = Omit<NavbarProps, "children"> & {
    toggleBurger: () => void;
};

export default function SuperNavbar(props: Props) {
    const { toggleBurger, ...restProps } = props;
    const { classes } = useStyles();
    const links = mockdata.map((item) =>
        item.link ? (
            <NavbarLink
                {...item}
                key={item.label}
                toggleBurger={toggleBurger}
            />
        ) : (
            <NavbarLinksGroup
                {...item}
                key={item.label}
                toggleBurger={toggleBurger}
            />
        )
    );

    return (
        <Navbar
            // height={800}
            // width={{ sm: 300 }}
            // p="md"
            className={classes.navbar}
            {...restProps}
        >
            {/* <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Logo width={120} />
                    <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                </Group>
            </Navbar.Section> */}
            <Navbar.Section
                grow
                className={classes.links}
                component={ScrollArea}
            >
                {links}
            </Navbar.Section>

            {/* <Navbar.Section className={classes.footer}>
                <UserButton
                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    name="Ann Nullpointer"
                    email="anullpointer@yahoo.com"
                />
            </Navbar.Section> */}
        </Navbar>
    );
}
