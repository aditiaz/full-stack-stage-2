import React from "react";
import { useParams } from "react-router-dom";

const RoomsContextProvider = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { id } = useParams();

  return (
    <RoomsContextProvider.Provider value={{ modalShow, setModalShow, id }}>
      {props.children}
    </RoomsContextProvider.Provider>
  );
};

export default RoomsContextProvider;
