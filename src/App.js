import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import styles from "./App.css";
import AboutMe from "./pages/AboutMePage";
import ContactMe from "./pages/ContactMePage";
import Games from "./pages/GamesPage";
import PageNotFound from "./pages/PageNotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Games" element={<Games />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
