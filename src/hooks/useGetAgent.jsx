import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useGetAgent = () => {
  const { auth } = useContext(AuthContext);
  const { data: isAgent } = useQuery({
    queryKey: ["agent"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/agent/${auth?.email}`,
        {
          withCredentials: true,
        }
      );
      return data;
    },
  });
  return [isAgent];
};

export default useGetAgent;
