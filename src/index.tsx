import { normalize, setupPage } from 'csstips'
import { App } from './App'
import ReactDOM from 'react-dom'
import { loadFontFaces } from './common/font-faces'

// CSS Setup
loadFontFaces()
setupPage('#root')
normalize()

// React Setup
const app = document.getElementById('root')
ReactDOM.render(<App />, app)
