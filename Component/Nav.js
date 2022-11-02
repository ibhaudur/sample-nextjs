import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Nav() {
  return (
    <div className={styles.nav}>
      
      <h2>Kirshi Technologies</h2>
                    <ul>
                                        <li>
                                        <Link href='/'><span>Home</span></Link>

                                        </li>
                                        <li>
                                        <Link href='/Page1'><span>About</span></Link>

                                        </li>
                                        <li>
                                        <Link href='/Page2'><span>Page</span></Link>

                                        </li>
                                      
                    </ul>
                    
    </div>
  )
}

export default Nav