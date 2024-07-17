import PropTypes from "prop-types";
const HistoryItem = ({ item }) => {
  return (
    <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
      <td className="p-3">
        <p>{item?.receiverMobile}</p>
      </td>
      <td className="p-3">
        <p>{item?.senderInfo?.mobile}</p>
      </td>
      <td className="p-3">
        <p>Transfer Money</p>
      </td>
      <td className="p-3">
        <p>01 Feb 2022</p>
      </td>
      <td className="p-3 text-right">
        <p>{item?.amount} Tk</p>
      </td>
      <td className="p-3 text-right">
        <span className="px-3 py-1 font-semibold rounded-md bg-green-600  text-white">
          <span>Success</span>
        </span>
      </td>
    </tr>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.object,
};
export default HistoryItem;
