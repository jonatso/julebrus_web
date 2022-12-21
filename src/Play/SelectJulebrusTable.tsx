import { useState } from "react";
import {
    createStyles,
    Table,
    Checkbox,
    ScrollArea,
    Text,
    ColorSwatch,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

export default function SelectJulebrusTable({
    julebrusList,
}: {
    julebrusList: {
        name: string;
        id: string;
        color: string;
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
            current.length === julebrusList.length
                ? []
                : julebrusList.map((item) => item.id)
        );

    const rows = julebrusList.map((item) => {
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
                    <Text size="sm" weight={500}>
                        {item.name}
                    </Text>
                </td>
                <td>
                    <ColorSwatch
                        color={item.color}
                        size={20}
                        style={{ marginRight: 10 }}
                    />
                </td>
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
                                checked={
                                    selection.length === julebrusList.length
                                }
                                indeterminate={
                                    selection.length > 0 &&
                                    selection.length !== julebrusList.length
                                }
                                transitionDuration={0}
                                mb={-5}
                            />
                        </th>
                        <th>Julebrus</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}
