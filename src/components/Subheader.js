import React, { Component } from 'react';

import Button from './Button';

const copyPriority = [
  'Programmer',
  'Solutions Engineer',
];

const copySecondary = [
  'Writer',
  'Speaker',
  'Standard Nerd',
  'Cyclist',
  'Wannabe Pixel Artist',
  'Multivitamin Taker',
  'Weight Lifter',
  'Proud Zune Owner',
];

class Subheader extends Component {
  state = {
    currentCopyIndex: 0,
    copyList: copyPriority,
  }

  componentDidMount () {
    this.randomizeCopy();
    // this.updateCopyIndex();
  }

  shuffle = array => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
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
      if (currentCopyIndex !== copyList.length) {
        newCopyIndex = currentCopyIndex + 1;
      }
      this.setState({ currentCopyIndex: newCopyIndex });
    }, 2000);
  }

  render () {
    const { copyList, currentCopyIndex } = this.state;
    return (
      <div className='subheader-container'>
        <div className='subheader-copy'>
          <h3>I am a {copyList[currentCopyIndex]}</h3>
        </div>
        <div className='subheader-button-container'>
          <ul>
            <li>
              <Button text='About' />
            </li>
            <li>
              <Button text='Code' />
            </li>
            <li>
              <Button text='Writing' />
            </li>
            <li>
              <Button text='Speaking' />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Subheader;

