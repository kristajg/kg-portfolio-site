import React, { Component } from 'react';

import Button from './Button';

const copyPriority = [
  'an engineer',
  'a solutions architect',
];

const copySecondary = [
  'an engineer',
  'a solutions architect',
  'a writer',
  'a casual cyclist',
  'a Dead Mall Series Fan',
  'a proud zune owner',
  'a bird enthusiast',
  'a lifelong learner',
  'a pixel art enjoyer',
  'trying to walk 10k steps per day',
  'reminiscing about flip phones',
  'trying my best',
  'looking at the weather app',
  'overwhelmed by possibility',
];

class Header extends Component {
  state = {
    currentCopyIndex: 0,
    copyList: copyPriority,
  }

  componentDidMount () {
    this.randomizeCopy();
    this.updateCopyIndex();
  }

  shuffle = array => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
    return array;
  }

  randomizeCopy = () => {
    let shuffled = this.shuffle(copySecondary);
    let newArray = copyPriority.concat(shuffled);
    this.setState({ copyList: newArray });
  }

  updateCopyIndex = () => {
    setInterval(() => {
      const { currentCopyIndex, copyList } = this.state;
      let newCopyIndex = 0;
      let len = copyList.length - 1;
      if (currentCopyIndex !== len) {
        newCopyIndex = currentCopyIndex + 1;
      }
      this.setState({ currentCopyIndex: newCopyIndex });
    }, 2400);
  }

  scrollToContentSection = e => {
    e.preventDefault();
    const section = document.querySelector(`#section-${e.target.id}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render () {
    const { copyList, currentCopyIndex } = this.state;
    return (
      <header className='app-header'>
        <h2>hi, I'm <span className='name-text'>Krista Goralczyk</span></h2>
        <div className='subheader-container'>
          <div className='subheader-copy'>
            <div className='subheader-copy-full-text'>I am <span className='subheader-copy-dynamic-text' >{copyList[currentCopyIndex]}</span></div>
          </div>
          <div className='subheader-button-container'>
            <ul>
              <li>
                <Button text='About 🌱' sectionId='about' onClick={this.scrollToContentSection} />
              </li>
              <li>
                <Button text='Code 💻' sectionId='code' onClick={this.scrollToContentSection} />
              </li>
              <li>
                <Button text='Writing 📖' sectionId='writing' onClick={this.scrollToContentSection} />
              </li>
              <li>
                <Button text='Speaking 🎤' sectionId='speaking' onClick={this.scrollToContentSection} />
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

