import React from 'react'
import {useRouter} from 'next/router'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Box
} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {useRecoilState} from 'recoil'
import {md5} from 'hash-wasm'

import {documentsState} from '../state'


const ObjectComponent: React.FC = () => {
  const router = useRouter()
  const [documents, setDocument] = useRecoilState(documentsState)
  const {handleSubmit, errors, register, formState} = useForm({
    mode: 'all'
  })

  const onSubmit = (values: {name: string}) => {
    const submit = async () => {
      const key = await md5(values.name)
      setDocument(current => current.concat([{
        key: key,
        name: values.name
      }]))
      router.push(`/documents/${key}`)
    }
    submit()
  }
  return (
    <Box
      w='50vw'
      border='1px'
      borderRadius='5px'
      borderColor='gray.300'
      p={5}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <VStack>
          <FormControl
            id='name'
            isInvalid={errors.name ? true : false}
            isRequired
          >
            <FormLabel
              htmlFor='name'
            >
              New Document Name
            </FormLabel>
            <Input
              name='name'
              placeholder='new document name..'
              ref={register({
                required: 'please input a new document name',
                maxLength: {
                  value: 32,
                  message: 'You must input the name within 32 characters'
                }
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            colorScheme='blue'
            type='submit'
            disabled={!formState.isValid}
            isLoading={formState.isSubmitting}
          >
            Create
          </Button>
        </VStack>
      </form>
    </Box>
  )
}


export default ObjectComponent
