import React from 'react'
import Link from 'next/link'
import {
  Heading,
  Spinner
} from '@chakra-ui/react'
import useSWR from 'swr'
import {useForm} from 'react-hook-form'

import styles from 'styles/Home.module.css'
import DocumentCreateForm from './DocumentCreateForm'


const Content: React.FC = () => {
  const {data} = useSWR('/api/hello')
  return (
    <>
      <Heading size='lg'>
        create a document
      </Heading>
      <DocumentCreateForm />
      <div>
        {
          data ? data.name : <Spinner />
        }
      </div>
    </>
  )
}


export default Content
