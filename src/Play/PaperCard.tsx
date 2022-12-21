import { Paper, Text } from "@mantine/core";

export default function PaperCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <Paper
            withBorder
            radius="md"
            p="xs"
            style={{ height: "fit-content" }}
            w={250}
        >
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {title}
            </Text>
            <Text size={"sm"}>{description}</Text>
        </Paper>
    );
}
