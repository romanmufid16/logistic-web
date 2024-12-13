import React from "react";
import PropTypes from "prop-types";

const ReasonDesc = (props) => {
  return (
    <>
      <div className="flex gap-2 mb-3">
        <span className="text-xl">{props.title}</span>
        <span className="text-sm text-secondary">{props.num}</span>
      </div>
      <p className="text-text mb-3">
        {props.desc}
      </p>
      <div className="flex items-center text-secondary mb-3">
        •
        <hr className="border w-full border-secondary" />•
      </div>
    </>
  );
};

ReasonDesc.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ReasonDesc;
