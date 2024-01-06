import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import SinglePage from "./pages/single page/SinglePage";
import Status from "./components/status/Status";
import Orders from "./components/Orders/Orders";
import Calendar from "./components/Calendar/Calendar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <div className="contanier">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="profile" element={<Profile />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
            </Route>
          </Route>
          <Route path="status" element={<Status />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
