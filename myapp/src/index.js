import ReactDOM from 'react-dom';

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
<Auth0Provider
 domain="dev-f4b2e5ib7wsay2qg.us.auth0.com"
 clientId="cxYIEcfnsJparB1yJ5aBb9gvhsRVLO7c"
      redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);