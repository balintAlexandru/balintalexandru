import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";

const Layout = ({ children, setTriggerContactAnimation }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer setTriggerContactAnimation={setTriggerContactAnimation} />
    </div>
  );
};

export default Layout;
