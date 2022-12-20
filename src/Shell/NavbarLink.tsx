import {
    Group,
    Box,
    ThemeIcon,
    UnstyledButton,
    createStyles,
} from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    control: {
        fontWeight: 500,
        display: "block",
        width: "100%",
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        fontSize: theme.fontSizes.sm,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
    },
}));

interface LinkProps {
    icon: TablerIcon;
    label: string;
    link: string;
    toggleBurger: () => void;
}

export default function NavbarLink({
    icon: Icon,
    label,
    link,
    toggleBurger,
}: LinkProps) {
    const { classes } = useStyles();

    return (
        <>
            <UnstyledButton
                onClick={() => {
                    toggleBurger();
                }}
                className={classes.control}
                component={Link}
                to={link}
            >
                <Group position="apart" spacing={0}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ThemeIcon variant="light" size={30}>
                            <Icon size={18} />
                        </ThemeIcon>

                        <Box ml="md">{label}</Box>
                    </Box>
                </Group>
            </UnstyledButton>
        </>
    );
}
