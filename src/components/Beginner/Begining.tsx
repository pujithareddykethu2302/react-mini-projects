import Counter from './Counter'
import GreetingMessage from './GreetingMessage'
import ToDoList from './ToDoList'
import ToggleSwitch from './ToggleSwitch'

const Begining = () => {
  return (
    <div className='p-6 bg-[#222831] min-h-screen '>
        <div className='flex justify-center items-center'>
          <p className="text-4xl font-bold text-[#948979]"> Beginner (Basics & Fundamentals) </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-3'>
        <div className='bg-[#DFD0B8] m-5 rounded-xl'>
           <Counter />
        </div>
        <div className='bg-[#DFD0B8] m-5 rounded-xl'>
           <GreetingMessage />
        </div>
         <div className='bg-[#DFD0B8] m-5 rounded-xl'>
           <ToDoList />
        </div>
         <div className='bg-[#DFD0B8] m-5 rounded-xl'>
          <ToggleSwitch  />
        </div>
     
        </div>
     
    </div>
  )
}

export default Begining
