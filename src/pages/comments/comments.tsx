import { Comment } from './components/message'
import { Messages } from './components/messages'

export const UserComments = () => {
  return (
    <div className="pt-8 pl-16">
      <p className="mb-8 text-4xl text-white dark:text-violet-400">
        Leave a message!
      </p>
      <Comment />
      <Messages />
    </div>
  )
}
