import { createBrowserRouter, RouterProvider, Navigate } from "react-router"

import Root from "./components/Root"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Tech from "./components/Tech"
import Java from "./components/Java"
import Node from "./components/Node"
import Vue from "./components/Vue"

export default function App() {

  const routeObj = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "tech",
          element: <Tech />,
          children: [
            {
              index: true,
              element: <Navigate to="java" replace />
            },
            {
              path: "java",
              element: <Java />
            },
            {
              path: "node",
              element: <Node />
            },
            {
              path: "vue",
              element: <Vue />
            }
          ]
        }
      ]
    }
  ])

  return <RouterProvider router={routeObj} />
}