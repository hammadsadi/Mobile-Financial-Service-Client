import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full h-full py-5 flex justify-center items-center bg-gray-900">
      <div className="flex flex-col w-[400px] md:w-[450px] p-6 rounded-md sm:p-10  text-gray-100 border border-gray-700 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register Now</h1>
        </div>

        {/* User Form */}
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="email"
                placeholder="Inter Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Pin
              </label>
              <input
                type="number"
                name="pin"
                id="email"
                placeholder="Inter 5 Digit Pin"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Mobile
              </label>
              <input
                type="text"
                name="pin"
                id="email"
                placeholder="Inter Your Mobile Number"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="pin"
                id="email"
                placeholder="Inter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Account Type
              </label>
              <select
                name="accountType"
                id=""
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
              >
                <option value="user">User</option>
                <option value="agent">Agent</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-rose-700 text-white"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Have an account yet? &nbsp;
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="hover:underline text-rose-700"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
