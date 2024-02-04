import * as msal from "@azure/msal-node";
import { getUserFromToken, getBranch } from "../user/user.controller.js";
import User from "../../Models/User.js";

const msalConfig = {
  auth: {
    clientId: "3d6bc04c-160d-49a6-8ffd-d119b9f663d7",
    authority:
      "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c",
    clientSecret: "2Oy8Q~zTb2Ca.zlnvK6zTOTKMciVj2cXAYB9mbwc",
  },
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

export const login = (req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: "http://localhost:5050/redirect",
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
      redirectUri: "http://localhost:5050/redirect",
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
    console.log(existingUser);

    if (existingUser.length !== 0) {
      const newUser = new User(userData);
      newUser.save();
      // console.log('I am inside loop')
    }
    //console.log(userData);

    res.cookie("token", accessToken, {
      maxAge: 3073600,
      sameSite: "lax",
      secure: false,
      expires: new Date(Date.now() + 3073600),
      httpOnly: true,
    });
    res.redirect("http://localhost:3001/btn");
    // res.send('Login Successful!');
  } catch (error) {
    console.error("Error during redirect:", error);
    res.status(500).send("Error during login process");
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.redirect("https://login.microsoftonline.com/common/oauth2/v2.0/logout");
    res.send("Logout Successfully");
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).send("Error during logout");
  }
};
