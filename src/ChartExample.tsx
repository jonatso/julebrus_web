import { Switch } from "@mantine/core";
import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        year: "2019",
        jonatan: {
            value: 2,
            percentage: 23,
        },
        elias: {
            value: 4,
            percentage: 46,
        },
        andreas: {
            value: 3,
            percentage: 31,
        },
    },
    {
        year: "2020",
        jonatan: {
            value: 3,
            percentage: 33,
        },
        elias: {
            value: 5,
            percentage: 55,
        },
        andreas: {
            value: 2,
            percentage: 22,
        },
    },
    {
        year: "2021",
        jonatan: {
            value: 4,
            percentage: 36,
        },
        elias: {
            value: 3,
            percentage: 27,
        },
        andreas: {
            value: 5,
            percentage: 45,
        },
    },
    {
        year: "2022",
        jonatan: {
            value: 5,
            percentage: 36,
        },
        elias: {
            value: 4,
            percentage: 29,
        },
        andreas: {
            value: 3,
            percentage: 35,
        },
    },
];

export default function ChartExample() {
    const [usePercentage, setUsePercentage] = useState(false);

    const valueOrPercentage = usePercentage ? "percentage" : "value";

    const chartData = data.map((year) => ({
        ...year,
        jonatan: year.jonatan[valueOrPercentage],
        elias: year.elias[valueOrPercentage],
        andreas: year.andreas[valueOrPercentage],
    }));

    return (
        // make a recharts line chart that can be toggled between percentage and absolute values
        <>
            <Switch
                checked={usePercentage}
                onChange={(event) =>
                    setUsePercentage(event.currentTarget.checked)
                }
                label="Show results as percentage of total possible points"
            />
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="jonatan"
                        stroke="#8884d8"
                        strokeWidth={2.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="elias"
                        stroke="#82ca9d"
                        strokeWidth={2.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="andreas"
                        stroke="#ffc658"
                        strokeWidth={2.5}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
