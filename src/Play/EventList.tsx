import { Button, Group, Table, Title } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
    mockEventList,
    mockJulebrusInEvent,
    mockPlayersInEvent,
} from "../Misc/mockData";

export default function EventList() {
    return (
        <>
            <Group mb={10}>
                <Title order={3}>Play in a Julebrus-event</Title>
                <Button
                    component={Link}
                    leftIcon={<FaPlus />}
                    color={"green"}
                    to="/play/new"
                >
                    New
                </Button>
            </Group>
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
                        <tr key={event.id}>
                            <td>
                                {event.finished ? (
                                    event.name
                                ) : (
                                    <Link to={`/play/${event.id}`}>
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
