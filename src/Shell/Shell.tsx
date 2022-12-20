import { Outlet } from "react-router";
import { AppShell, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Shell() {
    const theme = useMantineTheme();
    const [burgerIsOpened, setBurgerIsOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!burgerIsOpened}
                    width={{ sm: 200, lg: 300 }}
                    toggleBurger={() => setBurgerIsOpened(false)}
                />
            }
            header={
                <Header
                    burgerIsOpened={burgerIsOpened}
                    burgerToggle={() => setBurgerIsOpened((o) => !o)}
                />
            }
        >
            <Outlet />
        </AppShell>
    );
}
