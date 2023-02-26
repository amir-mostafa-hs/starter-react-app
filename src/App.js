import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import CreateCoursePage from "./components/CreateCoursePage";
import ManageCoursePage from "./components/ManageCoursePage";
import Community from "./components/Community";
import Jasem from "./components/Jasem";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/" element={<AboutPage />}>
          <Route path="community" element={<Community />} />
          <Route path="jasem" element={<Jasem />} />
        </Route>
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:slug" element={<ManageCoursePage />} />
        <Route path="/create-course" element={<CreateCoursePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
