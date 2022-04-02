import { createContext, useContext, useReducer } from "react"

const ACTION_TYPES = {
  SET_TASKS: 'SET_TASKS'
};

const defaultState = {
  isLoggedIn: false,
  user: null,
  tasks: [],
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_TASKS: {
      return {...state, tasks: action.tasks}
    }
  }
}

const Context = createContext(defaultState)

function useBootCampContext() {
  return useContext(Context)
} 
  



function ContextProvider({ children }) {
  const [state, dispatch] = useReducer( reducer, defaultState )
  return <Context.Provider value={{ state, dispatch }}>
    {children}
  </Context.Provider>
}

export { ContextProvider, useBootCampContext, ACTION_TYPES };