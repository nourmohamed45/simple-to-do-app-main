import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { Edit, Trash } from "lucide-react";
import { DrawerDialogDemo } from "../common/DrawerDialogDemo";
import { Todo } from "@/types/todos";
import { useTodoQuery } from "@/hooks/useTodoQuery";
import Spinner from "../common/Spinner";

const TodoItem = ({ title, description, completed: initialCompleted, id }: Todo) => {
  const [isEditingOpenDialog, setIsEditingOpenDialog] = useState(false);
  const [isDeleteOpenDialog, setIsDeleteOpenDialog] = useState(false);
  const [completed, setCompleted] = useState(initialCompleted)
  const { deleteTodo, isDeletingTodo, updateTodo, isUpdatingTodo } = useTodoQuery();
  const [todoEditData, setTodoEditData] = useState({
    title,
    description
  });
  const handleEditTodo = () => {
    updateTodo(id, todoEditData);
    console.log(todoEditData)
    setIsEditingOpenDialog(false);
  };
  const handleValueTodoChange = (value: string | boolean, type: "title" | "description") => {
    setTodoEditData({
      ...todoEditData,
      [type]: value
    });
  };

  const handleCheckboxChange =  () => {

    try {
      const newCompletedStatus = !completed;

      setCompleted(newCompletedStatus);
      updateTodo(id, {
        completed: newCompletedStatus
      })
    } catch (error) {
      console.log("Checkbox update error:",error)
    }
    
  }


  const handleDeleteTodo = () => {
    deleteTodo(id);
    setIsDeleteOpenDialog(false);
  };
  return (
    <div className="flex flex-col md:flex-row justify-between shadow-md p-4 rounded-md dark:bg-background w-full md:w-[49%]">
      <div className="flex items-center gap-2">
        <Checkbox 
          id={`todo-${id}`}
          className="cursor-pointer"
          checked={completed}
          onCheckedChange={handleCheckboxChange}
        />
        <div>
          <label
            htmlFor={`todo-${id}`}
            className={`text-sm font-medium leading-none ${completed ? "line-through opacity-50" : ""}`}
          >
            {title}
          </label>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4 md:mt-0 justify-end">
        <Button
          variant={"outline"}
          className="cursor-pointer"
          onClick={() => setIsEditingOpenDialog(true)}
        >
          <Edit />
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => setIsDeleteOpenDialog(true)}
        >
          {
            isDeletingTodo ? (
              <Spinner />
            ) : (
              <Trash />
            )
          }
        </Button>
      </div>
      <DrawerDialogDemo
        isOpen={isEditingOpenDialog}
        onOpenChange={setIsEditingOpenDialog}
        title="Edit Task"
        valueTodoTitle={todoEditData.title}
        valueDescription={todoEditData.description}
        onValueTodoChange={handleValueTodoChange}
        actionButton={handleEditTodo}
        actionButtonText={isUpdatingTodo ? "Updating..." : "Edit Task"}
      />
      <DrawerDialogDemo
        isOpen={isDeleteOpenDialog}
        title="Are you sure delete?"
        onOpenChange={setIsDeleteOpenDialog}
        actionButton={handleDeleteTodo}
        actionButtonText="Delete Task"
      />
    </div>
  );
};

export default TodoItem;
