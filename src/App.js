import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute";
import { ContextProvider } from "./state";

import Home from "./pages/Home";
import Boards from "./pages/Boards";
import SingleBoard from "./pages/SingleBoard";
import Login from "./pages/Login";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}>Home</Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="boards" element={<Boards />}>Boards</Route>
          <Route path="boards/:boardId" element={<SingleBoard />}>SingleBoard</Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

