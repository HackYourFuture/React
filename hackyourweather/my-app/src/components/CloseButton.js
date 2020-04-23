import React from 'react';
import cancel from '../cancel.svg'
import '../App.css'


function CloseButton({handleClose}) {
	return <img className='close' onClick={handleClose} src={cancel} alt='close'/>
}
export default CloseButton;
