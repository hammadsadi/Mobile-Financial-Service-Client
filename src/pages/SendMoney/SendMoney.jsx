import { useContext } from "react";
import { toastAlert } from "../../helper/helper";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const SendMoney = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  // handleSubmitMoneyForm
  const handleSubmitMoneyForm = async (e) => {
    e.preventDefault();
    const receiverMobile = e.target.receiverMobile.value;
    const amount = parseInt(e.target.amount.value);
    const pin = e.target.pin.value;

    // Validation
    if (!receiverMobile || !amount || !pin)
      return toastAlert("All Fields Are Required", "error");
    if (amount < 50)
      return toastAlert("Money Less than 50 taka not allowed", "error");
    try {
      const paymentInfo = {
        amount,
        pin,
        receiverMobile,
        senderInfo: {
          name: auth?.name,
          accountType: auth?.accountType,
          email: auth?.email,
          mobile: auth?.mobile,
        },
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-money`,
        paymentInfo,
        {
          withCredentials: true,
        }
      );
      if (data?.error) {
        return toastAlert(data?.error, "error");
      }
      if (data?.message) {
        e.target.reset();
        return toastAlert(data?.message, "success");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="max-w-4xl mx-auto  py-5 flex justify-center items-center ">
      {/* User Form */}
      <form noValidate="" className="" onSubmit={handleSubmitMoneyForm}>
        <div className=" flex items-center gap-2 md:gap-5 flex-wrap">
          <div>
            <label
              htmlFor="receiverMobile"
              className="block text-white mb-2 text-sm"
            >
              Receiver Mobile Number
            </label>
            <input
              type="text"
              name="receiverMobile"
              id="receiverMobile"
              placeholder="Mobile Number"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block mb-2 text-white text-sm">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Your Amount"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-rose-700 transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="pin" className="block mb-2 text-sm text-white">
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
          <div>
            <button
              type="submit"
              className="w-full mt-6 px-8 py-3 font-semibold rounded-md bg-rose-700 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
