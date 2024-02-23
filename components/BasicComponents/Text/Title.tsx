const Title = ({ children, className, ...props }: {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
}) => {
  return <h2 className={`${className} text-2xl text-textPrimary`} {...props}>{children}</h2>;
};

export default Title;