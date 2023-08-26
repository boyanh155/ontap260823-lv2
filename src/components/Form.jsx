import React, { useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";

const Form = ({ setData, data }) => {
  const [value, setValue] = useState("");

  const handleAddClick = () => {
    const newTodo = {
      text: value,
      id: data.length + 1,
      active: false,
    };
    const currentData = [...data, newTodo];
    //
    setData((prev) => {
      return currentData;
    });
    const local = {
      todolist: JSON.stringify(currentData),
    };
    localStorage.setItem("todolist", JSON.stringify(currentData));
    setValue("");
  };
  return (
    <InputGroup>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button onClick={handleAddClick} color="primary">
        ADD
      </Button>
    </InputGroup>
  );
};

export default Form;
