import React from 'react'
import {useRouter} from 'next/router'
import { Button} from 'react-bootstrap';
import Link from 'next/link';
import Meta from '../../../Component/meta';
import style from '../../../styles/Home.module.css'

function Sample({Sample}) {
                    const router = useRouter()
                    const {id} = router.query;
                    console.log(Sample);
  return (
    <div className={style.container}>
      <Meta title={`ApiList ${Sample.id}`}/>
      <h1>{Sample.id}</h1>
                   <h2>{Sample.title}</h2> 
                   <h4>{Sample.body}</h4>
                   <Link href="/">
                   <Button variant='outline-secondary' className='mt-5'>Go back</Button>
                   </Link>
                   

    </div>
  )
}

// export const getServerSideProps = async (context) => {
//                     const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//                     const articlebyid = await resp.json()

//                     return {
//                                         props: {articlebyid}
//                     }
// }

export const getStaticProps = async (context) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const Sample = await resp.json()

  return {
                      props: {Sample}
  }
}

export const getStaticPaths = async (context) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const Sample = await resp.json()

  const ids = Sample.map((a) => a.id)
  const paths = ids.map((id) => ({params: {id: id.toString()}}))

  return {
                      paths,
                      fallback: false
  }
}

export default Sample