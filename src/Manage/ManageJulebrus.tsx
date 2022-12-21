import { Button, ColorSwatch, Group, Table, Title } from "@mantine/core";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteModal from "../DeleteModal";
import BackButton from "../Misc/BackButton";
import { mockJulebrusList } from "../Misc/mockData";

export default function ManageJulebrus() {
    return (
        <>
            <Title order={3}>Manage julebrus</Title>
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
                                    <Button leftIcon={<FaEdit />} color="green">
                                        Edit
                                    </Button>
                                    {/* <Button leftIcon={<FaTrash />} color="red">
                                        Delete
                                    </Button> */}
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
