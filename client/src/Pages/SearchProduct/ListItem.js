import React from "react";
import ListItemData from "./ListPublications/ListItemData";
import { useNavigate } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ dataPublications }) => {
  const navigate = useNavigate();

  return (
    <div className="list-wrap">
      {dataPublications.map((item) => (
        <ListItemData key={item.idPub} item={item} />
      ))}
    </div>
  );
};

export default ListItem;
