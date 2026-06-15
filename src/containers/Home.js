import React, { Component } from 'react';

// Components
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import WritingSection from '../components/WritingSection';
import SpeakingSection from '../components/SpeakingSection';

class Content extends Component {
  render () {
    return (
      <>
        <Header />
        <div>
          <AboutSection />
          <ProjectSection />
          <WritingSection />
          <SpeakingSection />
        </div>
      </>
    );
  }
}

export default Content;

