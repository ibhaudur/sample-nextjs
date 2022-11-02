import React from 'react'
import style from '../styles/Home.module.css'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className={style.side}>

                    <div className={style.Sidebar}>
                    <ul>
                    <Link className={style.link} href='/'>
                    <li>
                                                    <span>Home</span>
            
                                                    </li>
                                                    </Link>
                                                   
                                                    <Link href='/Page2'>
                                                    <li>
                                                    <span>Post</span>
            
                                                    </li>
                                                    </Link>
                                                   
                    </ul>
                  </div>
                  </div>
  )
}

export default Sidebar