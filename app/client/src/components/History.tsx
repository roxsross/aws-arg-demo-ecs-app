import { faStar, faTrash, faClose } from '@fortawesome/free-solid-svg-icons'
import { faStar as StrokeFaStart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { UserData } from '../types'
interface Props {
  historyData: UserData[]
  openModal: boolean
  fav: {[key: number]: boolean}
  handleFav: (id: number) => void
  cleanHistory: () => void
  closeModal: () => void
}

const History = ({ historyData, openModal, fav, handleFav, cleanHistory, closeModal } : Props) => {
  return (
    <div className={`${openModal ? ' translate-x-0' : 'translate-x-full'} pb-5 flex flex-col transform space-y-2 transition-all ease-out duration-200 fixed top-0 right-0 bg-gitGray h-screen w-[320px] mt-0 justify-between`}>
      <div className='flex justify-start items-center mt-2 ml-5'>
        <button className=' p-3 rounded-full font-bold font-mono text-sm flex items-center gap-2' onClick={() => closeModal()}>
          <FontAwesomeIcon fontSize='1.4rem' icon={faClose} />
        </button>
      </div>
      <div className='h-screen overflow-y-auto'>
        {historyData.length === 0
          ? <div className='flex item-center justify-center'><p className='text-sm font-mono font-bold'>Historial vacio...</p></div>
          : historyData?.map((user) => (
            <div key={user.id} className='hover:bg-button' onClick={() => handleFav(user.id)}>
              <div className='flex flex-row justify-start space-x-3 items-center px-5 py-2'>
                <img alt={`${user.name}`} className='w-12 h-12 rounded-full' src={`${user.avatar_url}`} />
                <div className='flex flex-col w-[100%]'>
                  <h1 className='font-mono font-bold text-lg text-left'>{user.name}</h1>
                  <div className='block w-0'>
                    <a className='font-mono text-base text-gitBlue text-left' href={`https://github.com/${user.login}`} rel='noreferrer' target='_blank'>/{user.login}</a>
                  </div>
                </div>
                {fav[user.id]
                  ? <FontAwesomeIcon fontSize='1rem' icon={faStar} />
                  : <FontAwesomeIcon fontSize='1rem' icon={StrokeFaStart} />}
              </div>
            </div>
          ))}
      </div>
      <div className='flex justify-center items-center space-x-5'>
        <button className='bg-button py-2 px-4 rounded-full font-bold font-mono text-sm flex items-center gap-2' onClick={() => cleanHistory()}>
          CLEAR HISTORY
          <FontAwesomeIcon fontSize='.8rem' icon={faTrash} />
        </button>
      </div>
    </div>
  )
}

export default History
