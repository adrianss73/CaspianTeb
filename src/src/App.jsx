import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to CaspianTeb</h1>
      <p>This is the first public release of our site.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
