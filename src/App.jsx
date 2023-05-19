import "./app.scss";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";

import {
    BrowserRouter,
    // Router,
    Routes,
    Route,
    Redirect,
} from "react-router-dom";

const App = () => {
    const user = true;
    return (<BrowserRouter>
        <Routes>
            <Route path="/movies" element={user ? <Home type="movies" /> : <Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Home />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;