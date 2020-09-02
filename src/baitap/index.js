import React from 'react';
import Header from './header';
import Carousel from "./carousel";
import ListPhone from "./listPhone";
import ListLaptop from "./listLaptop";
import Promotion from "./promotion";

export default function baitap() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <ListPhone/>
            <ListLaptop/>
            <Promotion/>
        </div>
    )
}