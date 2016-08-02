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
      introText: '(team of 3 developers)',
      description: '1.Survey Tool  Responsible for design development and deployment 2. Dashboard feature Responsible for design development and deployment 3. Reception app Responsible for design development, deployment and integration with main Nevaya app',
      technologies: 'Ruby on Rails, jQuery, JavaScript, Html, Css, Sass, DataTable, Capistrano,Git, Github, AWS, ULM diagrams, software engineering documentation, React, Babel, Webpack, Expect, Mocha, JSON, npm, FireBase, Moment.js'
    },
    {
      title: 'Sky Saga',
      link: 'http://www.skysaga.com/en',
      image: 'https://imgur.com/SoGbJ9r.png',
      introText: '(team of 2 web developers, 3 data analysts, 2 dev ops, and publishing team)',
      description: "1. User profile feature Responsible for user profile design, development and deployment, tests first approach(TDD) and integration with Skysaga game and Discours service",
      technologies: "Ruby on Rails, Rspec, Cucumber, Javascript, jQuery, JSON, Html, Css, Sass, MySQL , PostgreSQL, Moment.js, Capistrano, Git, API development"

    }
  ],
  portfolio2: [
    {
      title: 'Fibro Trust',
      link: 'http://fibrotrust.org/',
      image: 'https://imgur.com/OGZu3VX.png',
      introText: '(team of one)',
      description: "1. Time tracker for staff members Responsible for design development and deployment. 2.Search engine for fibromyalgia Responsible for design development and deployment",
      technologies: "Wordpress, Ruby on Rails, JavaScript, Css, Html, jQuery, Heroku, MySQL, Git, Github VPS, Apache Solr, Apache Nutch, BlackNight gem,  AWS, PostgreSQL"
    },
    {
      title: 'Pain Manager',
      link: 'http://boiling-oasis-7267.herokuapp.com/',
      image: 'https://imgur.com/yYG5lqx.png',
      introText: 'Pain Manager App',
      description: "Chronic pain diary to help in pain management. Responsible for design development and deployment",
      technologies: "Ruby on Rails, JavaScript, jQuery, Css, Html, Sass, Rspec, AWS(EC2, S3, Route 53), Capistrano, MySQL "
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
