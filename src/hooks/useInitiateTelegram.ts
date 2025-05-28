import WebApp from "@twa-dev/sdk";

const useInitiateTelegram = () => {
  console.log(WebApp?.contentSafeAreaInset);
  console.log(WebApp?.safeAreaInset);
  if (Number(WebApp.version) > 8) {
    WebApp.requestFullscreen();
    WebApp.expand();
    WebApp.disableVerticalSwipes();
  }
};

export default useInitiateTelegram;
