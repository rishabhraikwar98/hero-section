import React from "react";

function Button(props) {
  return (
    <button className="text-black bg-buttonbg font-bold py-2 rounded-full px-7">
      {props.children}
    </button>
  );
}

export default Button;
