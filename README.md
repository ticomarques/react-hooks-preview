#Testing the React Hooks - React 16.8 New Features

It is just a CRUD using useState, useReducer, useContext and useEffect.

It is an alternative for Redux and React-Redux, and built-in React features.


1 - Create a Context (React.CreateContext())
2 - Create a Reducer 
3 - import context and reducer in the app file.
4 - const [ state, dispatch] =  useReducer(reducer from step2)
5 - Use the context (step1) as a wrapper around the <app /> and declare value={{state, dispatch}}
6 - now you can use the context in the pages and components, just use: const { state, dispatch } = useContext(context from step1)


useEffect for basic lyfecycle control.

##Remember

Context is used to share data between pages and components, an alternative for props... and avoid props drilling.

REDUCER changes the state, with payload which comes from ACTIONS. Those changes reflect in the context, because the context brings data from state, which is changed by reducer.

It is similar do redux, but with less code.

