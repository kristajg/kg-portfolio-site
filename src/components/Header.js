import React, { Component } from 'react';

import Button from './Button';

const copyPriority = [
  'a writer',
  // 'a game developer',
];

const copySecondary = [
  'a writer',
  'a game developer',
  'a programmer',
  'a bird enthusiast',
  'reading lore',
  'touring the facility and picking up slack',
  'drawing bean-shaped humanoids',
  'reminiscing about flip phones',
  'looking at the weather app',
  'overwhelmed by possibility',
  'trying to enjoy life as much as t-pain does',
  're-rolling a night elf druid for the 100th time',
  'forgetting important numbers',
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
        <div className='main-copy'>
          <h2>hi, I'm <span className='name-text'>Krista</span></h2>
        </div>
        <div className='subheader-container'>
          <div className='subheader-copy'>
            <div className='non-dynamic'>
              I am
            </div>
            {copyList[currentCopyIndex]}
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

