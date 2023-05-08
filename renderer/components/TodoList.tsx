import React from "react";

const TodoList = ({ todos }: { todos: string[] }) => {
  return (
    <div className="w-1/2 p-4">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="mb-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
