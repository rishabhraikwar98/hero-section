import React from "react";

function Tab(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        props.active
          ? "bg-tabBgAct border-tabBorderAct text-xs font-normal  border-2 px-4 py-2 rounded-md uppercase"
          : "bg-tabBg border-tabBorder text-xs font-normal  border-2 px-4 py-2 rounded-md uppercase"
      }
    >
      {props.children}
    </button>
  );
}

export default Tab;
