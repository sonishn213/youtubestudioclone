import MakeCaption from "./components/Caption/MakeCaption";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import VideoPreview from "./components/VideoPreview/VideoPreview";
function App() {
  return (
    <Provider store={store}>
      <div className=" bg-black  py-20 h-screen">
        <div className="max-w-6xl mx-auto">
          <Header />
          <div className="flex w-full ">
            <div className="w-1/2 ">
              <MakeCaption />
            </div>
            <div className="w-1/2 ">
              <VideoPreview />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
