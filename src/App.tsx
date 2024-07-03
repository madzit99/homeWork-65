import { Route, Routes } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import Home from "./Containers/Home/Home";
import Page from "./Containers/Page/Page";

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
        </Routes>
      </main>
    </>
  );
};

export default App;
