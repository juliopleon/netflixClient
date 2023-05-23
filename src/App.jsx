import "./app.scss";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";
import Redirect from './components/Redirect';

import {
    BrowserRouter,
    // Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const App = () => {
    // const navigate = useNavigate();
    const user = false;
    return (<BrowserRouter>
        <Routes>
            <Route path="/movies" element={user ? <Home type="movies" /> : <Redirect to="/register" />} />
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