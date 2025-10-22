import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { FormularioPesquisa } from "./Forms";
import { Story } from "./Story";
import { Resources } from "./Resources";


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
}
]);