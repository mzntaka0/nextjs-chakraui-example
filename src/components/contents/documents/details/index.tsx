import React from 'react'
import {useRouter} from 'next/router'
import {
  Button
} from '@chakra-ui/react'


const Content: React.FC = () => {
  const router = useRouter()
  return (
    <>
      <div>
        your id is {router.query.id}
      </div>
      <Button
        onClick={() => router.back()}
      >
        Back
      </Button>
    </>
  )
}


export default Content
