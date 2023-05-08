import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

export const useTodos = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
