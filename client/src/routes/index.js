import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import App from "../App";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import Authlayouts from "../layout";
import Forgotpassword from "../pages/Forgotpassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Authlayouts><RegisterPage /> </Authlayouts>,
      },
      {
        path: "email",
        element: <Authlayouts><CheckEmailPage /> </Authlayouts>,
      },
      {
        path: 'forgot-password',
        element: <Authlayouts><Forgotpassword /> </Authlayouts>,
      },
      {
        path: "password",
        element:  <Authlayouts><CheckPasswordPage /> </Authlayouts>,
      },
      {
        path : 'forgot-password',
        element: <Authlayouts><Forgotpassword /> </Authlayouts>,
      },
      {
          path : "",
          element : <Home/>,
          children : [
            {
              path : ':userId',
              element : <MessagePage/>
            }
          ]
      }
    ]
  }
]);

export default router;
