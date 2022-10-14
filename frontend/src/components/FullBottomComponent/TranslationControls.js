import React, { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux'
import axios from 'axios'

import button1Icon from '../../assets/images/button1.svg'
import button2Icon from '../../assets/images/button2.svg'
import button3Icon from '../../assets/images/button3.svg'
import controls1Icon from '../../assets/images/controls1.svg'
import controls2Icon from '../../assets/images/controls2.svg'
import controls3Icon from '../../assets/images/controls3.svg'
import controls4Icon from '../../assets/images/controls4.svg'
import controls5Icon from '../../assets/images/controls5.svg'
import controls6Icon from '../../assets/images/controls6.svg'
import controlsdotsIcon from '../../assets/images/controlsdots.svg'
import vertifiedIcon from '../../assets/images/vertified.svg'
import saveIcon from '../../assets/images/saveicon.svg'
import dropdownarrowIcon from '../../assets/images/dropdownarrow.svg'
import iconsave1Icon from '../../assets/images/iconsave1.svg'
import iconsave2Icon from '../../assets/images/iconsave2.svg'
import iconsave3Icon from '../../assets/images/iconsave3.svg'

const selectTranslationItem = (state) => state.translationItem
const TranslationControls = ({index, toggleShowToast}) => {

  const controlsDropRef = useRef(null);
  const translationItem = useSelector(selectTranslationItem)
  const [showControlsDrop, setShowControlsDrop] = useState(false)

  const handleSave = () => {
    console.log();
    axios
      .put('/api/' + index, {content: translationItem.text})
      .then((res) => {
        if (res.data) {
          toggleShowToast()
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (controlsDropRef.current && !controlsDropRef.current.contains(event.target)) {
        setShowControlsDrop(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [controlsDropRef]);

  return (
    <div className="translate__controls">
      <div className="flex-1"></div>
      <div className="flex-1 ps-3 d-flex justify-content-between">
        <div className="controls__left">
          <div className="controls__buttons--text">
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}><img src={button1Icon} alt="button" /></a>
              <div className="tag__float">
                <p>Bold text format <span>Ctrl+B</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}><img src={button2Icon} alt="button" /></a>
              <div className="tag__float">
                <p>Italic text format <span>Ctrl+i</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}><img src={button3Icon} alt="button" /></a>
              <div className="tag__float">
                <p>Underline text format <span>Ctrl+U</span></p>
              </div>
            </div>
          </div>
          <div className="controls__small">
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={controls1Icon} alt="" />
              </a>
              <div className="tag__float">
                <p>Remove formating <span>F7</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={controls2Icon} alt="" />
              </a>
              <div className="tag__float">
                <p>Insert tag <span>F8</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={controls3Icon} alt="" />
              </a>
              <div className="tag__float">
                <p>Copy source to target <span>F10</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={controls4Icon} alt="" />
              </a>
              <div className="tag__float">
                <p>Remove tags <span>F6</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" onClick={(e) => e.preventDefault()}>
                <img src={controls5Icon} alt="" />
              </a>
              <div className="tag__float">
                <p>Undo edit <span>Ctrl + Z</span></p>
              </div>
            </div>
            <div className="small__tag">
              <a href="" className="disabled__button" onClick={(e) => e.preventDefault()}>
                <img src={controls6Icon} alt="" />
              </a>
              <div className="tag__float">
                <p>Redo edit <span>Ctrl+Shift+Z</span></p>
              </div>
            </div>
          </div>
          <div className="controls__more">
            <a href="" data-preview="controls1" onClick={(e) => e.preventDefault()}>
              <img src={controlsdotsIcon} alt="controls" />
            </a>
          </div>
          <div className="controls__words">
            <p>69/1024</p>
          </div>
        </div>
        <div className="controls__right">
          <div className="verified__info">
            <span><img src={vertifiedIcon} alt="verified" /> 1</span>
          </div>
          <div className="controls__save">
            <div className="controls__save--button">
              <a href="" onClick={(e) => { e.preventDefault(); handleSave()}}><img src={saveIcon} alt="saveicon" /> Save</a>
              <a href="" className={"droppable__controls" + (showControlsDrop ? 'active__controls' : '')} onClick={(e) => { e.preventDefault(); setShowControlsDrop(true)}}><img src={dropdownarrowIcon} alt="" /></a>
            </div>
            {showControlsDrop && <div className="controls__drop" ref={controlsDropRef}>
              <ul>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); handleSave(); setShowControlsDrop(false)}}>
                    <span className="controls__info"><span><img src={iconsave1Icon}
                      alt="iconsave" /></span> Save</span>
                    <span className="hotkey__controls">Ctrl + Enter</span>
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); setShowControlsDrop(false)}}>
                    <span className="controls__info"><span><img src={iconsave2Icon}
                      alt="iconsave" /></span> Save without TM</span>
                    <span className="hotkey__controls">Alt + Enter</span>
                  </a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); setShowControlsDrop(false)}}>
                    <span className="controls__info"><span><img src={iconsave3Icon}
                      alt="iconsave" /></span> Save as draft</span>
                    <span className="hotkey__controls">Shift + Enter</span>
                  </a>
                </li>
              </ul>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TranslationControls;