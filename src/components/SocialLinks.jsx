import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
   
    // const links = [
    //     {
    //         id: 1,
    //         child: (
    //             <>
    //                 LinkedIn <FaLinkedin size={30} />
    //             </>
    //         ),
    //         href: 'https://linkedin.com',
    //         style: 'rounded-tr-md'
    //     },
    //     {
    //         id: 2,
    //         child: (
    //             <>
    //                 Github <FaGithub size={30} />
    //             </>
    //         ),
    //         href: 'https://github.com/Priyariya1',

    //     },
    //     {
    //         id: 3,
    //         child: (
    //             <>
    //                 Mail <HiOutlineMail size={30} />
    //             </>
    //         ),
    //         href: 'mailto:priyasaravanan282@gmail.com',

    //     },
    //     {
    //         id: 4,
    //         child: (
    //             <>
    //                 Resume <BsFillPersonLinesFill size={30} />
    //             </>
    //         ),
    //         href: '/Priya.pdf',
    //         style: 'rounded-br-md',
    //         download: true
    //     },
    // ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-400'>
                    <a 
                    href='https://www.linkedin.com/in/priyadharshini-s-a148aa274/' rel='noreferrer'
                    className='flex justify-between items-center w-full text-white rounded-tr-md'
                    >
                        <>
                        LinkedIn <FaLinkedin size={30}/>
                       
                        </>
                   
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800'>
                    <a 
                     href='https://github.com/Priyariya1' rel='noreferrer'
                    
                    className='flex justify-between items-center w-full text-white '
                    >
                        <>
                        Github <FaGithub size={30}/>
                       
                        </>
                   
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-green-400'>
                    <a 
                    href='mailto:priyasaravanan282@gmail.com' rel='noreferrer'
                    className='flex justify-between items-center w-full text-white'
                    >
                        <>
                        Mail <HiOutlineMail size={30}/>
                       
                        </>
                   
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a 
                    href='/Priya.pdf' rel='noreferrer'
                    download='true'
                    className='flex justify-between items-center w-full rounded-br-md text-white'
                    >
                        
                        <>
                        Resume <BsFillPersonLinesFill size={30}/>
                       
                        </>
                   
                    </a>
                </li>

          
            </ul>
        </div>
    )
}

export default SocialLinks
 