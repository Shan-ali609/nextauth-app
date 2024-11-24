// import React from 'react'



// export default function page({params}:any) {
//   return (
//     <div className='flex flex-col items-center justify-center w-full h-screen'>
//       <h1 className='text-3xl font-bold'>profile page</h1>
//       <hr />
//       <hr />
//      <h2 className=' bg-green-500 p-2 text-black'>{params.id}</h2>
//     </div>
//   )
// }

// Add this at the top of your file
'use client'

import React from 'react'
import { useParams } from 'next/navigation' // Use next/navigation for dynamic params

export default function Page() {
  const params = useParams(); // Get the dynamic 'id' from the URL params
  const { id } = params;

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold">Profile Page</h1>
      <hr />
      <hr />
      <h2 className="bg-green-500 p-2 text-black">{id}</h2>
    </div>
  )
}


