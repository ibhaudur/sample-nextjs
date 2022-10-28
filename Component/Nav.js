import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Nav() {
  return (
    <div className={styles.nav}>
      
      <h2>Kirshi</h2>
                    <ul>
                                        <li>
                                        <Link href='/'><span>Home</span></Link>

                                        </li>
                                        <li>
                                        <Link href='/Page1'><span>Page1</span></Link>

                                        </li>
                                        <li>
                                        <Link href='/Page2'><span>Page2</span></Link>

                                        </li>
                                        <li>
                                        <Link href='/sampleapi'><span>Api</span></Link>

                                        </li>
                    </ul>
                    
    </div>
  )
}

export default Nav