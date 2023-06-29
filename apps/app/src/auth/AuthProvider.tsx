import { WebAuth } from "auth0-js";
import React, { useCallback, useRef } from "react";

interface IAuthContext {
  login: () => void;
  logout: () => void;
}

export const AuthContext = React.createContext<IAuthContext>(null);

interface AuthProviderProps {
  children?: React.ReactNode;
  config: {
    domain: string;
    clientID: string;
  }
}

// const foo = new Auth0Lock('config.clientId', 'config.domain');

export const AuthProvider = ({ children, config }: AuthProviderProps) => {
  const auth0 = useRef(new WebAuth(config));

  const login = useCallback(async (username: string, password: string) => {
    const res = await new Promise((resolve, reject) => auth0.current.login({
      username,
      password,
      realm: 'test',
    }, (error, res)));
    console.log(res);
  }, []);
  const logout = useCallback(() => {

  }, []);

  const context = {
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};
