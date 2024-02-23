"use client";

import { useLayoutEffect, useState } from "react";
import MenuListItem from "./MenuListItem";
import ActionMenu from "./ActionMenu";

const MenuList = () => {
  const [itemInScreen, setItemInScreen] = useState<string>("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        setItemInScreen(`#${section.id}`);
      }
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "Inicio", id: "#inicio" },
    { text: "Sobre", id: "#sobre" },
    { text: "Experiencia", id: "#experiencia" },
    { text: "Projetos", id: "#projetos" },
    { text: "Contato", id: "#contato" },
  ];

  return (
    <nav className="flex flex-col lg:flex-row lg:items-center items-end gap-4 w-full px-4 lg:px-0">
      {
        menuItems.map((item, index) => (
          <MenuListItem key={index} text={item.text} id={item.id} active={itemInScreen === item.id} />
        ))
      }
      <ActionMenu />
    </nav>
  );
};

export default MenuList;