import { Kalam } from "next/font/google";

const kalam = Kalam({ subsets: ["latin"], weight: '400' });

const SpecialText = ({ children, className, ...props }: {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
}) => {
  return <h3 className={`${kalam.className} ${className} text-base leading-4 text-textTertiary glowing-text-animation`} {...props}>{children}</h3>;
};

export default SpecialText;