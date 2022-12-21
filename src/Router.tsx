import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Shell from "./Shell/Shell";
import Guess from "./Play/Guess";
import Statistics from "./Statistics/Statistics";
import EventList from "./Play/EventList";
import PlayerList from "./Play/PlayerList";
import ManageJulebrus from "./Manage/ManageJulebrus";
import ManagePlayers from "./Manage/ManagePlayers";
import ManageEvents from "./Manage/ManageEvents";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Shell />}>
                    <Route path="/" element={<Navigate to="/guess" />} />
                    <Route path="/guess" element={<EventList />} />
                    <Route path="/guess/:eventId" element={<PlayerList />} />
                    <Route
                        path="/guess/:eventId/:personId"
                        element={<Guess />}
                    />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route
                        path="/manage"
                        element={<Navigate to={"/manage/events"} />}
                    />
                    <Route
                        path="manage/julebrus"
                        element={<ManageJulebrus />}
                    />
                    <Route path="manage/players" element={<ManagePlayers />} />
                    <Route path="manage/events" element={<ManageEvents />} />
                    <Route path="*" element={<Navigate to="/guess" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
