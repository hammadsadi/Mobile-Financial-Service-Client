import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useGetAdmin from "../../../hooks/useGetAdmin";
const Users = () => {
  const [isAdmin] = useGetAdmin();
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/all`,
        {
          withCredentials: true,
        }
      );
      return data;
    },
  });

  // handleChangeStatus
  const handleChangeStatus = async (e, item) => {
    console.log(item);

    const userStatus = {
      status: e.target.value,
      balance: item.balance,
      prevStatus: item.status,
    };
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/users/status/${item._id}`,
      userStatus,
      {
        withCredentials: true,
      }
    );
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Users Lists</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs shadow-xl">
          <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Number</th>
              <th className="p-3">Account Type</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users
              ? users.map((item) => (
                  <tr
                    className="border-b border-opacity-20 border-gray-700 bg-gray-900"
                    key={item._id}
                  >
                    <td className="p-3">
                      <p>{item?.name}</p>
                    </td>
                    <td className="p-3">
                      <p>{item?.mobile}</p>
                    </td>

                    <td className="p-3">
                      <p className="capitalize">{item?.accountType}</p>
                    </td>

                    <td className="p-3 text-right">
                      <select
                        name="status"
                        id=""
                        className="bg-gray-900 px-3 py1 border-none"
                        onChange={(e) => handleChangeStatus(e, item)}
                      >
                        <option
                          value="active"
                          selected={item.status === "active" ? true : false}
                        >
                          Active
                        </option>
                        <option
                          value="block"
                          selected={item.status === "block" ? true : false}
                        >
                          Block
                        </option>
                        <option
                          selected={item.status === "pending" ? true : false}
                        >
                          Pending
                        </option>
                      </select>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
