import React, { useState, useEffect } from 'react'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from './components/Header'
import SearchField from './components/SearchField'
import Card from './components/Card'
import History from './components/History'
import Footer from './components/Footer'
import { UserData } from './types'


const App = () => {
  const [user, setUser] = useState<UserData>({}as UserData)
  const [searchUser, setUserSearch] = useState<UserData['login']>('')
  const [history, setHistory] = useState<UserData[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [fav, setFav] = useState<{ [key: number]: boolean }>({})
  

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${searchUser}`)
      const userData = await res.json()

      if (userData.message === 'Not Found') {
        setError('Not Found')
      } else {
        const history = localStorage.getItem('searchHistory')
        const searchHistory = history ? JSON.parse(history) : []
        const isDuplicated = searchHistory.some((item:UserData) => item.id === userData.id)

        setHistory(searchHistory)

        if (!isDuplicated) {
          searchHistory.push(userData)
          localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
        }
        setTimeout(() => {
          setUser(userData)
        }, 1000)
        setError(null)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    setUserSearch('')
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserSearch(e.target.value)
  }

  const handleToggleModal = () => {
    setOpenModal(!openModal)
  }

  const handleFav = (userId: number) => {
    setFav((prevFav) => {
      return {
        ...prevFav,
        [userId]: !prevFav[userId]
      }
    })
  }

  const deleteHistory = () => {
    localStorage.clear()
    setHistory([])
    setUser({} as UserData)
    handleToggleModal()
  }

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory')

    if (storedHistory) {
      setHistory(JSON.parse(storedHistory))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history))
  }, [history])

  return (
    <main className='grid h-screen w-screen'>
      <div className='flex flex-col h-full p-5 sm:w-[520px] space-y-5 m-auto justify-center'>
        <div className='flex flex-col space-y-5'>
          <Header />
          <SearchField handleToggleModal={handleToggleModal} searchUser={searchUser} onHandlerChange={handleOnChange} onHandlerClick={handleClick} />
        </div>
        {error
          ? (
            <div className='w-full flex item-center justify-center'>
              <div className='w-2/4 rounded-md flex flex-row items-center justify-center space-x-3 bg-gitRed p-2'>
                <FontAwesomeIcon fontSize='1.8rem' icon={faCircleExclamation} />
                <p className='text-center font-mono font-bold text-lg'>User Not Found</p>
              </div>
            </div>
            )
          : (
              user.login
                ? (
                  <Card data={user} isLoading={isLoading} />
                  )
                : isLoading
                  ? (
                    <div className='flex item-center justify-center w-full' role='status'>
                      <svg aria-hidden='true' className='w-10 h-10 mr-2 animate-spin dark:text-gitGray fill-gitBlue' fill='none' viewBox='0 0 100 101' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                        <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                      </svg>
                    </div>
                    )
                  : (
                    <p className='text-center font-mono text-white text-sm'>Search for a developer by their username</p>
                    )
            )}
        <Footer />
      </div>
      <History cleanHistory={deleteHistory} closeModal={handleToggleModal} fav={fav} handleFav={handleFav} historyData={history} openModal={openModal} />
    </main>
  )
}

export default App
