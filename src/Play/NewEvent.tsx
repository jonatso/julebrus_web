import { Group, Title, Text } from "@mantine/core";
import BackButton from "../Misc/BackButton";
import { mockPlayerNames } from "../Misc/mockData";
import SelectPlayersTable from "./SelectPlayersTable";

export default function NewEvent() {
    return (
        <>
            <Group>
                <BackButton />
                <Title order={3}>Create new Julebrus-event</Title>
            </Group>
            <SelectPlayersTable data={mockPlayerNames} />
        </>
    );
}
