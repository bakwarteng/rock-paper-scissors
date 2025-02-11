import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
 import "../assets/App.css";
 import "../assets/home.css";
import ErrorPage from "../components/ErrorPage.jsx";
import App from "../components/App.jsx";
import Home from "../components/Home.jsx";
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
      
      {
        path:"/game",
        element: <App />
        
      },
      
      
     

      
       
      
      
      

      
    
]);

// Render the RouterProvider component
 const root= ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={router} />
);