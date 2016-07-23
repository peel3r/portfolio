import React, { Component, PropTypes } from 'react'
import sty from './Portfolio.scss'
import CardV2 from 'components/CardV2/CardV2'

const projects = [
  {
    name: 'Quote Generator',
    description: 'Tweet and Share.',
    image: 'http://i.imgur.com/NTVKdeT.png',
    link: 'quoteGenerator'
  },
  {
    name: 'Weather App',
    description: '',
    image: 'http://i.imgur.com/gpOj6rf.png',
    link: 'weather'
  },
  {
    name: 'Wikipedia Search',
    description: "Search Wikipedia",
    image: 'http://i.imgur.com/yVYtLa3.png',
    link: 'wikipedia'
  },
  {
    name: 'Twitch Streamers',
    description: 'Online status of Twitch streamers.',
    image: 'http://i.imgur.com/14LOigT.png',
    link: 'twitch'
  },
  {
    name: 'Calculator',
    description: 'A simple calculator.',
    image: 'http://i.imgur.com/GUR45JT.png',
    link: 'calculator'
  },
  {
    name: 'PomoTime',
    description: 'Pomodoro Timer',
    image: 'http://i.imgur.com/vvEZbX8.png',
    link: 'pomoTime'
  },
  {
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe && artificial intelligence',
    image: 'http://i.imgur.com/WStyuor.png',
    link: 'TicTacToe'
  },
  {
    name: 'Simon Game',
    description: 'A simple Simon Game',
    image: 'http://i.imgur.com/kgz9g7o.png',
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
