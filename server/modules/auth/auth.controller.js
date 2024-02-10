import * as msal from "@azure/msal-node";
import { getUserFromToken, getBranch } from "../user/user.util.js";
import User from "../../Models/User.js";

const msalConfig = {
  auth: {
    clientId: "b9bb88de-2a97-4488-848b-b33d23d1c014",
    authority:
      "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c",
    clientSecret: "YYC8Q~VRg-8WiYViZ.sVT3-tUILf5GxTlyqJKbhc",
  },
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

export const login = (req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: "https://umiam-kriti24.onrender.com/redirect",

  };

  cca
    .getAuthCodeUrl(authCodeUrlParameters)
    .then((response) => {
      res.redirect(response);
    })
    .catch((error) => {
      console.error("Error generating auth code URL:", error);
      res.status(500).send("Error initiating login process");
    });
};

export const redirect = async (req, res) => {
  try {
    const tokenRequest = {
      code: req.query.code,
      scope: "user.read",

      redirectUri: "https://umiam-kriti24.onrender.com/redirect",

    };

    const response = await cca.acquireTokenByCode(tokenRequest);
    const accessToken = response.accessToken;

    const user = await getUserFromToken(accessToken);
    const userBranch = await getBranch(accessToken);

    const userData = {
      ...user,
      branch: userBranch,
    };

    const existingUser = await User.findOne({
      rollNumber: userData.rollNumber,
    });
  //  console.log(existingUser);

    if (existingUser === null) {
      const newUser = new User(userData);
      newUser.save();
      console.log('Server is creating user in database');
      res.redirect('http://localhost:3000/user-form');
    }
    //console.log(userData);

    res.cookie("user", existingUser, {
      maxAge: 3073600,
      secure: false,
      expires: new Date(Date.now() + 3073600),
      httpOnly: false,
    });

    res.cookie("token", accessToken, {
      maxAge: 3073600,
      secure: false,
      expires: new Date(Date.now() + 3073600),
      httpOnly: false,
    });
     res.redirect("http://localhost:3000/feed");
    // res.send('Login Successful!');
  } catch (error) {
    console.error("Error during redirect:", error);
    res.status(500).send("Error during login process");
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.clearCookie("user");
    res.redirect("https://login.microsoftonline.com/common/oauth2/v2.0/logout");
    res.send("Logout Successfully");
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).send("Error during logout");
  }
};
