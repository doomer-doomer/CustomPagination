import React,{useState,useEffect} from "react"
import CarsData from "./CarsData"
import Cars from "./Car"
import { useParams } from "react-router-dom";
import SearchComponent from "./Search"

export default function Store(){
    const { id } = useParams();
    return(
        <div>
            <SearchComponent 
            data={CarsData}
            key={id}
        />
        </div>
    )
}