import { useState } from "react";
import { Modal, Button, Group, Text } from "@mantine/core";

export default function ActionModal({
    title,
    onAction,
    actionName,
    description,
    leftIcon,
}: {
    title: string;
    onAction: () => void;
    actionName: string;
    description: string;
    leftIcon?: React.ReactNode;
}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
                centered
            >
                <Text>{description}</Text>
                <Group position="right" mt={"xl"}>
                    <Button onClick={() => setOpened(false)} variant="outline">
                        Cancel
                    </Button>
                    <Button
                        color="red"
                        onClick={() => {
                            onAction();
                            setOpened(false);
                        }}
                    >
                        {actionName}
                    </Button>
                </Group>
            </Modal>

            {/* <Button onClick={() => setOpened(true)}>Open Modal</Button> */}
            <Button
                onClick={() => setOpened(true)}
                leftIcon={leftIcon}
                color="red"
            >
                {actionName}
            </Button>
        </>
    );
}
