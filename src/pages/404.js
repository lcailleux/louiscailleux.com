import React from "react";
import {page404} from "../helpers/urls";
import {defaultStrings} from "../helpers/strings";

document.title = page404.documentTitle;
const Page404 = ({ location }) => (
   <div className="not-found">
      <h1>{defaultStrings.not_found}<code>{location.pathname}</code></h1>
   </div>
);

export default Page404;