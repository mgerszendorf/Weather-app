import React from "react";

function Popup(props) {
  return (
    <section className={props.button ? "active_popup" : "popup"}>
      <div className="popup_wrapper">
        <div className="cross" onClick={props.handleBtn}></div>
        <form className="select_city_form">
          <input
            id="city_input"
            type="text"
            placeholder="Please enter a city..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Please enter a city...")}
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
          />
          <button id="submit_btn" type="submit" onClick={props.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Popup;
