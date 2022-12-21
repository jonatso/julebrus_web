import { useState } from "react";
import { Modal, Button, Group, Text } from "@mantine/core";
import { FaTrash } from "react-icons/fa";

export default function DeleteModal({
    deleteName,
    onDelete,
}: {
    deleteName: string;
    onDelete: () => void;
}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={`Delete ${deleteName}`}
                centered
            >
                {/* Modal content */}
                <Text>
                    Are you sure you want to delete <i>{deleteName}?</i>
                </Text>
                <Group position="right" mt={"xl"}>
                    <Button onClick={() => setOpened(false)}>Cancel</Button>
                    <Button
                        color="red"
                        onClick={() => {
                            onDelete();
                            setOpened(false);
                        }}
                    >
                        Delete
                    </Button>
                </Group>
            </Modal>

            {/* <Button onClick={() => setOpened(true)}>Open Modal</Button> */}
            <Button
                onClick={() => setOpened(true)}
                leftIcon={<FaTrash />}
                color="red"
            >
                Delete
            </Button>
        </>
    );
}
