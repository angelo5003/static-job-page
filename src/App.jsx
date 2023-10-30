import { useState } from "react";
import jsonData from "./data/data.json";
import JobCard from "./components/JobCard/JobCard";

function App() {
  const [data, setData] = useState(jsonData);
  console.log(`data in json:`, data);

  return (
    <>
      {Array.isArray(data) ? (
        // If there is data and the data is an array than map
        data.map((jobData) => {
          return <JobCard jobData={jobData} key={jobData.id} />;
        })
      ) : (
        // if there is no data or the data is not an array than show this error
        <div>Error: Oops there is no data to be shown</div>
      )}
    </>
  );
}

export default App;
