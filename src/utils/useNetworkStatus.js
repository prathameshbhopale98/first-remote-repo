import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  // let networkStatus = true;

  useEffect(() => {
    window.addEventListener("offline", () => {
      setNetworkStatus(false);
      console.log(networkStatus);
    });

    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });
  }, []);

  return networkStatus;
};

export default useNetworkStatus;
