import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import spellingIcon from '../assets/images/spelling.svg'
import commentgreenIcon from '../assets/images/commentgreen.svg'

function MenuAlignEndExample({text}) {
  return (
    <div className='d-flex flex-row'>
      <span className='px-3 text-secondary'><small>{ text }</small></span>
      <DropdownButton
        align="end"
        title={<span className='text-center dropdown-btn'>...</span>}
        id="dropdown-menu-align-end"
      >
        <Dropdown.Item eventKey="1" className='d-flex flex-row justify-content-between primary-text-color fw-bold'><span className='pe-3'><img src={spellingIcon} className='pe-2' />Check spelling</span><span className='bg-light rounded px-2 text-black fw-light'><small>Ctrl+J</small></span></Dropdown.Item>
        <Dropdown.Item eventKey="2" className='d-flex flex-row justify-content-between primary-text-color fw-bold'><span className='pe-3'><img src={commentgreenIcon} className='pe-2' />Add comment</span><span className='bg-light rounded px-2 text-black fw-light'><small>Ctrl+K</small></span></Dropdown.Item>
      </DropdownButton>
    </div>
    
  );
}

export default MenuAlignEndExample;