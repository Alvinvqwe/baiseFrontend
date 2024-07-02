const Content = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full flex flex-grow justify-center text-black">
      <div className="h-full w-full mx-1 sm:mx-8 md:mx-20 xl:mx-32">
        {children}
      </div>
    </div>
  );
};

export default Content;
