import { WifiLoader } from "react-awesome-loaders";
export const WifiLoaderComponent = () => {
  return (
    <>
      <WifiLoader
        background={"transparent"}
        desktopSize={"50px"}
        mobileSize={"50px"}
        text={"Loading..."}
        backColor="#0E8388"
        frontColor="#CBE4DE"
      />
    </>
  );
};