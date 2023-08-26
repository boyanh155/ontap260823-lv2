import React from "react";
import { Button, ListGroupItem } from "reactstrap";

const Item = ({ text, id, active, data, setData }) => {
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
    setData(newData)
  };
  return (
    <ListGroupItem
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
      active={active}
    >
      <div>{`${id}.${text}`}</div>
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
        <Button color="danger" onClick={handleRemoveItem}>
          DELETE
        </Button>
      </div>
    </ListGroupItem>
  );
};

export default Item;
