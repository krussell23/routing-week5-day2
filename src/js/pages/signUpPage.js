import levelHeading from "./../components/ui/levelHeading";

import link from "./../components/ui/link";

const homePage = function () {
  const header = document.createElement("header");

  const h1 = levelHeading("h1", "Sign Up Page");

  const login = link("home page", "/");

  const signUp = link("login page", "/login");

  header.append(h1);

  header.append(home);

  header.append(login);

  return header;
};

export default signUpPage;
