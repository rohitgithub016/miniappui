import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
import { useNavigate } from "react-router-dom";

const useInitiateTelegram = () => {
  const navigate = useNavigate();
  eruda.init();
  console.log(WebApp?.contentSafeAreaInset);
  console.log(WebApp?.safeAreaInset);
  if (Number(WebApp.version) > 8) {
    WebApp.requestFullscreen();
    WebApp.expand();
    WebApp.disableVerticalSwipes();
  }
  WebApp.BackButton.show();
  WebApp.BackButton.onClick(() => {
    navigate(-1);
  });
};

export default useInitiateTelegram;
