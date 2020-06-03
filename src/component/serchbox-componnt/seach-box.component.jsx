import React from "react";
import "../serchbox-componnt/search-box.style.css";

export const Searchbox = (props) => (


<div>


<input    className = "search-box"
          type="search"
          placeholder={props.placeholder}
          onChange={props.handelchange}
        />



</div>


)