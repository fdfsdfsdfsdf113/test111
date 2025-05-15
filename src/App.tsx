
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {

  return (
    <div className="h-full">

      <RouterProvider router={routes} />
    </div>
  )
  
  // return (
}

export default App
