import React, { Component, PropTypes } from 'react'
import sty from './Portfolio.scss'
import CardV2 from 'components/CardV2/CardV2'

const projects = [
  {
    name: 'Quote Generator',
    description: 'Tweet and Share.',
    image: 'https://i.imgur.com/l6F7lQQ.png',
    link: 'quoteGenerator'
  },
  {
    name: 'Weather App',
    description: '',
    image: 'https://i.imgur.com/ZgfiZ7H.png',
    link: 'weather'
  },
  {
    name: 'Wikipedia Search',
    description: "Search Wikipedia",
    image: 'https://i.imgur.com/vMmehco.png  ',
    link: 'wikipedia'
  },
  {
    name: 'Youtube Search',
    description: "Search Wikipedia",
    image: 'https://i.imgur.com/vMmehco.png  ',
    link: 'youtube'
  },
  {
    name: 'Twitch Streamers',
    description: 'Online status of Twitch streamers.',
    image: 'https://i.imgur.com/GqTIjmh.png',
    link: 'twitch'
  },
  {
    name: 'Calculator',
    description: 'A simple calculator.',
    image: 'https://i.imgur.com/9u6MNrd.png',
    link: 'calculator'
  },
  {
    name: 'PomoTime',
    description: 'Pomodoro Timer',
    image: 'https://i.imgur.com/aRUaT1B.png ',
    link: 'pomoTime'
  },
  {
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe && artificial intelligence',
    image: 'https://i.imgur.com/I1Hsu5f.png',
    link: 'TicTacToe'
  },
  {
    name: 'Simon Game',
    description: 'A simple Simon Game',
    image: 'https://i.imgur.com/WgIGO0R.png',
    link: 'SimonGame'
  }
]

export default class Portfolio extends Component {
  static propTypes = {
    projects: PropTypes.object
  };

  render() {
    return (
      <div className={sty.container}>
        <h1>Utilities</h1>
        <div className={sty.cards}>
          {projects.map(item => {
            return <CardV2
              image={item.image}
              link={item.link}
              title={item.name}
              text={item.description}
              externalLink={item.externalLink ? item.externalLink : null}
            />
          })}
        </div>
      </div>
    )
  }
}
