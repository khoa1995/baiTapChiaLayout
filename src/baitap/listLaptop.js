import React from "react";
import ItemLaptop from "./itemLaptop";

export default function listPhone() {
  return (
    <section
      id="laptop"
      className="container-fluid pt-5 pb-5 bg-light text-dark"
    >
      <h1 className="text-center">BEST LAPTOP</h1>
      <div className="row">
        <ItemLaptop />
        <ItemLaptop />
        <ItemLaptop />
        <ItemLaptop />
      </div>
    </section>
  );
}
