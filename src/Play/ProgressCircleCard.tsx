import { Center, Group, Paper, RingProgress, Text } from "@mantine/core";

interface StatsRingProps {
    label: string;
    done: number;
    total: number;
    color: string;
    icon: React.ReactNode;
}

export default function ProgressCircleCard({
    label,
    done,
    total,
    color,
    icon,
}: StatsRingProps) {
    return (
        <Paper
            withBorder
            radius="md"
            p="xs"
            style={{ height: "fit-content" }}
            w={250}
        >
            <Group>
                <RingProgress
                    size={80}
                    roundCaps
                    thickness={8}
                    sections={[{ value: (done / total) * 100, color }]}
                    label={<Center>{icon}</Center>}
                />

                <div>
                    <Text
                        color="dimmed"
                        size="xs"
                        transform="uppercase"
                        weight={700}
                    >
                        {label}
                    </Text>
                    <Text weight={700} size="xl">
                        {done} / {total}
                    </Text>
                </div>
            </Group>
        </Paper>
    );
}
