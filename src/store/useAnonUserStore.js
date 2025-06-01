'use client'

import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

const useAnonUserStore = create((set, get) => {
  let uuid = null

  // Check for stored UUID
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('anonUserUUID')
    if (!uuid) {
      uuid = uuidv4()
      localStorage.setItem('anonUserUUID', uuid)
    }
  }

  return {
    uuid,
    setUUID: (newUUID) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('anonUserUUID', newUUID)
      }
      set({ uuid: newUUID })
    },
  }
})

export default useAnonUserStore
