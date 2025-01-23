
import './App.css'
import Layout from './containers/Layout/Layout'
import { Provider } from 'react-redux'
import store from './store'

function App() {


  return (
    <>
        <Provider store={store} >
          <Layout />
        </Provider>
    </>
  )
}

export default App
