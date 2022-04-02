import React from 'react'
import { useEffect, useState } from 'react'
import { projectFireStore } from '../firebase'
import { ACTION_TYPES, useBootCampContext } from '../state';

function SingleBoard() {
  const [isLoading, setIsLoading] = useState(false)

  const {state, dispatch} = useBootCampContext()

  useEffect(() => {
    let results = [];
    setIsLoading(true);
    projectFireStore.collection("/tasks").get().then(snapshot => {
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.ids, ...doc.data() })
      })
      dispatch({ type: ACTION_TYPES.SET_TASKS, tasks: results })
      setIsLoading(false)
    })
  }, [dispatch]);
  
  return (
    <div>
    {isLoading ? <div>...loading</div> : <>
      {state.tasks.map((task) => {
        return <div key={Math.round(Math.random() * 1000)}>
          <h5>{task.title}</h5>
          <h4>{task.description}</h4>
        </div>
      })}
    </>
    }
    </div>
  )
}

export default SingleBoard