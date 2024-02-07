import React from "react";
import { Link } from "react-router-dom";

function index({ socket }) {
  return (
    <div>
      <Link to="https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/oauth2/v2.0/authorize?client_id=3d6bc04c-160d-49a6-8ffd-d119b9f663d7&scope=user.read%20openid%20profile%20offline_access&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fredirect&client-request-id=fd1a356c-f763-48a2-be28-dd59cecd4972&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=2.6.2&x-client-OS=darwin&x-client-CPU=arm64&client_info=1">Login through Outlook</Link>
    </div>
  );
}

export default index;
