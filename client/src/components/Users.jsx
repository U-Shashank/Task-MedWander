import axios from 'axios';
import React from 'react';

const Users = ({ users }) => {
  const download = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_HOST_URI}/excel`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md rounded-md  overflow-y-scroll max-h-96 sm:max-h-108">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm text-center font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-center"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left text-center"
                  >
                    Phone
                  </th>
                </tr>
              </thead>
              
              <tbody className="max-h-96 overflow-y-scroll">
                {users.map((user) => (
                  <tr
                    key={user?.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user?.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user?.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user?.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-cente" onClick={download}>
          Download xlsx
        </button>
      </div>
    </div>
  );
};

export default Users;