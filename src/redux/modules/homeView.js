import { createAction, handleActions } from 'redux-actions'
/**
 * Constants
 */
export const HEADER_IMAGE_GET = 'HEADER_IMAGE_GET'
export const HEADER_TEXT_GET = 'HEADER_TEXT_GET'

/**
 * Actions only export const is send as props while those not exported are local action to be use by thunk action
 */
export const headerImageGet = createAction(HEADER_IMAGE_GET)
export const headerTextGet = createAction(HEADER_TEXT_GET)

export const actions = {
  headerImageGet,
  headerTextGet
}

/**
 * Reducer
 */
const initialState = {
  headerImage: 'https://images.unsplash.com/photo-1453475250267-163ff185e88e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c7f88b0371f15fb21b2dd9b8f30530df',
  headerText: "peel3r",
  headerParagraph: "web developer",
  portfolio: [
    {
      title: 'Nevaya',
      link: 'http://www.nevaya.co.uk',
      image: 'https://imgur.com/2IPAsFI.png',
      introText: 'I comaintained (large 10 y old codebase) main 3 applications Nevaya TV, Nevaya Network, Nevaya Support.',
      description: "	•	Api for reception services and a front end app ( Nevaya Reception) to consume this api, using Ruby on Rails, React, jQuery, Babel, Webpack, Gulp. It’s a very simple app allowing reception staff to look over Hotel rooms, check in and out guests and read/ send  rooms messages.•	Dashboard feature for the nevaya support app supporting management with various data nsight like open closed tickets ratios, alerts on overdue items, sorting and making queries, using Rails, Ruby, jQuery, Datatable •	Survey app for field engineers to asses Hotel network, using Rails, Datatable, Editable, Javascript, jQuery.",
      technologies: "Ruby, Ruby on Rails, jQuery, Backbone, React, JS, Moment.js, Datatable, jQuery UI"

    },
    {
      title: 'Sky Saga',
      link: 'http://www.skysaga.com/en',
      image: 'https://imgur.com/SoGbJ9r.png',
      introText: 'Developed user profile, worked on Skysaga website',
      description: "I developed User Profile functionality for Radiant Worlds main website. Using SkySaga game, Discourse forum, Facebook, Twitter API’s I exposed  data ( User Avatar, Time in Game, Rankings, Forum posts…) on User Profile",
      technologies: "Ruby, Ruby on Rails, jQuery, Backbone, React, JS, Haml, Handlebars, Sass, Moment.js"

    }
  ],
  portfolio2: [
    {
      title: 'Fibro Trust',
      link: 'http://fibrotrust.org/',
      image: 'https://imgur.com/OGZu3VX.png',
      introText: 'Mobile optimized Fibromyalgia Trust website',
      description: "Build with Wordpress, connected to Twitter, Facebook, Yahoo Pipes",
      technologies: "Wordpress, Html, Css, JS, jQuery, VPS"
    },
    {
      title: 'Pain Manager',
      link: 'http://boiling-oasis-7267.herokuapp.com/',
      image: 'https://imgur.com/yYG5lqx.png',
      introText: 'Pain Manager App',
      description: "Pain Manager application is designed to help people witch chronic pain to manage theirs condition. User can record their daily pain statistic. Before going to a GP user can print pain statistic and show them during the visit.",
      technologies: "Ruby, Ruby on Rails, jQuery, JS, Heroku"
    }

  ],
  portfolio3: [

    {
      title: 'Arnold Clark Photo Search app challenge',
      link: 'http://agile-shore-6623.herokuapp.com/',
      image: 'https://imgur.com/pi5xAZg.png',
      introText: 'Arnold Clark’s website that takes images of used cars from a caching server',
      description: "Build with Ruby on Rails, javaScript, jQuery, published on Heroku"
    },
    {
      title: 'Conwey’s classic Game of Life without Canvas',
      link: 'http://peel3r.github.io/2015/05/12/conweys-classic-game-of-life-without-canvas/',
      image: 'https://imgur.com/OZvUh7Q.png',
      introText: 'Click on fields to make them alive according to the game rules',
      description: " Any live cell with fewer than two live neighbours dies, as if caused by under-population. Any live cell with two or three live neighbours lives on to the next generation. Any live cell with more than three live neighbours dies, as if by overcrowding. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."
    }
  ]
}

export const homeView = handleActions({
  HEADER_TEXT_GET: (state) => Object.assign({}, state, {
    headerText: state.headerText
  }),

  HEADER_IMAGE_GET: (state) => Object.assign({}, state, {
    headerImage: state.headerImage
  })
}, initialState)
