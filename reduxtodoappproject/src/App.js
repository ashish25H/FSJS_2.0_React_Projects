import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./TodoSlice";

function App() {
  const todo = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [id,setId] = useState('');
  const inputField = document.getElementById("inputField");

  const getInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  const setInputByTodo = (id) => {
    todo.filter((todo) => {
      if (todo.id === id) {
        setId(id);
        inputField.value = '';
        inputField.value = todo.text;
        setInput(inputField.value);
        console.log(input);
      }
    });
  };

  return (
    <>
      <p className="text-6xl text-center font-semibold bg-[#03203C] text-[rgb(255,255,255)] p-3">
        ToDo App
      </p>
      <div className="bg-[#03203C] text-[#fff] text-center p-20">
        <input
          id="inputField"
          type="text"
          name="inputTodo"
          placeholder="Enter a todo"
          title="input field"
          onChange={getInput}
          className="p-2 rounded-md mr-3 outline-none text-[#242B2E]"
        />
        <button
          className="bg-[#758283] p-2 rounded-md"
          onClick={() => dispatch(addTodo(input))}
        >
          Add Todo
        </button>
        <button
          className="bg-[#758283] p-2 rounded-md ml-3"
          onClick={() => dispatch(editTodo(input, id))}
        >
          Update
        </button>
      </div>

      <div className="flex flex-col  items-center justify-center mt-7  text-[#fff] ">
        {todo.map((todo) => (
          <div className="flex ">
            <p
              key={todo.id}
              className=" bg-[#03203C] py-2 px-3  rounded-md mb-3"
            >
              {todo.text}
            </p>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-[#758283] py-2 px-3 mb-3 rounded-md ml-3"
            >
              Delete
            </button>
            <button
              onClick={() => setInputByTodo(todo.id)}
              className="bg-[#758283] py-2 px-3 mb-3 rounded-md ml-3"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
