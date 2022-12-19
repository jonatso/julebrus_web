export const mockJulebrusList = [
    { name: "Hansa", color: "red" },
    { name: "Grans", color: "red" },
    { name: "Hamar", color: "brown" },
    { name: "CB", color: "brown" },
    { name: "Kiwi", color: "red" },
    { name: "Mack", color: "red" },
    { name: "Saft suse", color: "red" },
    { name: "Arendal", color: "brown" },
    { name: "Sørlands", color: "brown" },
    { name: "Lerum", color: "red" },
];

export const mockJulebrusInEvent = [
    {
        id: "2019",
        julebrus: [
            { name: "Hansa", color: "red" },
            { name: "Grans", color: "red" },
            { name: "Hamar", color: "brown" },
            { name: "CB", color: "brown" },
            { name: "Kiwi", color: "red" },
            { name: "Mack", color: "red" },
        ],
    },
    {
        id: "2020",
        julebrus: [
            { name: "Hansa", color: "red" },
            { name: "Grans", color: "red" },
            { name: "Hamar", color: "brown" },
            { name: "Mack", color: "red" },
            { name: "Saft suse", color: "red" },
            { name: "Arendal", color: "brown" },
            { name: "Sørlands", color: "brown" },
            { name: "Lerum", color: "red" },
        ],
    },
    {
        id: "2021",
        julebrus: [
            { name: "Hansa", color: "red" },
            { name: "Hamar", color: "brown" },
            { name: "Kiwi", color: "red" },
            { name: "Mack", color: "red" },
        ],
    },
    {
        id: "2022",
        julebrus: [
            { name: "Hansa", color: "red" },
            { name: "Grans", color: "red" },
            { name: "Hamar", color: "brown" },
            { name: "CB", color: "brown" },
            { name: "Kiwi", color: "red" },
            { name: "Mack", color: "red" },
            { name: "Saft suse", color: "red" },
            { name: "Arendal", color: "brown" },
            { name: "Sørlands", color: "brown" },
            { name: "Lerum", color: "red" },
        ],
    },
];

export const mockGuessStatistics = [
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

export const mockPlayersInEvent = [
    {
        id: "2019",
        players: [
            { name: "Jonatan", id: "jonatan", finished: true },
            { name: "Baird", id: "baird", finished: true },
            { name: "Andreas", id: "andreas", finished: false },
            { name: "Martin", id: "martin", finished: false },
        ],
    },
    {
        id: "2020",
        players: [
            { name: "Jonatan", id: "jonatan", finished: true },
            { name: "Lavik", id: "lavik", finished: true },
            { name: "Andreas", id: "andreas", finished: false },
            { name: "Baird", id: "baird", finished: true },
        ],
    },
    {
        id: "2021",
        players: [
            { name: "Jonatan", id: "jonatan", finished: true },
            { name: "Elias", id: "elias", finished: false },
            { name: "Andreas", id: "andreas", finished: true },
            { name: "Baird", id: "baird", finished: false },
        ],
    },
    {
        id: "2022",
        players: [
            { name: "Jonatan", id: "jonatan", finished: true },
            { name: "Elias", id: "elias", finished: false },
            { name: "Andreas", id: "andreas", finished: false },
            { name: "Baird", id: "baird", finished: true },
            { name: "Lavik", id: "lavik", finished: false },
            { name: "Håvard", id: "håvard", finished: false },
        ],
    },
];

export const mockPlayerNames = [
    { id: "jonatan", name: "Jonatan" },
    { id: "elias", name: "Elias" },
    { id: "andreas", name: "Andreas" },
    { id: "baird", name: "Baird" },
    { id: "lavik", name: "Lavik" },
    { id: "håvard", name: "Håvard" },
    { id: "martin", name: "Martin" },
];

export const mockEventList = [
    { name: "Julebrussmaking 2019", id: "2019", finished: true },
    { name: "Julebrussmaking 2020", id: "2020", finished: true },
    { name: "Julebrussmaking 2021", id: "2021", finished: false },
    { name: "Julebrussmaking 2022", id: "2022", finished: false },
];
