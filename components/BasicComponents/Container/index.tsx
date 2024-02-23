const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={`max-w-[1440px] w-full mx-auto ${className}`}>{children}</section>;
};

export default Container;