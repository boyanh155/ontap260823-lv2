import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Form from "../components/Form";
import List from "../components/List";
import { Card } from "reactstrap";

const TodoList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //
    data.map((item) => {
      if (item.active) {
        document.title = item.text;
      }
    });
    // Save local storage
  }, [data]);
  const previousData = JSON.parse(localStorage.getItem("todolist"));
  useEffect(() => {
    setData(previousData);
  }, [previousData]);
  return (
    <Card
      style={{
        maxWidth: "60%",
      }}
    >
      <Title data={data} />
      <Form setData={setData} data={data} />
      <List setData={setData} data={data} />
    </Card>
  );
};

export default TodoList;
