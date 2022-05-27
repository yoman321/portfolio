import Layout from "./components/layout/Layout";
import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMePage";
import ContactMe from "./pages/ContactMePage";
import Games from "./pages/GamesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutMe />}></Route>
        <Route path="/ContactMe" element={<ContactMe />}></Route>
        <Route path="/Games" element={<Games />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
