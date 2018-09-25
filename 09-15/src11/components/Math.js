import React from "react";

const Math = (props) => {
    let value;

    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        default:
            value = NAN
    }
    return {value}
    //return <span style= {{ fontSize: value }} {value} </span>;
}