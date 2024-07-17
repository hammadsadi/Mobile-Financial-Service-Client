const SendMoney = () => {
  return (
    <div className="max-w-4xl mx-auto  py-5 flex justify-center items-center ">
      {/* User Form */}
      <form noValidate="" className="">
        <div className=" flex items-center gap-2 md:gap-5 flex-wrap">
          <div>
            <label
              htmlFor="numberAndEmail"
              className="block text-white mb-2 text-sm"
            >
              Receiver Mobile Number
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
