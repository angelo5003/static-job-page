import "./JobCardStyle.css";
import { jobDataPropTypes } from "../../utils/PropValidation/PropValidation";

const JobCard = ({ jobData }) => {
  return (
    <section className="card-outer-container">
      <div className="card-container">
        <div className="card-company-logo-container">
          <img
            src={jobData.logo}
            alt="company-logo"
            className="card-company-logo"
          />
        </div>
        <section className="card-inner-container">
          <ul className="card-header-info">
            <li className="card-company-name">{jobData.company}</li>
            <li className={jobData.new ? "card-new-tag" : null}>
              {jobData.new ? "new!".toUpperCase() : ""}
            </li>
            <li className={jobData.featured ? "card-featured-tag" : null}>
              {jobData.featured ? "featured".toUpperCase() : ""}
            </li>
          </ul>
          <p className="card-job-position">{jobData.position}</p>
          <ul className="card-job-details">
            <li className="job-details">{jobData.postedAt}</li>
            <li className="job-details">{jobData.contract}</li>
            <li className="job-details">{jobData.location}</li>
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
    </section>
  );
};

JobCard.propTypes = jobDataPropTypes;

export default JobCard;
