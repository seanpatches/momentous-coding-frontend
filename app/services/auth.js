import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile',
});

export const signup = (email, password, username) => {
  return new Promise((resolve, reject) =>{
    auth0.signup({
      email: email,
      password: password,
      username: username,
      connection: 'Username-Password-Authentication',
      user_metadata: { role: 'user' }
    }, (error, results) => {
      if(error) return reject(error);
      resolve(results);
    });
  })
    .then(results => {
      console.log(results)
    });
};