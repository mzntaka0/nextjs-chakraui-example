import type {NextPage, GetServerSideProps} from 'next'

import Content from 'components/contents/index'
import {api} from 'lib/services'


const Page: NextPage = (props) => {
  console.log(props)
  return (
    <Content />
  )
}


export const getServerSideProps: GetServerSideProps<{}> = async () => {
  const data = await api.get('https://hoge.sample.com/backend/api/articles').then(res => {
    return res.data
  })
  return {
    props: {
      data: data
    }
  }
}


export default Page
