import "./app.scss";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";
// import Redirect from './components/Redirect';

import {
    BrowserRouter,
    // Router,
    Navigate,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const App = () => {
    // const navigate = useNavigate();
    const user = true;
    return (<BrowserRouter>
        <Routes>
            <Route path="/*" element={user ? <Home /> : <Navigate to="/register" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            {user && (
                <>
                    <Route path="/movies" element={<Home type="movies" />} />
                    <Route path="/series" element={<Home type="series" />} />
                    <Route path="/watch" element={<Watch />} />
                </>
            )
            }

        </Routes>
    </BrowserRouter>
    );
};

export default App;