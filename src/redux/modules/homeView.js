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
  headerParagraph: "web developer"
  // portfolio: [
    // {
    //   title: 'Escape Room SA',
    //   link: 'http://escaperoomsa.com.au/',
    //   image: 'http://i.imgur.com/HQmLQbA.png',
    //   introText: 'A mobile optimizes custom design business website',
    //   description: "I built this website focusing on accessibility. It had a responsive design and was optimized to load  under three seconds. It featured mailing list sign up and inbuilt contact form."
    // },
    // {
    //   title: 'Pomo Time',
    //   link: 'pomoTime',
    //   image: 'http://i.imgur.com/vvEZbX8.png',
    //   introText: 'A simple pomodoro timer built with React.js',
    //   description: "I built this application as a project for FreeCodeCamp. The focus of this app was on simplicity and displaying useful metric to keep the user motivated."
    // }
  // ]
}

export const homeView = handleActions({
  HEADER_TEXT_GET: (state) => Object.assign({}, state, {
    headerText: state.headerText
  }),

  HEADER_IMAGE_GET: (state) => Object.assign({}, state, {
    headerImage: state.headerImage
  })
}, initialState)
