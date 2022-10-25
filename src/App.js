import "./styles.css";
import db from "./firebase";
import Todo from "./Components/todo";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const getDbData = async () => {
      const querySnapshot = await getDocs(collection(db, "todo"));
      const data = [];
      querySnapshot.forEach((element) => {
        //console.log("element is " + element.data());
        data.push(element.data());
        console.log(todoList);
      });
      setTodoList(data);
    };
    getDbData();
  }, []);
  const handleAdd = async () => {
    const document = await addDoc(collection(db, "todo"), {
      name: todo,
      status: true
    });

    setTodoList((prev) => [...prev, { name: todo, status: true }]);
    // console.log("newElement ", todoList);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => handleAdd()}>Add</button>
      {todoList.map((todo) => (
        <Todo key={todo.name} name={todo.name} status={todo.status} />
      ))}
    </div>
  );
}
