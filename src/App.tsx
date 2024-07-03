import { Route, Routes } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import Home from "./Containers/Home/Home";
import Page from "./Containers/Page/Page";
import Create from "./Containers/Create/Create";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/:pageName" element={<Page />} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
