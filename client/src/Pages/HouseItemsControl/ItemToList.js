import React from "react";
import ItemToListData from "./ItemToListData";
import { useSelector } from "react-redux";

const ItemToList = ({ dataPublicationsToWork, ShowMeTheTrue }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      {dataPublicationsToWork.map((item) => {
        if (item.idUser === user.uid) {
          return (
            <ItemToListData
              key={item.idPub}
              id={item.idPub}
              item={item}
              ShowMeTheTrue={ShowMeTheTrue}
            />
          );
        }
      })}
    </div>
  );
};

export default ItemToList;
