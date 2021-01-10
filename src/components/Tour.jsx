import React, { useState } from "react";
import "../App.css";

const Tour = ({ id, image, info, name, price, notInterested }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="tour">
      <img src={image} alt={name} />
      <div className="read-more">
        <p> {readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "  show less" : "  read more"}
        </button>
      </div>

      <h5 className="ml-auto p-2">${price}</h5>
      <button className="btn btn-danger m-3" onClick={() => notInterested(id)}>
        Not Interested
      </button>
    </section>
  );
};
export default Tour;
