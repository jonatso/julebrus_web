import {
    Button,
    List,
    NumberInput,
    Select,
    Table,
    Text,
    Group,
    Grid,
    ColorSwatch,
    Flex,
    Box,
} from "@mantine/core";
import { forwardRef, useState } from "react";

const julebrusList = [
    { name: "Hansa", color: "red" },
    { name: "Grans", color: "red" },
    { name: "Hamar", color: "brown" },
    { name: "CB", color: "brown" },
    { name: "Kiwi", color: "red" },
    { name: "Mack", color: "red" },
].sort((j1, j2) => (j1.name > j2.name ? 1 : -1));

// make a component for guessing blind guessing the julebrus, with a mantine form

export default function Guess() {
    const [selections, setSelections] = useState<(string | null)[]>(
        julebrusList.map(() => null)
    );

    const [ratings, setRatings] = useState<(number | undefined)[]>(
        julebrusList.map(() => undefined)
    );

    const onlyActualRatings = ratings.flatMap((r) => (r ? [r] : []));

    const averageRating =
        onlyActualRatings.reduce((sum, r) => sum + r, 0) /
            onlyActualRatings.length || 0;

    return (
        <Flex wrap={"wrap"} direction="row" gap={20}>
            <Table maw={600}>
                {/*Randomize the order of the julebrus, and make a table. For each julebrus, the player is supposed to be able to choose any of the julebrus from a dropdown which the player think he just tasted*/}
                <thead>
                    <tr>
                        <th>Julebrus</th>
                        <th>Guess</th>
                        <th>Rating</th>{" "}
                        {/*The player should be able to rate the julebrus from 1 to 10*/}
                    </tr>
                </thead>
                <tbody>
                    {julebrusList.map((julebrus, idx) => (
                        <tr>
                            <td>{julebrus.name}</td>
                            <td>
                                <Select
                                    data={julebrusList.map((julebrus) => ({
                                        value: julebrus.name,
                                        label: julebrus.name,
                                        group: julebrus.color,
                                    }))}
                                    searchable
                                    itemComponent={SelectItem}
                                    onChange={(value) => {
                                        setSelections((prev) => {
                                            const newSelections = [...prev];
                                            newSelections[idx] = value;
                                            return newSelections;
                                        });
                                    }}
                                    value={selections[idx]}
                                    clearable
                                />
                            </td>
                            <td>
                                <NumberInput
                                    placeholder="1 - 10"
                                    max={10}
                                    min={1}
                                    withAsterisk
                                    onChange={(value) => {
                                        setRatings((prev) => {
                                            const newRatings = [...prev];
                                            newRatings[idx] = value;
                                            return newRatings;
                                        });
                                    }}
                                    value={ratings[idx]}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Box>
                <Text>Not guessed:</Text>
                <List>
                    {julebrusList
                        .filter(
                            (julebrus) => !selections.includes(julebrus.name)
                        )
                        .map((julebrus) => (
                            <List.Item>{julebrus.name}</List.Item>
                        ))}
                </List>
                <Text>Guessed:</Text>
                <List>
                    {julebrusList
                        .filter((julebrus) =>
                            selections.includes(julebrus.name)
                        )
                        .map((julebrus) => (
                            //count the number of times the julebrus is guessed
                            <List.Item>
                                {julebrus.name} x
                                {
                                    selections.filter(
                                        (selection) =>
                                            selection === julebrus.name
                                    ).length
                                }
                            </List.Item>
                        ))}
                </List>
                <Text>
                    Average rating:{" "}
                    {/* show average rating for the julebrus which have been rated */}
                    {averageRating.toFixed(2)}
                </Text>

                <Button
                    onClick={() => {
                        setSelections(julebrusList.map(() => null));
                    }}
                >
                    Reset
                </Button>
            </Box>
        </Flex>
    );
}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    value: string;
    label: string;
    group: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ value, label, group, ...others }: ItemProps, ref) => (
        <div ref={ref} {...others}>
            <Group noWrap position="apart">
                <Text size="sm">{label}</Text>
                <ColorSwatch
                    color={group}
                    size={15}
                    style={{ borderRadius: 5 }}
                />
            </Group>
        </div>
    )
);
