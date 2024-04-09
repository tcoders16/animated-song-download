import React, { useState } from 'react'
import Card from './Card'


const Foreground = () => {
  //Icon, description, filesize, download option, Download or close, tag details
  

  const data=[

    // Object 1
    {
      description:' "Ka Kya Kare" - Inspired by "Dilwale Dulhania Le Jayenge" ',
      filesize:'4.9mbs',
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now...",tagColor:"green"}
      },

    // Object 2
    {
      description: '"Abhi Jo Badal Barse" - Inspired by "Dilwale Dulhania Le Jayenge"',
      filesize:'2.4mbs',
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now...",tagColor:"green"}
      },

    // Object 3
    {
      description:'"Dil Se Dil Tak" - Inspired by "Dilwale Dulhania Le Jayenge"',
      filesize:'7.12mbs',
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now...",tagColor:"green"}
      },

    // Object 4
    {
      description:'"Pyaar ho " - Inspired by "Hero"',
      filesize:'4.29mbs',
      close:true,
      tag:{isOpen:true, tagTitle:"Download Now...",tagColor:"green"}
    }
  ];


  return (
    <>  
        <div>
            <div className=' p-20 first:fixed flex flex-wrap flex-shrink-0 top-0 left-0 z-[3] w-full h-screen gap-10 '>
              {data.map((item,index)=>(
                <Card data={item}/>
              ))}
            
            </div>
        </div>

    </>
  )
}

export default Foreground