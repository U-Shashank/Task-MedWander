import { useEffect, useState } from 'react'
import Form from './components/Form'
import axios from 'axios'
import Users from './components/Users'

function App() {
  const [formType, setFormType] = useState("")
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setFormType(user.formType)
    }
  }, [])

  const getUsers = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${import.meta.env.VITE_HOST_URI}/user`)
      setUsers(res.data.rows)
      console.log(res.data.rows);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }



  useEffect(() => {
    console.log(users)
  }, [users])
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='h-screen w-screen bg-gradient-to-b from-[#3D0C02] to-[#343434] flex justify-center m-auto'>

      <div className="h-screen w-screen max-w-[1000px] overflow-hidden  flex flex-col items-center justify-center sm:flex-row justify-center gap-10 sm:justify-around" >
        <div className='flex flex-col items-center justify-center'>
          <div className="mb-10 flex gap-8">
            <button
              className={`relative rounded-lg px-6 py-4 text-2xl font-semibold text-white transition duration-300 focus:outline-none
            bg-transparent border-2 border-purple-500 hover:bg-purple-500
            shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${formType === 'A' ? "-translate-y-1 bg-purple-700" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                setFormType("A")
              }}
            >
              Form A
              <span className="absolute inset-0 rounded-lg opacity-25 blur-lg transition duration-300 group-hover:opacity-100"></span>
            </button>
            <button
              className={`relative rounded-lg px-6 py-4 text-2xl font-semibold text-white transition duration-300 focus:outline-none
            bg-transparent border-2 border-blue-500 hover:bg-blue-500
            shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${formType === 'B' ? "-translate-y-1 bg-blue-700" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                setFormType("B")
              }}
            >
              Form B
              <span className="absolute inset-0 rounded-lg opacity-25 blur-lg transition duration-300 group-hover:opacity-100"></span>
            </button>
          </div>
          {formType && <Form formType={formType} setFormType={setFormType} getUsers={getUsers} />}
        </div>
        {users.length > 0 && <Users users={users} />}
      </div>
    </div>
  )
}

export default App