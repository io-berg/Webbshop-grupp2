import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  admin?: boolean;
}

const Layout: FC<Props> = ({ admin }) => {
  return (
    <div>
      <Header admin={admin} />
      <main className="min-h-[calc(100vh-15rem)]">
        <Outlet />
      </main>
      {!admin && <Footer />}
    </div>
  );
};

export default Layout;
