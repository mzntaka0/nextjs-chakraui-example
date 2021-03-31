import React from 'react'
import Link from 'next/link'
import {
  Heading,
  Spinner
} from '@chakra-ui/react'
import useSWR from 'swr'
import {useForm} from 'react-hook-form'
import {useRecoilValue} from 'recoil'

import styles from 'styles/Home.module.css'
import DocumentCreateForm from './DocumentCreateForm'
import {documentsState} from './state'


const Content: React.FC = () => {
  const {data} = useSWR('/api/hello')
  const documents = useRecoilValue(documentsState)
  return (
    <>
      <Heading size='lg'>
        create a document
      </Heading>
      <DocumentCreateForm />
      <div>
        <Heading size='lg'>
          document list
        </Heading>
        <ul>
          {
            documents.map(value => {
              return (
                <li>
                  <Link
                    href={`/documents/${value.key})}`}
                  >
                    {value.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <Heading size='lg'>
          fetched data
        </Heading>
        {
          data ? data.name : <Spinner />
        }
      </div>
    </>
  )
}


export default Content
