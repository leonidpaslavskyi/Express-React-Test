import { useRef, useEffect, useState } from 'react'
import spellingIcon from '../assets/images/spelling.svg'
import commentgreenIcon from '../assets/images/commentgreen.svg'
import ellipsesIcon from '../assets/images/ellipses.svg'

function TranslationPopupMenu({ text, index }) {
  
  const langListRef = useRef(null);
  const commentLangRef = useRef(null);
  const [showLangList, setShowLangList] = useState(false)
  const [showCommentLang, setShowCommentLang] = useState(false)
  
  const handleLangComment = (e) => {
    e.preventDefault()
    setShowLangList(false)
    setShowCommentLang(true)
  }
  
  const handleLangList = (e) => {
    e.preventDefault()
    setShowLangList(true)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (langListRef.current && !langListRef.current.contains(event.target)) {
        setShowLangList(false);
      }
      if (commentLangRef.current && !commentLangRef.current.contains(event.target)) {
        setShowCommentLang(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langListRef, commentLangRef]);

  return (
    <>
      <div className="lang__info">
        <span>{ text }</span>
        <div className="more__lang position-relative">
          <a href="" className={"more__button " + (showLangList ? 'active__lang--button' : '')} onClick={handleLangList}>
            <img src={ellipsesIcon} alt="ellipses" />
          </a>
          {showLangList && <div className="lang__list top-0 start-50" ref={langListRef}>
            <ul>
              <li>
                <a href="" onClick={(e) => e.preventDefault()}>
                  <div className="list__image">
                    <img src={spellingIcon} alt="spelling" />
                  </div>
                  <div className="list__info">
                    <p> Check spelling</p>
                  </div>
                  <span className="hotkeys__float">Ctrl+J</span>
                </a>
              </li>
              <li>
                <a href="" className="lang__comment" onClick={handleLangComment}>
                  <div className="list__image">
                    <img src={commentgreenIcon} alt="spelling" />
                  </div>
                  <div className="list__info">
                    <p> Add comment</p>
                    <span> Mark text first</span>
                  </div>
                  <span className="hotkeys__float">Ctrl+K</span>
                </a>
              </li>
            </ul>
          </div>
          }
          {showCommentLang && <div className={"comment__lang top-0 " + (text !== 'Danish' ? 'start-50 ms-n20' : '')} ref={commentLangRef}>
            <form action="">
              <div className="comment__field">
                <input type="text" placeholder="Type comment..." />
              </div>
              <div className="comment__list">
                <p>For whom comment is?</p>
                <div className="list__comment--inner">
                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment1">Justas J. <span className="spacer__lang"></span><span
                        className="comment__status">Project manager</span></label>
                    </div>
                  </div>

                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment2">Lukas B. <span className="spacer__lang"></span><span
                        className="comment__status">Translator</span></label>
                    </div>
                  </div>

                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment3">Dalia M.<span className="spacer__lang"></span><span
                        className="comment__status">Proofreader</span></label>
                    </div>
                  </div>

                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment4">Ausra D.<span className="spacer__lang"></span><span
                        className="comment__status">Creative proofreader</span></label>
                    </div>
                  </div>



                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment5">Dalia M.<span className="spacer__lang"></span><span
                        className="comment__status">Proofreader</span></label>
                    </div>
                  </div>

                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment6">Ausra D.<span className="spacer__lang"></span><span
                        className="comment__status">Creative proofreader</span></label>
                    </div>
                  </div>


                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment7">Dalia M.<span className="spacer__lang"></span><span
                        className="comment__status">Proofreader</span></label>
                    </div>
                  </div>

                  <div className="elem__comment--lang">
                    <div>
                      <input className="styled-checkbox" type="checkbox" />
                      <label htmlFor="comment8">Ausra D.<span className="spacer__lang"></span><span
                        className="comment__status">Creative proofreader</span></label>
                    </div>
                  </div>
                </div>
                <div className="comment__controls">
                  <input type="submit" value="Comment" />
                  <a href="" onClick={(e) => e.preventDefault()}>Cancel</a>
                </div>
              </div>
            </form>
          </div>}
        </div>
      </div>
    </>
  );
}

export default TranslationPopupMenu;