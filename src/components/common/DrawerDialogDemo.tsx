import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";

interface DrawerDialogDemoProps {
  readonly isOpen: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly title?: string;
  readonly valueTodoTitle?: string;
  readonly valueDescription?: string;
  readonly onValueTodoChange?: (value: string, type: "title" | "description") => void;
  readonly actionButton: () => void;
  readonly actionButtonText: string;
}

export function DrawerDialogDemo({
  isOpen: open,
  onOpenChange: setOpen,
  title,
  valueTodoTitle: todoTitleValue,
  valueDescription: todoDescriptionValue,
  onValueTodoChange,
  actionButton,
  actionButtonText,
}: DrawerDialogDemoProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">
              {title}
            </DialogTitle>
            {todoTitleValue && (
              <div className="flex flex-col gap-2">
                <Input
                  value={todoTitleValue}
                  placeholder={todoTitleValue}
                  className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  dark:bg-black/40 dark:text-white"
                  onChange={(e) => onValueTodoChange?.(e.target.value, 'title')}
                />
                <Textarea
                  value={todoDescriptionValue}
                  placeholder={todoDescriptionValue}
                  className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  dark:bg-black/40 dark:text-white"
                  onChange={(e) => onValueTodoChange?.(e.target.value, 'description')}
                />
              </div>
            )}
          </DialogHeader>
          <DialogFooter>
            <Button onClick={actionButton}>{actionButtonText}</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl font-bold mb-4">{title}</DrawerTitle>
          {todoTitleValue && (
            <div className="flex flex-col gap-2">
              <Input
                value={todoTitleValue}
                placeholder={todoTitleValue}
                className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  dark:bg-black/40 dark:text-white"
                onChange={(e) => onValueTodoChange?.(e.target.value, 'title')}
              />
              <Textarea
                value={todoDescriptionValue}
                placeholder={todoDescriptionValue}
                className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0  dark:bg-black/40 dark:text-white"
                onChange={(e) => onValueTodoChange?.(e.target.value, 'description')}
              />
            </div>
          )}
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button onClick={actionButton}>{actionButtonText}</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
