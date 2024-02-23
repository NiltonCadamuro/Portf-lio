const Text = ({ children, className, ...props }: {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
}) => {
  return <p className={`${className} text-base text-textSecondary`} {...props}>{children}</p>;
};

export default Text;