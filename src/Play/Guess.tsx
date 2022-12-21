import {
    Button,
    NumberInput,
    Select,
    Table,
    Text,
    Group,
    ColorSwatch,
    Flex,
    Box,
    Title,
} from "@mantine/core";
import { forwardRef, useState } from "react";
import { FaCalculator, FaCheck, FaUndo, FaWineBottle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ActionModal from "../Misc/ActionModal";
import BackButton from "../Misc/BackButton";
import {
    mockEventList,
    mockJulebrusInEvent,
    mockJulebrusList,
    mockPlayerNames,
} from "../Misc/mockData";
import PaperCard from "./PaperCard";
import ProgressCircleCard from "./ProgressCircleCard";

// make a component for guessing blind guessing the julebrus, with a mantine form

export default function Guess() {
    const navigate = useNavigate();

    const { eventId, personId } = useParams<{
        eventId: string;
        personId: string;
    }>();

    const julebrusList =
        mockJulebrusInEvent.find((e) => e.id === eventId)?.julebrus || [];

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

    const playerName = mockPlayerNames.find((p) => p.id === personId)?.name;

    const eventName = mockEventList.find((e) => e.id === eventId)?.name;

    console.log(julebrusList);

    return (
        <>
            <Group mb={10}>
                <BackButton />
                <Title order={3}>
                    {playerName} guessing in {eventName}
                </Title>
            </Group>
            <Flex wrap={"wrap"} direction="row" gap={20}>
                <Table maw={600} style={{ height: "fit-content" }}>
                    <thead>
                        <tr>
                            <th>Julebrus</th>
                            <th>Guess</th>
                            <th>Rating</th>{" "}
                        </tr>
                    </thead>
                    <tbody>
                        {julebrusList.map((julebrus, idx) => (
                            <tr key={julebrus.id}>
                                <td>{julebrus.name}</td>
                                <td>
                                    <Select
                                        size="sm"
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
                                        size="sm"
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
                    <Flex gap="sm" direction="column" wrap="wrap">
                        <ProgressCircleCard
                            label="Julebrus finished"
                            color="green"
                            done={
                                selections.filter((s, idx) => s && ratings[idx])
                                    .length
                            }
                            total={julebrusList.length}
                            icon={<FaWineBottle />}
                        />
                        <ProgressCircleCard
                            label="Average rating"
                            color="blue"
                            done={Math.floor(averageRating * 100) / 100}
                            total={10}
                            icon={<FaCalculator />}
                        />
                        <PaperCard
                            title={"Guessed"}
                            description={
                                julebrusList
                                    .filter((julebrus) =>
                                        selections.includes(julebrus.name)
                                    )
                                    .map((julebrus) => julebrus.name)
                                    .join(", ") || "None yet!"
                            }
                        />
                        <PaperCard
                            title={"Not guessed"}
                            description={
                                julebrusList
                                    .filter(
                                        (julebrus) =>
                                            !selections.includes(julebrus.name)
                                    )
                                    .map((julebrus) => julebrus.name)
                                    .join(", ") || "You've guessed all!"
                            }
                        />
                        <Group>
                            {/* <Button
                                onClick={() => {
                                    setSelections(
                                        mockJulebrusList.map(() => null)
                                    );
                                    setRatings(
                                        mockJulebrusList.map(() => undefined)
                                    );
                                }}
                                color={"red"}
                                leftIcon={<FaUndo />}
                            >
                                Reset
                            </Button> */}
                            <ActionModal
                                title="Reset guesses and ratings"
                                description={`Are you sure you want to reset all of ${playerName}'s guesses and ratings?`}
                                leftIcon={<FaUndo />}
                                actionName="Reset"
                                onAction={() => {
                                    setSelections(
                                        mockJulebrusList.map(() => null)
                                    );
                                    setRatings(
                                        mockJulebrusList.map(() => undefined)
                                    );
                                }}
                            />
                            <Button
                                onClick={() => navigate(-1)}
                                color={"green"}
                                leftIcon={<FaCheck />}
                            >
                                Submit!
                            </Button>
                        </Group>
                    </Flex>
                </Box>
            </Flex>
        </>
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
