import React, { createContext, useReducer } from 'react';
import UserReducer from '../reducers/UserReducer';
import useFetch from '../hooks/useFetch';
import NavReducer from '../reducers/NavReducer';

export const UserContext = createContext();
export const DispatchContext = createContext();
export const NavContext = createContext();

export const randomURL = 'https://uinames.com/api/?ext&amount=10';
const defaultState = ['random', randomURL];

export const UserProvider = props => {
  const [navState, navDispatch] = useReducer(NavReducer, defaultState);
  const URL = navState[1];
  const [state, dispatch] = useFetch([{ loading: true }], URL, UserReducer);

  return (
    <UserContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NavContext.Provider value={[navState, navDispatch]}>{props.children}</NavContext.Provider>
      </DispatchContext.Provider>
    </UserContext.Provider>
  );
};
