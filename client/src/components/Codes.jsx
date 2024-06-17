import React from 'react'
import codes from './codes-info'

const Codes = ({ setCode, dropDown }) => {
  return (
    <div
      className={`absolute top-10 left-0 z-10 bg-white rounded-md shadow-md overflow-hidden transition-all duration-300 ${
        !dropDown ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      {codes.map((item) => (
        <div
          key={item.code}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            setCode(item.code)
          }}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={item.flag} alt="" className="object-cover" />
          </div>
          <div className="text-sm font-semibold">{item.code}</div>
          <div className="text-sm">{item.country}</div>
        </div>
      ))}
    </div>
  )
}

export default Codes