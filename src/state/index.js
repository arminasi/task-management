import { createContext, useContext, useReducer } from "react"

const ACTION_TYPES = {
  SET_TASKS: 'SET_TASKS'
};

const defaultState = {
  isLoggedIn: false,
  user: null,
  tasks: [{
		title: 'Learn English',
		description: 'Enhance skills',
		priority: 'medium',
		id: 1,
		category: 'JS',
		status: 'doing'
	},
	{
		title: 'Learn Math',
		description: 'Enhance skills',
		priority: 'low',
		id: 2,
		category: 'JS',
		status: 'todo'
	},
	{
		title: 'Learn JS',
		description: 'Enhance skills',
		priority: 'high',
		id: 3,
		category: 'JS',
		status: 'doing'
	},
	{
		title: 'Learn English',
		description: 'Enhance skills',
		priority: 'medium',
		id: 4,
		category: 'JS',
		status: 'done'
	},
	{
		title: 'Learn Math',
		description: 'Enhance skills',
		priority: 'low',
		id: 5,
		category: 'JS',
		status: 'todo'
	},
	{
		title: 'Learn JS',
		description: 'Enhance skills',
		priority: 'high',
		id: 6,
		category: 'JS',
		status: 'done'
	},
	{
		title: 'Learn English',
		description: 'Enhance skills',
		priority: 'medium',
		id: 7,
		category: 'JS',
		status: 'doing'
	},
	{
		title: 'Learn Math',
		description: 'Enhance skills',
		priority: 'low',
		id: 8,
		category: 'JS',
		status: 'todo'
	},
	{
		title: 'Learn JS',
		description: 'Enhance skills',
		priority: 'high',
		id: 9,
		category: 'JS',
		status: 'doing'
	},
	{
		title: 'Learn English',
		description: 'Enhance skills',
		priority: 'medium',
		id: 10,
		category: 'JS',
		status: 'done'
	},
	{
		title: 'Learn Math',
		description: 'Enhance skills',
		priority: 'low',
		id: 11,
		category: 'JS',
		status: 'todo'
	},
	{
		title: 'Learn JS',
		description: 'Enhance skills',
		priority: 'high',
		id: 12,
		category: 'JS',
		status: 'done'
	},
  ],
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