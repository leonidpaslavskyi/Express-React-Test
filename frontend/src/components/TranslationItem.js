import React, { useState } from 'react';
import TextInfo from './TextInfo';
import TranslationInput from './TranslationInput';
import TranslationOutput from './TranslationOutput';

const TranslationItem = ({ data, index, symbols, active, toggleShowToast }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <div className={'d-flex flex-row border-bottom ' + (active ? '' : 'bg-light-grey')}>
      <div className={'p-3 ' + (active ? 'bg-light-green' : '')}>
        <span className=' py-2 px-4 bg-green rounded item-index'>{ index + 1 }</span>
      </div>
      <div className='d-flex flex-column flex-grow-1 border-start'>
        <div className='translation-body d-flex'>
          <TranslationInput data={data.translation_text.input} active={active} />
          <TranslationOutput data={data.translation_text.output} index={index} active={active} toggleShowToast={toggleShowToast} />
        </div>
        {active && <div className='d-flex px-3'>
          {showSuggestions && <a href="#" className='text-decoration-none primary-text-color' onClick={() => setShowSuggestions(false)}><small>Show less</small></a>}
          {!showSuggestions && <a href="#" className='text-decoration-none primary-text-color' onClick={() => setShowSuggestions(true)}><small>Show more</small></a>}
        </div>
        }
        {active && showSuggestions && <div className='translate-suggestions'>
          <TextInfo data={data} symbols={symbols} />
        </div>}
      </div>
    </div>
  );
};

export default TranslationItem;