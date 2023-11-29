import { useState } from "react";
import "./App.css";
import jsonData from "./data/data.json";
import JobCard from "./components/JobCard/JobCard";

function App() {
  const [data, setData] = useState(jsonData);
  const [selectedTags, setSelectedTags] = useState([]);
  console.log(`selectedTags items:`, selectedTags);

  const handleSelectTags = (tag) => {
    // Check if the tag is already selected
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        // If it is selected, remove it from the selected tags array
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      // If it is not selected, add it to the selected tags array
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredJobs = data.filter((jobData) => {
    // Check if any of the selected tags are present in languages or tools or role or level
    return (
      selectedTags.some(
        // Using the some method to iterate through selectedTags
        // The some method returns true if the condition is met for at least one tag
        (tag) =>
          jobData.languages.includes(tag) ||
          jobData.tools.includes(tag) ||
          jobData.role.includes(tag) ||
          jobData.level.includes(tag)
      ) ||
      // If there are no selected tags (length of selectedTags is zero), return the entire array and show all the items on the DOM
      selectedTags.length === 0
    );
  });

  return (
    <>
      <header className="header-background-image-container">
        <img className="header-background" />
      </header>

      <div className="body-container">
        {selectedTags.length > 0 ? (
          <section className="filter-container">
            <ul className="filter-inner-container">
              {selectedTags.map((tag) => {
                return (
                  <li key={tag} className="filter-items">
                    {tag}
                  </li>
                );
              })}
            </ul>
            <div className="button-container">
              <button className="clear-btn">Clear</button>
            </div>
          </section>
        ) : null}

        {Array.isArray(filteredJobs) ? (
          // If there is data and the data is an array than map
          filteredJobs.map((jobData) => {
            return (
              <JobCard
                jobData={jobData}
                key={jobData.id}
                handleSelectTag={handleSelectTags}
                selectedTags={selectedTags}
              />
            );
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
