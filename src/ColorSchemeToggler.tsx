import {
    ActionIcon,
    useMantineColorScheme,
    useMantineTheme,
} from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ColorSchemeToggler() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <ActionIcon
            variant="subtle"
            color={colorScheme === "dark" ? "yellow" : "gray"}
            onClick={() =>
                toggleColorScheme(colorScheme === "dark" ? "light" : "dark")
            }
        >
            {colorScheme === "dark" ? <FaSun /> : <FaMoon />}
        </ActionIcon>
    );
}
