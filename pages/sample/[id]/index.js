import React from 'react'
import {useRouter} from 'next/router'
import { Button} from 'react-bootstrap';
import Link from 'next/link';

function Sample({articlebyid}) {
                    const router = useRouter()
                    const {id} = router.query;
  return (
    <div className='justify-content-center'>
      
                   <h1>{articlebyid.title}</h1> 
                   <h4>{articlebyid.body}</h4>
                   <Link href="/sampleapi">
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
  const articlebyid = await resp.json()

  return {
                      props: {articlebyid}
  }
}

export const getStaticPaths = async (context) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articlebyid = await resp.json()

  const ids = articlebyid.map((a) => a.id)
  const paths = ids.map((id) => ({params: {id: id.toString()}}))

  return {
                      paths,
                      fallback: false
  }
}

export default Sample