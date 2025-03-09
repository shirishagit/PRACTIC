import React from "react";

const UserContext = React.createContext(`shirisha`)

const UserProvider = UserContext.Provider
const Userconsumer = UserContext.Consumer

export  {UserProvider,Userconsumer};