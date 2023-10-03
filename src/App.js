import logo from './logo.svg';
import './App.css';
import Store from './Store';
import ErrorPage from './ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "page/:id",
      element: <Store/>,
      errorElement: <ErrorPage />,
    },
   
  ]);
  return (
    <RouterProvider router={router} />
   
  
  );
}

export default App;
