import { cn } from "@/lib/utils";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[200px]">
      <div className="flex flex-row gap-2">
        <div className={cn("w-3 h-3 rounded-full bg-primary animate-bounce")}></div>
        <div className={cn("w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-.3s]")}></div>
        <div className={cn("w-3 h-3 rounded-full bg-primary animate-bounce [animation-delay:-.5s]")}></div>
      </div>
    </div>
  );
};

export default Spinner;
