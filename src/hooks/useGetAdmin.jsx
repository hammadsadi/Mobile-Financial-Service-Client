import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAdmin = () => {
  const { auth } = useContext(AuthContext);
  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/${auth?.email}`,
        {
          withCredentials: true,
        }
      );
      return data;
    },
  });
  return [isAdmin, adminLoading];
};

export default useGetAdmin;
