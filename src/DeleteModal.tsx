import { useState } from "react";
import { Modal, Button, Group, Text, ActionIcon } from "@mantine/core";
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
                    <Button onClick={() => setOpened(false)} variant="outline">
                        Cancel
                    </Button>
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
            <ActionIcon
                onClick={() => setOpened(true)}
                color="red"
                variant="subtle"
            >
                <FaTrash />
            </ActionIcon>
        </>
    );
}
