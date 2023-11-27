import React from 'react';

export default function Button({ text, sectionId, onClick }){
  return (
    <div className='button' id={sectionId} onClick={e => onClick(e)}>
      {text}
    </div> 
  )
}
