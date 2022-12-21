import { useState } from "react";
import {
    createStyles,
    Table,
    Checkbox,
    ScrollArea,
    Group,
    Avatar,
    Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

export default function SelectPlayersTable({
    playerList,
}: {
    playerList: {
        name: string;
        id: string;
        participatedBefore: boolean;
    }[];
}) {
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState(["1"]);
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) =>
            current.length === playerList.length
                ? []
                : playerList.map((item) => item.id)
        );

    const rows = playerList.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr
                key={item.id}
                className={cx({ [classes.rowSelected]: selected })}
            >
                <td>
                    <Checkbox
                        checked={selection.includes(item.id)}
                        onChange={() => toggleRow(item.id)}
                        transitionDuration={0}
                        mb={-5}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                        <Avatar
                            size={26}
                            src={`https://avatars.dicebear.com/api/pixel-art/${item.id}.svg`}
                            radius={26}
                        />
                        <Text size="sm" weight={500}>
                            {item.name}
                        </Text>
                    </Group>
                </td>
                <td>{item.participatedBefore ? "yes" : "no"}</td>
            </tr>
        );
    });

    return (
        <ScrollArea>
            <Table verticalSpacing="sm" maw={400}>
                <thead>
                    <tr>
                        <th style={{ width: 40 }}>
                            <Checkbox
                                onChange={toggleAll}
                                checked={selection.length === playerList.length}
                                indeterminate={
                                    selection.length > 0 &&
                                    selection.length !== playerList.length
                                }
                                transitionDuration={0}
                                mb={-5}
                            />
                        </th>
                        <th>User</th>
                        <th>Participated before</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}
