import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutMe from "./pages/AboutMePage";
import ContactMe from "./pages/ContactMePage";
import Games from "./pages/GamesPage";
import PageNotFound from "./pages/PageNotFoundPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
