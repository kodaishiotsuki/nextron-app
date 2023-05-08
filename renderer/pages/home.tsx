import CloseButton from "../components/CloseButton";
import OpenButton from "../components/OpenButton";
import WebView from "../components/WebView";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full h-screen bg-gray-300">
      <div className="border-r-4 border-gray-400 w-1/2">
        <div className="flex gap-3">
          <OpenButton
            label="Slack"
            url="https://app.slack.com/client/T03707R5N1J/C03P0HFFGLX/thread/C03P0HFFGLX-1682511418.776039"
          />
          <OpenButton
            label="GitHub"
            url="https://github.com/kodaishiotsuki/next-supabase-socialmedia"
          />
          <CloseButton />
        </div>
      </div>
      <WebView />
    </div>
  );
};

export default HomePage;
