import React, { useState, useEffect } from "react";
import "./App.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
// check all console logs before deploying
//

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = "https://course-api.com/react-tours-project";

  // fetching data from url
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      //console.log(tours);
    } catch (error) {
      console.log(error);
    }
  };

  // use effect
  useEffect(() => {
    fetchTours();
  }, []);

  // removing tour if not interested button clicked
  const notInterested = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      {tours.length === 0 ? (
        <section className="text-center">
          <h1>No Tours Left</h1>
          <button className="btn btn-success" onClick={() => fetchTours()}>
            Refresh
          </button>
        </section>
      ) : (
        <h1 className="text-center">Our Tours</h1>
      )}
      <Tours tours={tours} notInterested={notInterested} />
    </section>
  );
}

export default App;
