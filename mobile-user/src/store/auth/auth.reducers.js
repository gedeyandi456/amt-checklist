import {
  USER_LOGIN_LOADING,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from './auth.actionType'

const initialState = {
  loading: false,
  error: false,
  userLogin: false,
  token: null,
  userProfile: null,
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case USER_LOGIN_ERROR:
    console.log('redurces USER_LOGIN_ERROR', action.payload)
      return {
        ...state,
        loading: false,
        error: true,
        userLogin: false,
      }
    case USER_LOGIN_SUCCESS:
      console.log('redurces USER_LOGIN_SUCCESS', action.payload)
      return {
        ...state,
        loading: false,
        error: false,
        userLogin: true,
        token: null,
        userProfile: null,
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        userLogin: false,
      }
    default:
      return state
  }
}

export default reducers
