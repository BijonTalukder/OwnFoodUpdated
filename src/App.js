import Main from "./layout/main";
import ProductDetail from "./Component/productDetailpage/ProductsDetails";
import Home from "./Component/main";
import Shopping from "./Component/shopping/shopping";
import SignIn from "./Component/signIn/SignIn";
import Profile from "./Component/profile/SallerProfileUpdate";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Main />
        </div>
      ),
      children: [
        {
          path: "/",
          element: (
            <div>
              <Home />
            </div>
          ),
        },
        {
          path: "/productdetails",
          element: (
            <div>
              <ProductDetail />
            </div>
          ),
        },
        {
          path: "/shoppingpage",
          element: (
            <div>
              <Shopping />
            </div>
          ),
        },
        {
          path: "/login",
          element: (
            <div>
              <SignIn />
            </div>
          ),
        },
        {
          path: "/sellerprofle",
          element: (
            <div>
              <Profile />
            </div>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
