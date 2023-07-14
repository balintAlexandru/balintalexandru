import { useState } from "react";
import Layout from "./pages/Layout/Layout";
import Content from "./pages/Content/Content";
import TransitionIn from "./components/TransitionIn/TransitionIn";
import TransitionOut from "./components/TransitionOut/TransitionOut";
import Div100vh from "react-div-100vh";

const App = () => {
  const [triggerContactAnimation, setTriggerContactAnimation] = useState(false);

  return (
    <>
      <TransitionOut />
      {triggerContactAnimation && (
        <Div100vh>
          <TransitionIn
            setTriggerContactAnimation={setTriggerContactAnimation}
          />
        </Div100vh>
      )}
      <Layout setTriggerContactAnimation={setTriggerContactAnimation}>
        <Content />
      </Layout>
    </>
  );
};

export default App;
