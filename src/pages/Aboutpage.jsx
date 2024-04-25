import React, { useEffect, useState } from "react";

const Aboutpage = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/todos/${Math.floor(Math.random() * 150) + 1}`);
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todo data:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>About me</h2>
      {todos && (
        <div>
          <h3>I like to {todos.todo}</h3>
        </div>
      )}
    </div>
  );
};

export default Aboutpage;
