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
  const {data: articles} = useSWR('https://hoge.sample.com/backend/api/articles')
  const documents = useRecoilValue(documentsState)

  if (!articles) {
    return <>loading..</>
  }
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
      </div>
      <div>
        <Heading size='lg'>
          msw data
        </Heading>
        <p role='msw'>
          {
            JSON.stringify(articles)
          }
        </p>
      </div>
    </>
  )
}


export default Content
