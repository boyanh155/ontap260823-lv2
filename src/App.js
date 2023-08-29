import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
import { Card } from "reactstrap";
// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import NavigateBar from "./components/NavigateBar";
import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Uncompleted from "./pages/Uncompleted";
import Completed from "./pages/Completed";
function App() {
  const setLocalStorage = (data) => {
    localStorage.setItem("todolist", JSON.stringify(data));
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavigateBar />
      <Routes>
        <Route path="todolist"
        setLocalStorage={setLocalStorage}
        element={<TodoList />} />
        <Route
          path="uncompleted"
          setLocalStorage={setLocalStorage}
          element={<Uncompleted />}
        />
        <Route 
        setLocalStorage={setLocalStorage}
        path="completed" element={<Completed />} />
      </Routes>
    </div>
  );
}

export default App;
