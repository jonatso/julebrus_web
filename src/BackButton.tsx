import { ActionIcon, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <ActionIcon
            variant="filled"
            color={"blue"}
            onClick={() => navigate(-1)}
        >
            <FaArrowLeft />
        </ActionIcon>
    );
}
