import { useState } from 'react'
import Form from './components/Form'

function App() {
  const [formType, setFormType] = useState("")

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#3D0C02] to-[#343434] flex flex-col items-center justify-center">
      <div className="mb-10 flex gap-8">
        <button
          className={`relative rounded-lg px-6 py-4 text-2xl font-semibold text-white transition duration-300 focus:outline-none
                     bg-transparent border-2 border-purple-500 hover:bg-purple-500
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${formType === 'A' ? "-translate-y-1 bg-purple-600" : ""}`}
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
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${formType === 'B' ? "-translate-y-1 bg-blue-600" : ""}`}
          onClick={(e) => {
            e.preventDefault()
            setFormType("B")
          }}
        >
          Form B
          <span className="absolute inset-0 rounded-lg opacity-25 blur-lg transition duration-300 group-hover:opacity-100"></span>
        </button>
      </div>
      {formType && <Form formType={formType} setFormType = {setFormType} />}
    </div>
  )
}

export default App