import WebApp from "@twa-dev/sdk";

const useInitiateTelegram = () => {
  if (Number(WebApp.version) > 8) {
    WebApp.requestFullscreen();
    WebApp.expand();
    WebApp.disableVerticalSwipes();
  }
};

export default useInitiateTelegram;
