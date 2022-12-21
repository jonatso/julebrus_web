import { Group, Table, Title } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import BackButton from "../Misc/BackButton";
import { mockEventList, mockPlayersInEvent } from "../Misc/mockData";

export default function PlayerList() {
    const { eventId } = useParams<{
        eventId: string;
    }>();

    const players =
        mockPlayersInEvent.find((e) => e.id === eventId)?.players || [];

    const eventName = mockEventList.find((e) => e.id === eventId)?.name;

    return (
        <>
            <Group>
                <BackButton />
                <Title order={3}>Players in {eventName}</Title>
            </Group>
            <Table maw={300}>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Finished?</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map((player) => (
                        <tr>
                            <td>
                                <Link to={`/play/${eventId}/${player.id}/`}>
                                    {player.name}
                                </Link>
                            </td>
                            <td>{player.finished ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
