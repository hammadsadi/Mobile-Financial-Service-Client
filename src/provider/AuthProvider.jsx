import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { data: auth, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/logged/in/user`,
        { withCredentials: true }
      );
      return data;
    },
  });

  const authInfo = {
    auth,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
