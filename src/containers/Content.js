import React, { Component } from 'react';

// Components
import AboutSection from '../components/AboutSection';
import CodeSection from '../components/CodeSection';
import WritingSection from '../components/WritingSection';
import SpeakingSection from '../components/SpeakingSection';

class Content extends Component {
  render () {
    return (
      <div className='section-container'>
        <AboutSection />
        <CodeSection />
        <WritingSection />
        <SpeakingSection />
      </div>
    );
  }
}

export default Content;

