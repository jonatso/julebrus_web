import { List, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import { mockEventList } from "./mockData";

export default function EventList() {
    return (
        <>
            <Title order={3}>List of Julebrus-events</Title>
            <List>
                {mockEventList.map((event) => (
                    <List.Item key={event.id}>
                        <Link to={`/guess/${event.id}`}>{event.name}</Link>
                    </List.Item>
                ))}
            </List>
        </>
    );
}
