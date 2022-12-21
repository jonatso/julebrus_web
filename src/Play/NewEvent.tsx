import { Button, Group, Title } from "@mantine/core";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BackButton from "../Misc/BackButton";
import { mockJulebrusList, mockPlayerNames } from "../Misc/mockData";
import SelectJulebrusTable from "./SelectJulebrusTable";
import SelectPlayersTable from "./SelectPlayersTable";

export default function NewEvent() {
    const [hasChosenPlayers, setHasChosenPlayers] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <Group mb={10}>
                <BackButton />
                <Title order={3}>
                    Choose {hasChosenPlayers ? "julebrus" : "players"} for new
                    Julebrus-event
                </Title>
            </Group>
            {hasChosenPlayers ? (
                <SelectJulebrusTable julebrusList={mockJulebrusList} />
            ) : (
                <SelectPlayersTable playerList={mockPlayerNames} />
            )}
            {hasChosenPlayers ? (
                <Group>
                    <Button
                        leftIcon={<FaArrowLeft />}
                        onClick={() => setHasChosenPlayers(false)}
                    >
                        Back
                    </Button>
                    <Button
                        leftIcon={<FaPlus />}
                        color={"green"}
                        onClick={() => navigate("/play")}
                    >
                        Create!
                    </Button>
                </Group>
            ) : (
                <Button
                    onClick={() => setHasChosenPlayers(true)}
                    leftIcon={<FaArrowRight />}
                    color={"green"}
                >
                    Next
                </Button>
            )}
        </>
    );
}
