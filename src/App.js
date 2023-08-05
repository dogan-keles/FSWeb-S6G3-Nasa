import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Viewer from "./components/Viewer";
import Calender from "./components/Calender";

function App() {
  const [apod, setApod] = useState({});
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=PDD7IZ0gT4sJDsUQnCwYSTxCSfRZNp6Z205KozAq",
        {
          params: {
            date: date,
          },
        }
      )
      .then(function (response) {
        // handle success
        console.log(response);
        setApod(response.data);
        setError(null);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(error.message);
      });

    // setTimeout(() => {
    // setApod({ msg: "yüklenme testi yapıldı!" });
    //}, 2000);
  }, [date]);

  return (
    <div className="App">
      <Calender setDate={setDate} />
      {!error ? (
        "Daily astronomical images provided by NASA "
      ) : (
        <p>Network error: {error}</p>
      )}
      {apod.title && <Viewer dataProps={apod} />}
    </div>
  );
}

export default App;
