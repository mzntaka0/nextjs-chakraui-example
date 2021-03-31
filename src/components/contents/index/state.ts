import {atom} from 'recoil'
import {recoilPersist} from 'recoil-persist'

import {Document} from 'lib/types/documents'


const {persistAtom} = recoilPersist()

export const documentsState = atom<Document[]>({
  key: 'documentsState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
