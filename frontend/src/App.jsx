import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<h1>Home</h1>}/>
                    <Route
                        path="/login"
                        element={<LoginPage/>}/>
                    <Route
                        path="/signup"
                        element={<SignupPage/>}/>
                    {/* <Route
                    path="/tasks"
                    element={<Home/>}/>
                <Route
                    path="/add-task"
                    element={<Home/>}/>
                <Route
                    path="/tasks/:id"
                    element={<Home/>}/>
                <Route
                    path="/profile"
                    element={<Home/>}/> */}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;