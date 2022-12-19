import { List, Title } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import BackButton from "./BackButton";
import { mockEventList, mockPlayersInEvent } from "./mockData";

export default function PlayerList() {
    const { eventId } = useParams<{
        eventId: string;
    }>();

    const players =
        mockPlayersInEvent.find((e) => e.id === eventId)?.players || [];

    const eventName = mockEventList.find((e) => e.id === eventId)?.name;

    return (
        <>
            <BackButton />
            <Title order={3}>Players in {eventName}</Title>
            <List>
                {players.map((player) => (
                    <List.Item key={player.id}>
                        <Link to={`/guess/${eventId}/${player.id}/`}>
                            {player.name}
                        </Link>
                    </List.Item>
                ))}
            </List>
        </>
    );
}
