import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#6941c6"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        secondaryColor="gray"
      />
    </div>
  );
}
