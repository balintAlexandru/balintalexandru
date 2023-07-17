import { useEffect, useState } from "react";
import Layout from "./pages/Layout/Layout";
import Content from "./pages/Content/Content";
import TransitionIn from "./components/TransitionIn/TransitionIn";
import TransitionOut from "./components/TransitionOut/TransitionOut";
import TransitionMobile from "./components/TransitionMobile/TransitionMobile";
import Div100vh from "react-div-100vh";

const App = () => {
  const [triggerContactAnimation, setTriggerContactAnimation] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [triggerMobileLayout, setTriggerMobileLayout] = useState({
    show: false,
    page: "",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <TransitionOut />
      {triggerContactAnimation && (
        <TransitionIn setTriggerContactAnimation={setTriggerContactAnimation} />
      )}
      <Div100vh>
        <Layout setTriggerContactAnimation={setTriggerContactAnimation}>
          <Content
            setTriggerMobileLayout={setTriggerMobileLayout}
            setTriggerContactAnimation={setTriggerContactAnimation}
          />
        </Layout>
        {triggerMobileLayout.show && width <= 500 && (
          <TransitionMobile
            triggerMobileLayout={triggerMobileLayout}
            setTriggerMobileLayout={setTriggerMobileLayout}
            setTriggerContactAnimation={setTriggerContactAnimation}
          />
        )}
      </Div100vh>
    </>
  );
};

export default App;
