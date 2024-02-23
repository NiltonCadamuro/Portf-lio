import Image from "next/image";
import Logo from "../BasicComponents/Logo";
import Drawer from "./Drawer";
import Button from "../BasicComponents/Button";
import MenuList from "./MenuList";
import Container from "../BasicComponents/Container";

const Header = () => {
  return (
    <header className="w-full h-[64px] lg:h-[80px] flex items-center bg-surfaceBackground px-5 shadow-lg lg:px-20 justify-between sticky top-0 left-0 z-20">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="lg:hidden block">
            <Drawer />
          </div>
          <div className="hidden lg:block">
            <MenuList />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;