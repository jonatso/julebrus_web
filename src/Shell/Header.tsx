import {
    Burger,
    Group,
    Header as MantineHeader,
    MediaQuery,
    Text,
    useMantineTheme,
} from "@mantine/core";
import ColorSchemeToggler from "../Misc/ColorSchemeToggler";

interface Props {
    burgerIsOpened: boolean;
    burgerToggle: () => void;
}

const Header = ({ burgerIsOpened, burgerToggle }: Props) => {
    const theme = useMantineTheme();

    return (
        <MantineHeader height={60} px="md">
            <Group sx={{ height: "100%" }} position="apart">
                <Group sx={{ height: "100%" }}>
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                        <Burger
                            opened={burgerIsOpened}
                            onClick={burgerToggle}
                            size="sm"
                            color={theme.colors.gray[6]}
                        />
                    </MediaQuery>
                    <Group align={"center"}>
                        <Text size="xl">JulebrusGuesser</Text>
                    </Group>
                </Group>

                <Group sx={{ height: "100%" }}>
                    <ColorSchemeToggler />
                </Group>
            </Group>
        </MantineHeader>
    );
};

export default Header;
