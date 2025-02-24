import { cn } from "@/lib/utils";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = () => {
  return (
    <div className={cn("min-h-screen container mx-auto px-4 overflow-y-auto")}>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default MainLayout;
