import React from 'react';

export default function CodeSection(){
  return (
    <div className='content-section alternate-section-background'  id='section-code'>
      <div className='content-header'>code</div>
      <div className='content-body'>
        <p>
          <b>Twilio Demo Platform</b> is a <a href='https://github.com/kristajg/kg-demo-app' target='_blank' rel="noreferrer">React frontend</a> &#38; <a href='https://github.com/kristajg/kg-demo-api' target='_blank' rel="noreferrer">Node + Express</a> project showcasing core communications products: SMS, voice, 2FA.
        </p>
        <p>
          <a href='https://github.com/kristajg/pburgh-phaser' target='_blank' rel="noreferrer">Pigeonburgh</a>, a <b>top-down RPG game</b> in progress built with Phaser.io. Includes friendship, dystopian future, [pigeons].
        </p>
        <p>
          <a href='https://github.com/kristajg/cozy-holiday' target='_blank' rel="noreferrer">Cozy Holiday</a> is a react <b>npm package</b>. Features holiday themed pixel art for websites.
        </p>
        <p>
          <a href='https://github.com/kristajg/react-aws-audio-transcription' target='_blank' rel="noreferrer">Real time audio transcription</a> using AWS Transcribe, React.
        </p>
      </div>
    </div> 
  )
}
