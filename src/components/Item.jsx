import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, ListGroupItem } from "reactstrap";

const Item = ({ text, id, active, data, setData, state }) => {
  const handleRemoveItem = () => {
    const currentData = data;
    const newData = currentData.filter((item) => item.id !== id);
    setData(newData);
    
    // setData()
  };
  const activeItem = () => {
    const currentData = data;
    const newData = currentData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setData(newData);
  };
  const toggleCheckItem = (e) => {
    const currentData = data;
    const newData = currentData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          state:item.state ==='Completed' ? 'Uncompleted': 'Completed'
        };
      } else {
        return {
          ...item,
        
        };
      }
    });
    setData(newData)
  };
  return (
    <ListGroupItem
      style={{
        display: "flex",
        justifyContent: "space-between",
        textDecoration: state === "Completed" ? "line-through" : "",
      }}
      active={active}
    >
      <Link to={`/todo/${text}`} state={id}>
      <div>{`${id}.${text}`}</div>
      </Link>
      <div>
        <Button
          style={{
            marginRight: "5px",
          }}
          color="primary"
          onClick={activeItem}
        >
          Active
        </Button>
        <Input
          style={{
            marginRight: "4px",
          }}
          type="checkbox"
          checked={state === "Completed"}
          onChange={toggleCheckItem}
        />

        <Button color="danger" onClick={handleRemoveItem}>
          DELETE
        </Button>
      </div>
    </ListGroupItem>
  );
};

export default Item;
