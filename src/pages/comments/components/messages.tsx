import { db } from '../../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export const Messages = () => {
  const [messages, setMessages] = useState([])
  const [fetched, setFetched] = useState(false)
  useEffect(() => {
    const getFetch = async () => {
      setFetched(true)
      const fetchedMessages: any = []
      const querySnapshot = await getDocs(collection(db, 'messages'))
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({
          message: doc.data().message,
          from: doc.data().from
        })
      })
      setMessages(fetchedMessages)
    }
    if (fetched === false) {
      getFetch()
    }
  }, [])

  return (
    <div className="my-8 dark:text-white">
      <p>Messages:</p>
      <div className="flex flex-col">
        {messages.map((msg: any, index) => {
          return (
            <div key={index} className="flex flex-row">
              <p className="mr-4">{msg?.message}</p>
              <p>{msg?.from}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
