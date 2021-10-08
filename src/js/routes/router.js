/*
object
routes
key         value
route       page.js
*/

import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";

const routes = {
  "/": homePage(),
  "/login": loginPage(),
  "/signup": signUpPage(),
};

const Router = function (pathname) {
  const app = document.querySelector("#app");

  window.history.pushState({}, pathname, window.location.origin + pathname);

  app.appendChild(routes[window.location.pathname]);
};

export { routes };
export default Router;
