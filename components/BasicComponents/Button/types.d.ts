export interface ButtonProps {
  link: string;
  type: "primary" | "gray" | "transparent";
  text: string;
  icon: IconObj;
  iconLeft?: boolean;
}

export interface IconObj {
  width: number;
  height: number;
  path: string;
  pathHover?: string;
  alt: string;
  priority?: boolean;
}
