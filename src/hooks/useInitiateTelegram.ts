import WebApp from "@twa-dev/sdk";
import eruda from "eruda";

const useInitiateTelegram = () => {
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
    history.back();
  });
};

export default useInitiateTelegram;
