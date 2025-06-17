function TopBar() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row rounded-md mx-10 my-10 px-4 py-2 justify-between bg-[hsl(225,23%,24%)]">
          <img src="/logo.svg" alt="logo" />
          <img src="/icon-sun.svg" alt="icon-sun" className="rounded-lg p-3 shadow-sm" />
        </div>
      </div>
    </>
  );
}

export default TopBar;
