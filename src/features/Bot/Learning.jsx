import PropTypes from 'prop-types';
import React from 'react';

import './Learning.css';

const LearningOptions = ({ actionProvider }) => {
  const options = [
    {
      text: 'Javascript',
      handler: actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: 'Data visualization', handler: () => {}, id: 2 },
    { text: 'APIs', handler: () => {}, id: 3 },
    { text: 'Security', handler: () => {}, id: 4 },
    { text: 'Interview prep', handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      type="button"
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

LearningOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleJavascriptList: PropTypes.func,
  }).isRequired,
};

export default LearningOptions;
