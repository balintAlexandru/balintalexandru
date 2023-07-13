import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";
import Div100vh from "react-div-100vh";

const Layout = ({ children, setTriggerContactAnimation }) => {
  return (
    <Div100vh>
      <div className="layout-container">
        <Header />
        <main>
          <div>{children}</div>
        </main>
        <Footer setTriggerContactAnimation={setTriggerContactAnimation} />
      </div>
    </Div100vh>
  );
};

export default Layout;
