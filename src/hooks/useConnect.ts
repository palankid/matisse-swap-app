import { useDispatch, useSelector } from "react-redux";

import { getConnectedStatus } from "features/store/main.selectors";
import { updateConnectedStatus } from "features/store/main.slice";

export const useConnect = () => {
  const connectedStatus = useSelector(getConnectedStatus);
  const dispatch = useDispatch();

  const handleConnectClick = () => {
    dispatch(updateConnectedStatus(true));
  };

  const handleDisconnectClick = () => {
    dispatch(updateConnectedStatus(false));
  };

  return { connectedStatus, handleConnectClick, handleDisconnectClick };
};

export default useConnect;
