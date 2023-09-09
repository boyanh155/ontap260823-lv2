import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TodoDetails = () => {
  const location = useLocation();
  const params = useParams();
  const [tdID, setTdID] = useState("");
  useEffect(() => {
    setTdID(location.state);
  }, [location]);
  return <div>TodoDetails : {tdID}</div>;
};

export default TodoDetails;
