import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center z-40">
      <ImSpinner9 className="text-2xl" />
    </div>
  );
};

export default Loader;
