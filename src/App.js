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
function App() {
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
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
