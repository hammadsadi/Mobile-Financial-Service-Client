import axios from "axios";

const Users = () => {
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/all`,
        {
          withCredentials: true,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getUsers();
  return <div>Users</div>;
};

export default Users;
