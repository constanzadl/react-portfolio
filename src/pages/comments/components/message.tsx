import { db } from '../../../services/firebase'
// Add a second document with a generated ID.
import { addDoc, collection } from 'firebase/firestore'

const MakeMessage = async () => {
  try {
    const docRef = await addDoc(collection(db, 'messages'), {
      from: 'some person',
      message: 'some message'
    })

    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const Comment = () => {
  return (
    <div>
      <form className="flex flex-col w-full text-white">
        <label htmlFor="msg-from">From:</label>
        <input
          id="msg-from"
          type="text"
          className="p-1 w-1/2 text-violet-400 rounded-md border border-violet-600"
        ></input>
        <label htmlFor="msg-msg">Message:</label>
        <input
          id="msg-msg"
          type="text"
          className="p-1 w-1/2 text-violet-400 rounded-md border border-violet-600"
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={MakeMessage}
          className="p-2 mt-4 w-32 text-violet-600 hover:text-white bg-white hover:bg-violet-600 rounded-md border border-violet-600"
        />
      </form>
    </div>
  )
}
