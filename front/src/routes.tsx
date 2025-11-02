import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { FormularioPesquisa } from "./pages/Forms";
import { Story } from "./pages/Story";
import { Resources } from "./pages/Resources";
import { Statistics } from "./pages/Statistic";


export const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},{
  path: '/search',
  element: <FormularioPesquisa/>
},{
  path: '/story',
  element: <Story/>
},{
  path: '/resources',
  element: <Resources/>
},{
  path: '/statistics',
  element: <Statistics/>
}
]);