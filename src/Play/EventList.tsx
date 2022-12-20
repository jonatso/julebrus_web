import { Table, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import {
    mockEventList,
    mockJulebrusInEvent,
    mockPlayersInEvent,
} from "../Misc/mockData";

export default function EventList() {
    return (
        <>
            <Title order={3}>Guess in a Julebrus-event</Title>
            <Table maw={600}>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Num. players</th>
                        <th>Num. julebrus</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEventList.map((event) => (
                        <tr>
                            <td>
                                {event.finished ? (
                                    event.name
                                ) : (
                                    <Link to={`/guess/${event.id}`}>
                                        {event.name}
                                    </Link>
                                )}
                            </td>
                            <td>
                                {mockPlayersInEvent.find(
                                    (e) => e.id === event.id
                                )?.players.length || 0}
                            </td>
                            <td>
                                {mockJulebrusInEvent.find(
                                    (e) => e.id === event.id
                                )?.julebrus.length || 0}
                            </td>
                            <td>{event.id}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
