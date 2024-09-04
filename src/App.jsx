
import './App.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {

  return (
    <>
      <div className='calculator'>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </>
  )
}

export default App
