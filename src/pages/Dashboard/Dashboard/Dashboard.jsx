import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { IoMdMail } from "react-icons/io";
import TransactionHistory from "../../../components/TransactionHistory/TransactionHistory";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const [checkBalance, setCheckBalance] = useState(false);
  console.log(auth);
  return (
    <div className="max-w-4xl mx-auto">
      <div className=" grid grid-cols-2 gap-5">
        <div>
          <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100 shadow-xl">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <div className="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-4xl uppercase text-gray-600 dark:text-gray-300">
                  {auth?.name?.slice(0, 2)}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{auth?.name}</h2>
                <span className="text-sm text-gray-400 capitalize">
                  {auth?.accountType} Account
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <IoMdMail />
                  <span className="text-gray-400">{auth?.email}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-gray-400">{auth?.mobile}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray-900 shadow-xl">
          <input
            type={`${checkBalance ? "text" : "password"}`}
            value={`${auth?.balance} Tk`}
            className="w-64 outline-none text-5xl bg-gray-900 text-white p-2 font-bold"
            readOnly
          />

          <button
            className="py-2 rounded-md px-4 bg-rose-700 text-white font-bold"
            onClick={() => setCheckBalance(!checkBalance)}
          >
            Check Balance
          </button>
        </div>
      </div>
      <div className="mt-4">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Dashboard;
