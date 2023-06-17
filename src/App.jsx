import { useState } from "react";
import Layout from "./pages/Layout/Layout";
import Content from "./pages/Content/Content";
import TransitionIn from "./components/TransitionIn/TransitionIn";
import TransitionOut from "./components/TransitionOut/TransitionOut";

const App = () => {
  const [triggerContactAnimation, setTriggerContactAnimation] = useState(false);
  return (
    <>
      <TransitionOut />
      {triggerContactAnimation && (
        <TransitionIn setTriggerContactAnimation={setTriggerContactAnimation} />
      )}
      <Layout setTriggerContactAnimation={setTriggerContactAnimation}>
        <Content />
      </Layout>
    </>
  );
};

export default App;
