import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import './App.css'

function App() {

 

  return (
    <>
    <div className='p-0 m-0 flex'>
      <Sidebar/>
      <div className="flex-1">
        <Dashboard/>
      </div>
    </div>
      <div className='flex-1 p-4'>
        <h1 className='text-xl font-semibold'>Dashboard</h1>
        
      </div>
    </>
  )
}

export default App
