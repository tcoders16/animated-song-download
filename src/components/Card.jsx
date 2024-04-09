import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";  /*{Icon}*/
import { MdOutlineFileDownload } from "react-icons/md";/*{Icon}*/
import { IoIosClose } from "react-icons/io";/*{Icon}*/
import {motion} from "framer-motion"  /*{Animation}*/

const Card = ({data}) => {
  return (
    <>
        <div>
            < motion.div drag  className='relative w-60 h-72 bg-zinc-100 overflow-hidden rounded-[50px] px-8 py-10'> {/*This motion.div   and   drag is used more motion*/}
                {/* This is Icon Import */}
                <FaRegFileAlt/>
                <p className='mt-5 text-sm leading-tight'>{data.description} </p>

                <div className="(footer) absolute rounded-b-[50px]  bottom-0 w-full left-0   ">

                    <div className='(mb and download) flex items-center py-5 px-7 justify-between'>
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center'>
                             {data.close ? <IoIosClose size=".7rem" color='#fff'/>:<MdOutlineFileDownload size=".7rem" color='#fff'/>}
                             {/* This is for Icon */}
                             
                            
                        </span>
                    </div>


            {data.tag.isOpen && 
            (<div className={`(tag) w-full py-4 ${data.tag.tagColor==="blue" ? "bg-sky-600":"bg-green-600"}`}>
                        <h3 className='flex items-center justify-center text-white font-semibold text-sm'>{data.tag.tagTitle}</h3>
                    </div>)}   
{/* && operator is true false operator in javascript if true it will run the code if false it will not run the code OR We can use----> {Statement ? condition : null} */}


                </div>
            </motion.div>
            
        </div>
    </>
  )
}

export default Card