import React, { useState } from "react"
import axios from 'axios'
import { Form, Button } from "react-bootstrap"
import TranslationPopupMenu from "./TranslationPopupMenu";
import saveIcon from '../assets/images/saveicon.svg'
import boldIcon from '../assets/images/bold.svg'
import italicIcon from '../assets/images/italic.svg'
import underlineIcon from '../assets/images/underline.svg'
import controls1Icon from '../assets/images/controls1.svg'
import controls2Icon from '../assets/images/controls2.svg'
import controls3Icon from '../assets/images/controls3.svg'
import controls4Icon from '../assets/images/controls4.svg'
import controls5Icon from '../assets/images/controls5.svg'
import controls6Icon from '../assets/images/controls6.svg'
import controlsdotsIcon from '../assets/images/controlsdots.svg'

const TranslationOutput = ({ data, index, active, toggleShowToast }) => {

  const [value, setValue] = useState(data)
  const saveData = () => {
    console.log(value)
    axios
      .put('/api/' + index, {content: value})
      .then((res) => {
        if (res.data) {
          toggleShowToast()
        }
      })
      .catch((err) => console.log(err))
  }

  const onChange = (event) => setValue(event.target.value)

  return (
    <div className="d-flex flex-column flex-1 p-2">
      {active && <TranslationPopupMenu text={'Danish'} />}
      <Form.Control
        className="form-textarea"
        as="textarea"
        rows={4}
        placeholder="Translation text"
        value={value}
        onChange={onChange}
        type="text"
      />
      {active && <div className={'d-flex justify-content-between m-2' + (active ? '' : 'd-none')}>
        <div className="ps-1 d-flex">
          <div>
            <Button className="" variant="outline-light border-secondary rounded-0"><img src={boldIcon} /></Button>
            <Button className="" variant="outline-light border-secondary rounded-0 border-start-0 border-end-0"><img src={italicIcon} /></Button>
            <Button className="" variant="outline-light border-secondary rounded-0"><img src={underlineIcon} /></Button>
          </div>
          <div className="ps-3">
            <Button className="" variant="outline-light border-secondary border-0"><img src={controls1Icon} /></Button>
            <Button className="" variant="outline-light border-secondary border-0"><img src={controls2Icon} /></Button>
            <Button className="" variant="outline-light border-secondary border-0"><img src={controls3Icon} /></Button>
            <Button className="" variant="outline-light border-secondary border-0"><img src={controls4Icon} /></Button>
            <Button className="" variant="outline-light border-secondary border-0"><img src={controls5Icon} /></Button>
            <Button className="" variant="outline-light border-secondary border-0"><img src={controls6Icon} /></Button>
          </div>
          <div>
            <Button className="" variant="outline-light border-secondary border-0"><img src={controlsdotsIcon} /></Button>
          </div>
          <div className="text-secondary d-flex align-items-center px-3">
            <small>69 / 2014</small>
          </div>
        </div>
        <Button
            className="btnFormSend px-4"
            variant="success"
            onClick={saveData}
          >
          <img src={saveIcon} className='pe-2' />Save
        </Button>
      </div>
      }
    </div>
  )
}
export default TranslationOutput
