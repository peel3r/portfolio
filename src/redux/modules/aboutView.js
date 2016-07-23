import { createAction, handleActions } from 'redux-actions'

/**
 * Constants
 */

export const ABOUT_TITLE_GET = 'ABOUT_TITLE_GET'
export const ABOUT_INTRO_TEXT_GET = 'ABOUT_INTRO_TEXT_GET'

/**
 * Actions
 */

export const aboutTitleGet = createAction(ABOUT_TITLE_GET)
export const aboutIntroTextGet = createAction(ABOUT_INTRO_TEXT_GET)

export const actions = {
  aboutTitleGet,
  aboutIntroTextGet
}

const initialState = {
  about: {
    title: 'About Me',
    introText: "I'm a web developer based in UK. I solve interesting problems using innovative web technologies. I develop web applications using React Stack."
  },
  image: 'https://images.unsplash.com/photo-1461295025362-7547f63dbaea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9c3c96e59ca6b6e66358b9bc2b8ad815'
}

/**
 * Reducer
 */

export const aboutView = handleActions({
  ABOUT_TITLE_GET: (state) => state,

  ABOUT_INTRO_TEXT_GET: (state) => state
}, initialState)
