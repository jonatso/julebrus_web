import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Shell from "./Shell";
import Guess from "./Guess";
import Statistics from "./Statistics";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Shell />}>
                    <Route path="/" element={<Navigate to="/guess" />} />
                    <Route path="/guess" element={<Guess />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="*" element={<Navigate to="/guess" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
