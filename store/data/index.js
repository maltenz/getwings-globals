import {
  SET_DATA_CURRENT_THEME_MEDITATIONS,
  SET_DATA_CURRENT_THEME,
  SET_DATA_THEMES,
  SET_DATA_ALL_WINGS,
  SET_DATA_CURRENT_WING,
  SET_DATA_CATEGORIES,
} from './types'

const initialState = {
  currentTheme: {},
  currentThemeMeditations: {},
  themes: {},
  wings: {},
  currentWing: {},
  categories: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_CURRENT_THEME_MEDITATIONS:
      return {
        ...state,
        currentThemeMeditations: {
          ...action.payload,
        },
      }
    case SET_DATA_THEMES:
      return {
        ...state,
        themes: {
          ...action.payload,
        },
      }
    case SET_DATA_CURRENT_THEME:
      return {
        ...state,
        currentTheme: {
          ...action.payload,
        },
      }
    case SET_DATA_ALL_WINGS:
      return {
        ...state,
        wings: {
          ...action.payload,
        },
      }
    case SET_DATA_CURRENT_WING:
      return {
        ...state,
        currentWing: {
          ...action.payload,
        },
      }
    case SET_DATA_CATEGORIES:
      return {
        ...state,
        categories: {
          ...action.payload,
        },
      }
    default:
      return state
  }
}
