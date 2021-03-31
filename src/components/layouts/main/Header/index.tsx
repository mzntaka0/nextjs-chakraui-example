import React from 'react'
import {
  chakra,
  useColorModeValue
} from '@chakra-ui/react'



const ObjectComponent: React.FC = () => {
  const bg = useColorModeValue('white.800', 'gray.800')
  return (
    <>
      <chakra.header
        bg={bg}
        w='100%'
        px={{
          base: 2,
          sm: 4
        }}
        py={4}
        boxShadow='md'
      >
        hoge
      </chakra.header>
    </>
  )
}


export default ObjectComponent
