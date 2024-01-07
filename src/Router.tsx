import { createBrowserRouter } from "react-router-dom";
import Form from "./pages/Form";
import List from "./pages/List";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Form />,
   },
   {
    path: '/list',
    element: <List />
   }
]);


export default router;
