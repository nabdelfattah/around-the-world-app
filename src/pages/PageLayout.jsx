import { Outlet } from "react-router-dom";
import { Header } from "../components";

export function PageLayout() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}
