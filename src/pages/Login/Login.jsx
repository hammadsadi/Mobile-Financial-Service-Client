import { Link, useNavigate } from "react-router-dom";
import { toastAlert } from "../../helper/helper";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  // handleSubmitLogin
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const numberAndEmail = e.target.numberAndEmail.value;
    const pin = e.target.pin.value;
    const userInfo = { numberAndEmail, pin };
    // Filed Validation
    if (!numberAndEmail || !pin) {
      return toastAlert("All Fields Are Required", "error");
    }

    // Pin Check
    if (pin.length < 5) return toastAlert("Pin Must 5 Digit", "error");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        userInfo,
        {
          withCredentials: true,
        }
      );
      if (data) {
        toastAlert(data.message, "success");
        localStorage.setItem("name", numberAndEmail);
        navigate("/");
      }
    } catch (error) {
      toastAlert(error?.response?.data?.error, "error");
    }
  };
  return (
    <div className="w-full h-screen py-5 flex justify-center items-center bg-gray-900">
      <div className="flex flex-col p-6 rounded-md sm:p-10  text-gray-100 border border-gray-700 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>

        {/* User Form */}
        <form noValidate="" onSubmit={handleSubmitLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="numberAndEmail" className="block mb-2 text-sm">
                Mobile Or Email
              </label>
              <input
                type="text"
                name="numberAndEmail"
                id="numberAndEmail"
                placeholder="Mobile Number Or Email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="pin" className="block mb-2 text-sm">
                Pin
              </label>
              <input
                type="number"
                name="pin"
                id="email"
                placeholder="Your Pin"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-rose-700 text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet? &nbsp;
              <Link
                rel="noopener noreferrer"
                to="/sign-up"
                className="hover:underline text-rose-700"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
