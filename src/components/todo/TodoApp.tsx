import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodoQuery } from "@/hooks/useTodoQuery";

const TodoApp = () => {
  const {
    todos,
    isLoading,
    page,
    setPage,
    setPageSize,
    totalPages,
    setSortOrder,
    setStatusFilter,
    statusFilter,
    addTodo,
    isAddingTodo,
  } = useTodoQuery();

  return (
    <div>
      <TodoForm
        addTodo={addTodo}
        isAddingTodo={isAddingTodo}
        setSortOrder={setSortOrder}
        setPageSize={setPageSize}
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
      />
      <TodoList
        todos={todos}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default TodoApp;
