import { Route, Routes } from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import Home from "./Containers/Home/Home";
import Page from "./Containers/Page/Page";
import Create from "./Containers/Create/Create";
import Edit from "./Containers/Edit/Edit";

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
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
