import React, { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(comingid) {
    console.log(comingid);
    setSelected(selected === comingid ? null : comingid);
  }

  function handleMultipleSelection(id) {
    let cpyMultiple = [...multiple];
    let findIndexOfelement = cpyMultiple.indexOf(id);
    if (findIndexOfelement === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfelement, 1);
    setMultiple(cpyMultiple);
  }

  return (
    <div className="container">
      <button class="enablebutton" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable Multiselection" : "Enable MultiSelection"}
      </button>
      <div className="wrapper">
        <div className="Accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              const { id, question, answer } = dataItem;
              return (
                <div
                  key={id}
                  className="item"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(id)
                      : () => handleSingleSelection(id)
                  }
                >
                  <h3>{question}</h3>
                  <span>+</span>
                  {enableMultiSelection && multiple.includes(id) || selected === id ? (
                    <div className="content">{answer}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div>
              <h3>data not found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
