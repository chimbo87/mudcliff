import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayOut from "./components/roots/RootLayOut";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contacts from "./pages/contacts/Contacts";
import ProjectDetails from './pages/projects/components/ProjectDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;