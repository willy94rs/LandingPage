import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Inicio } from "./pages/Inicio";
import { Paquete1 } from "./pages/Paquete1";
import { Paquete2 } from "./pages/Paquete2";
import { Paquete3 } from "./pages/Paquete3";
import { Portadas } from "./pages/Portadas";
import { Otros } from "./pages/Otros";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Inicio },
      { path: "paquete1", Component: Paquete1 },
      { path: "paquete2", Component: Paquete2 },
      { path: "paquete3", Component: Paquete3 },
      { path: "portadas", Component: Portadas },
      { path: "otros", Component: Otros },
    ],
  },
]);
