import React from "react";
import { Button, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const Title = ({ data }) => {
  const resetToList = () => {
    localStorage.setItem("todolist", "[]");
  };
  return (
    <CardBody>
      <CardTitle tag="h5">Welcome back, MindX</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        We have got {data.length} tasks coming up in the next days
      </CardSubtitle>
      <Button onClick={resetToList}>RESET</Button>
    </CardBody>
  );
};

export default Title;
