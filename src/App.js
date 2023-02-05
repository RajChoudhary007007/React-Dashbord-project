import LeftComponent from './components/LeftComponent'

import StartProfile from './components/StartProfile'

import RightComponent from './components/RightComponent'

import './App.css'

const App = () => (
  <>
    <div className="app-container">
      <div className="left-container">
        <LeftComponent />
      </div>
      <div className="right-container">
        <StartProfile />
        <RightComponent />
      </div>
    </div>
  </>
)

export default App
