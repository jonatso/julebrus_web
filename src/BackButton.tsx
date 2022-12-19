import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
    return <Button onClick={() => navigate(-1)}>Back</Button>;
}
