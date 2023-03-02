import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouteList } from './Features/RouteList';
const router = createBrowserRouter(RouteList);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
