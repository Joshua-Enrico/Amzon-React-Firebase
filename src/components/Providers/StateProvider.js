import React, { createContext, useContext, useReducer } from "react";

// Prepare the data for the context
export const StateContext = createContext();

// Create the provider component
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={ useReducer(reducer, initialState)}>
      {children}  
    </StateContext.Provider>
);

// Pull information from the context
export const useStateValue = () => useContext(StateContext);
