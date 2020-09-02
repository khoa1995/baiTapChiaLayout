import React from "react";
import ItemPhone from "./itemPhone";

export default function listPhone() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
          <ItemPhone/>
          <ItemPhone/>
          <ItemPhone/>
          <ItemPhone/>
      </div>
    </section>
  );
}
