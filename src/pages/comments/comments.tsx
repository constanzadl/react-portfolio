import { Comment } from './components/message'
import { Message } from './components/messages'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { db } from '../../services/firebase'

export const UserComments = () => {
  useEffect(() => {
    const collectionMaker = async () => {
      try {
        const docRef = await addDoc(collection(db, 'messages'), {
          name: 'Jon Doe',
          message: 'First Message'
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
    collectionMaker()
  }, [])

  return (
    <div className="pt-8 pl-16">
      <p className="mb-8 text-4xl text-white">Leave a message!</p>
      <Comment />
      <div className="my-8">
        <p>Messages go here</p>
        <Message />
      </div>
    </div>
  )
}
