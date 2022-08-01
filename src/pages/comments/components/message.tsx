import { db } from '../../../services/firebase'
// Add a second document with a generated ID.
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'

export const Comment = () => {
  const [message, setMessage] = useState('')
  const [from, setFrom] = useState('')

  const MakeMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, 'messages'), {
        from: from,
        message: message
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setMessage('')
    setFrom('')
    //rerender list
  }

  return (
    <div>
      <form className="flex flex-col w-full text-white dark:text-violet-400">
        <label htmlFor="msg-from">From:</label>
        <input
          id="msg-from"
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-1 w-1/2 text-violet-400 dark:text-violet-800 rounded-md border border-violet-600 dark:border-violet-400"
        ></input>
        <label htmlFor="msg-msg">Message:</label>
        <input
          id="msg-msg"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-1 w-1/2 text-violet-400 dark:text-violet-800 rounded-md border border-violet-600"
        ></input>
      </form>
      <button
        onClick={() => MakeMessage()}
        className="p-2 mt-4 w-32 text-violet-600 hover:text-white dark:text-white bg-white hover:bg-violet-600 dark:bg-violet-800 dark:hover:bg-violet-500 rounded-md border border-violet-600 dark:border-violet-800"
      >
        Submit
      </button>
    </div>
  )
}
