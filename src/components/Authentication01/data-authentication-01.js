export const AUTHENTICATION_01 = {
  serverSideSessions: {
    title: "Server-side Sessions",
    description:
    "One of the way to authenticate a user is using “Server-side Sessions”. 1) The server stores the unique identifier and sends the same identifier to the client.  2) The client sends the identifier along with requests to protected resources. 3) The server can then check if the identifier which is previously issued by server to the client is valied. Server-side Session is the great way of authentications, however it requires the tight “coupling” between backend & frontend.",
    code: `

`,
  },
  authenticationTokens: {
    title: "Authentication Tokens",
    description:
    "Another way of authentication is using “Authentication Tokens”.  Most React apps are SPAs (Single Page Applications) that are served by a server that’s “decoupled from the backend”. The SPA “handles routing on the client side” and only talks to the backend in case there needs data (or needs data to change).  In that case, “Authentication Tokens” is coming to play.  How is works is: 1) create (but not store) the “permission” token on the server and send it to the client, 2) the client attaches the token to future requests for protected resources, 3) the server can then verify the attached token.",
    code: `

`,
  },
};
