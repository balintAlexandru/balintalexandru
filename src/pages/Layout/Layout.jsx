import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <div>{children}</div>
      </main>
     <Footer />
    </div>
  );
};

export default Layout;
