import React, { useState } from 'react';
import TranslationControls from './FullBottomComponent/TranslationControls';
import TranslationLeft from './TranslationLeft';
import TranslationRight from './TranslationRight';
import TextInfo from './TextInfo';

const TranslationItem = ({ data, index, symbols, active, toggleShowToast }) => {
  const [showSuggestions, setShowSuggestions] = useState(true);
  return (
    <>
      <td>
        <div className="counter__tooltip">
          <p>{ index + 1 }</p>
        </div>
      </td>
      <td>
        <div className="full__translation">
          <div className="full__top">
            <div className="full__top-left">
              <TranslationLeft data={data.translation_text.input} active={active} index={index} />
              <TranslationRight data={data.translation_text.output} active={active} index={index} />
              <div className="full__left--right"></div>
            </div>
            <div className="full__top--right"></div>
          </div>
          <div className="full__bottom">
            <TranslationControls index={index} toggleShowToast={toggleShowToast} />
            {showSuggestions && <div className="translate__details details__active">
              <a href="" onClick={(e) => { e.preventDefault(); setShowSuggestions(false) }}>Show less</a>
            </div>}
            {!showSuggestions && <div className="translate__details">
              <a href="" onClick={(e) => { e.preventDefault(); setShowSuggestions(true) }}>Show more</a>
            </div>}
            {active && showSuggestions && <TextInfo data={data} symbols={symbols} />}
          </div>
        </div>
      </td>
    </>
  );
};

export default TranslationItem;