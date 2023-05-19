import "./app.scss";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Watch from "./pages/Watch";

import {
    BrowserRouter,
    // Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const App = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/movies" element={<Home type="movies" />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;