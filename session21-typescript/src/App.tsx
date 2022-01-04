import React, { useEffect, useState } from "react";
import "./App.css";
import { Clock } from "./components/Clock";
interface Todo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

function App() {
  // const [sTodos, setTodos] = useState<Todo[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTodos(data.splice(0,20));
  //       console.log(data.splice(0,20));
  //     });
  //   return () => {};
  // }, []);
  return (
    <div>
      <br />
      <br />
      <div className="card container center">
        <Clock pTimeZone="Asia/Jakarta" pIsShowTitle={true} />
        <Clock pTimeZone="Asia/Tokyo" pIsShowTitle={true} />
      </div>

      {/* {JSON.stringify(sTodos)} */}
      {/* {sTodos.map((todo, i) => 
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.completed}</td>
        </tr>
      )} */}
    </div>
  );
}

export default App;
