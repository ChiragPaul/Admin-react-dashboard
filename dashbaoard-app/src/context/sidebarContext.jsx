import { Children, createContext, useReducer } from "react";
import reducer from "../reducer/sidebarReducer";
import propTypes from "prop-types";
import sidebarReducer from "../layout/Sidebar/Sidebar";

const initialState = {
  isSidebarOpen: false,
};

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  return (
    <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: propTypes.node,
};
