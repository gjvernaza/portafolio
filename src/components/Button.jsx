import "./Button.css"
import { useState } from "react";

export default function Button({ value }) {

    return (

        <div class={value ? "inactive" : "active"}>
            <button >
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>


    );
}


