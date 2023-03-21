import React from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={"Please leave feedback"}>
      {Object.keys(options).map((elem, i) => (
        <button
          key={`btn-${i}`}
          onClick={() => onLeaveFeedback(`${elem}`)}
          type="button"
          name={elem}
          className="button__stat"
        >
          {elem}
        </button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
