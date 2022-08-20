import React from 'react'

import { Button } from 'vlkui'
import 'vlkui/dist/index.css'

const App = () => {
  return (
    <div style={{textAlign:'center'}  }>
  <Button 
  type="primary" 
  text="Primary Button">
  </Button>
  <br></br>
  <Button 
  type="default" 
  text="Default Button">
  </Button>
  <br></br>
  <Button 
  type="dashed" 
  text="Dashed Button">
  </Button>
  <br></br>
  <Button 
  type="texty" 
  text="Text Button">
  </Button>
  <br></br>
  <Button 
  type="link" 
  text="Link Button">
  </Button>
  </div>
  )
}

export default App
