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
import Contacts from "./pages/contacts/Contacts";
import Services from './pages/services/Services';
import OurWork from './pages/ourwork/OurWork';
import ProjectDetails from './pages/ourwork/components/ProjectDetails';

// ✅ Temporary placeholders so you don't get blank screens




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Other Pages */}
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />

        {/* ✅ New placeholder pages */}
        <Route path="services" element={<Services/>} />
        <Route path="our-work" element={<OurWork/>} />
        <Route path="project-details/:id" element={<ProjectDetails/>} />

        {/* Fallback Route for 404 */}
        <Route
          path="*"
          element={
            <div className="p-8 text-center">
              <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
              <p className="mt-4 text-gray-600">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
