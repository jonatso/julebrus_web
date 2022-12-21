import { ActionIcon, ColorSwatch, Group, Table, Title } from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import DeleteModal from "../Misc/DeleteModal";
import { mockJulebrusList } from "../Misc/mockData";

export default function ManageJulebrus() {
    return (
        <>
            <Title order={3} mb={10}>
                Manage julebrus
            </Title>
            <Table maw={400}>
                <thead>
                    <tr>
                        <th>Julebrus</th>
                        <th>Color</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {mockJulebrusList.map((julebrus) => (
                        <tr>
                            <td>{julebrus.name}</td>
                            <td>
                                <ColorSwatch
                                    color={julebrus.color}
                                    size={15}
                                    style={{ borderRadius: 5 }}
                                />
                            </td>
                            <td>
                                <Group>
                                    <ActionIcon color="green" variant="subtle">
                                        <FaEdit />
                                    </ActionIcon>
                                    <DeleteModal
                                        deleteName={julebrus.name}
                                        onDelete={() => {}}
                                    />
                                </Group>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
