import { useState } from "react";
import "./App.css";
import jsonData from "./data/data.json";
import JobCard from "./components/JobCard/JobCard";

function App() {
  const [data, setData] = useState(jsonData);
  console.log(`data in json:`, data);

  return (
    <>
      <header className="header-background-image-container">
        <img className="header-background" />
      </header>
      <div className="body-container">
        {Array.isArray(data) ? (
          // If there is data and the data is an array than map
          data.map((jobData) => {
            return <JobCard jobData={jobData} key={jobData.id} />;
          })
        ) : (
          // if there is no data or the data is not an array than show this error
          <div>Error: Oops there is no data to be shown</div>
        )}
      </div>
    </>
  );
}

export default App;
