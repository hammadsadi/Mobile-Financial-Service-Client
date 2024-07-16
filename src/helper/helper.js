import toast from "react-hot-toast";

// Show Toast Alert
export const toastAlert = (msg, type) => {
  return toast[type](msg);
};
