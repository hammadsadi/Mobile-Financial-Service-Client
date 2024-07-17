import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HistoryItem from "../../components/HistoryItem/HistoryItem";

const PaymentHistory = () => {
  const { data: payments } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-user-transaction`,
        {
          withCredentials: true,
        }
      );
      return data;
    },
  });
  console.log(payments);
  return (
    <div className="max-w-4xl mx-auto">
      <div className=" p-2 mx-auto sm:p-4 text-gray-100">
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
              {payments?.slice(0, 10).map((item) => (
                <HistoryItem item={item} key={item._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
