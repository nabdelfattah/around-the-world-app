import { Logo, SwitchTheme } from ".";

export function Header() {
  return (
    <header className="mb-6 bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="container px-4 mx-auto">
        {/*px means padding-left and padding-right. padding of the x axis*/}
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
}
