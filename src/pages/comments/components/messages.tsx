import { db } from '../../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export const Message = () => {
  const [messages, setMessages] = useState([])
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    const getFetch = async () => {
      setFetched(true)
      const querySnapshot = await getDocs(collection(db, 'messages'))
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)
      })
    }
    if (fetched === true) {
      getFetch()
    }
  }, [])

  return <div>Messages</div>
}
