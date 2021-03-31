import {atom} from 'recoil'

import {Document} from 'lib/types/documents'


export const documentsState = atom<Document[]>({
  key: 'documentsState',
  default: []
})
