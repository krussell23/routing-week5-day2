import levelHeading from "./../components/ui/levelHeading";

import link from "./../components/ui/link";

const homePage = function () {
  const header = document.createElement("header");

  const h1 = levelHeading("h1", "Login Page");

  const login = link("home page", "/login");

  const signUp = link("sign up", "/signup");

  header.append(h1);

  header.append(home);

  header.append(signUp);

  return header;
};

export default loginPage;
