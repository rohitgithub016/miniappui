import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAnimateLeftToRight } from "../appslice";

const useInitiateTelegram = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  eruda.init();
  console.log(WebApp?.contentSafeAreaInset);
  console.log(WebApp?.safeAreaInset);
  if (Number(WebApp.version) > 8) {
    WebApp.expand();
    WebApp.disableVerticalSwipes();
  }
  WebApp.BackButton.show();
  WebApp.BackButton.onClick(() => {
    dispatch(setAnimateLeftToRight(true))
    navigate(-1);
  });
};

export default useInitiateTelegram;
