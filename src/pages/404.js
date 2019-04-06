import React from 'react';
import {defaultStrings} from '../helpers/strings';

const Page404 = ({ location }) => (
   <div className="not-found">
      <h1>{defaultStrings.not_found}<code>{location.pathname}</code></h1>
   </div>
);

export default Page404;