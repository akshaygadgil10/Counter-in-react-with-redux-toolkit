# Counter in react with redux toolkit

1.ConfigureStore API from Redux Toolkit. We'll start by creating an empty Redux store `src/app/store.js`.

2.Provide the Redux Store to React. Once the store is created, we can make it available to our React components by putting a React Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop- `src/index.js`.

3.Create a Redux State Slice . import the createSlice API from Redux Toolkit. - `src/features/counter/counterSlice.js`.
Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice. - created reducer functions - increment & decrement.
Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

4.Add Slice Reducers to the Store.import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state. - `app/store.js`.

5.Use Redux State and Actions in React Components.We can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`. - `src/features/counter/Counter.js`

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

![image](https://github.com/akshaygadgil10/Counter-in-react-with-redux-toolkit/assets/51160882/bc3c0140-23be-408c-b30d-2700a81d8f38)

![image](https://github.com/akshaygadgil10/Counter-in-react-with-redux-toolkit/assets/51160882/15f5082a-e9a2-4ee2-8f0c-cd70c1bc1f7d)


