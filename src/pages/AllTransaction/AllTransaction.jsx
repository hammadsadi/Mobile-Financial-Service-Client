const AllTransaction = () => {
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Latest Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs shadow-xl">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="bg-gray-700">
            <tr className="text-left">
              <th className="p-3">From</th>
              <th className="p-3">To</th>
              <th className="p-3">Type</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>Microsoft Corporation</p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-400">Friday</p>
              </td>
              <td className="p-3">
                <p>01 Feb 2022</p>
                <p className="text-gray-400">Tuesday</p>
              </td>
              <td className="p-3 text-right">
                <p>$15,792</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md bg-rose-700  text-white">
                  <span>Pending</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransaction;
