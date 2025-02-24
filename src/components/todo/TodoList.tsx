import { Todo } from "@/types/todos";
import PaginationSchema from "../common/PaginationSchema";
import Spinner from "../common/Spinner";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const TodoList = ({ todos, isLoading, page, setPage, totalPages }: TodoListProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto py-6 container flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <PaginationSchema page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default TodoList;