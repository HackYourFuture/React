import React from 'react';
import cancel from '../cancel.svg'
import '../App.css'


function CloseButton({handleClose, id}) {
	return <img className='close' onClick={()=> handleClose(id)} src={cancel} alt='close'/>
}
export default CloseButton;
