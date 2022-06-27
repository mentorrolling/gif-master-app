import React from "react";
import { useParams } from "react-router-dom";
import InfoCategory from "../components/InfoCategory";

const CategoryScreen = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <div className="row">
        {/* Información de categorias  */}
        <InfoCategory />

        {/* Tarjetas de gifs  */}
      </div>
    </div>
  );
};

export default CategoryScreen;
