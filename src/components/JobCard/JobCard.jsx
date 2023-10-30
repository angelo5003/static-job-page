import "./JobCardStyle.css";
import { jobDataPropTypes } from "../../utils/PropValidation/PropValidation";

const JobCard = ({ jobData }) => {
  return (
    <div className="card-outer-container">
      <div className="card-company-logo-container">
        <img src={jobData.logo} alt="company-logo" />
      </div>
      <section>
        <ul className="card-header-info">
          <li>{jobData.company}</li>
          <li>{jobData.new}</li>
          <li>{jobData.featured}</li>
        </ul>
        <p>{jobData.position}</p>
        <ul className="card-job-details">
          <li>{jobData.postedAt}</li>
          <li>{jobData.contract}</li>
          <li>{jobData.location}</li>
        </ul>
        <hr />
        <ul className="card-job-work-info">
          <li>{jobData.role}</li>
          <li>{jobData.level}</li>
          <li>{jobData.languages}</li>
          <li>{jobData.tools}</li>
        </ul>
      </section>
    </div>
  );
};

JobCard.propTypes = jobDataPropTypes;

export default JobCard;
