import React,{useEffect, useState} from 'react'

function Github() {
    const [data,setData]=useState(0)

    useEffect(() => {
        fetch('https://api.github.com/users/stefanbinoj')
        .then(response => response.json())
        .then(jsonData=>{
            console.log(jsonData)
            setData(jsonData)
        })
     
    }, [])
    
  return (
    <div className='text-center w-1/2 self-center ml-auto mr-auto flex m-20 text-slate-gray justify-center gap-8 p-10  bg-gray-500 rounded-3xl'>
      <div>
        <img src={data.avatar_url} width={300} height={300} className='rounded-full'/> 
      </div>
      <div className='flex flex-col text-slate-gray text-white m-7 gap-2 items-start'>
      <h2 className='text-bold text-3xl font-mono'>Name : <span className='text-orange-600'>{data.name}</span></h2>
        <h2 className='text-bold text-3xl font-mono'>Followers : <span className='text-orange-600'>{data.followers}</span></h2>
        <h2 className='text-bold text-3xl font-mono'>Following : <span className='text-orange-600'>{data.following}</span></h2>
        <h2 className='text-bold text-3xl font-mono'>URL : <a href={data.url} target='_blank' className='text-blue-700 underline-offset-4' >link</a></h2>


      </div>
    </div>
  )
}

export default Github
