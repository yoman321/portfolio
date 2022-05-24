import Layout from "./components/layout/Layout";
import styles from "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Games from './pages/Games';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AboutMe/>}></Route>
        <Route path='/ContactMe' element={<ContactMe/>}></Route>
        <Route path='/Games' element={<Games/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
