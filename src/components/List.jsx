import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Item from "./Item";
const List = ({ data, setData }) => {
  return (
    <ListGroup>
      {data.map((item) => {
        return (
          <Item
            setData={setData}
            data={data}
            key={item.id}
            text={item.text}
            id={item.id}
            active={item.active}
          />
        );
      })}
    </ListGroup>
  );
};

export default List;
