import {createContext} from "react";

const TokenContext = createContext({
    token: 'token',
    onLoginHandler: (form, values) => {},
    onLogoutHandler: () => {}
});

export default TokenContext;