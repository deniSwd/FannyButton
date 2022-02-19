import style from "./MyButton.module.css";
import {useState} from "react";

const RandomNum = (props) => {

    const articleElements = props.random.map((num, index) =>
        <span  key={index}>-{num}</span>
    )
    return (
        <div  className={style.string}>
            {articleElements}
        </div>
    )
}

export default RandomNum