import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import * as htmlToImage from 'html-to-image'

import { UserData } from '../types'

interface Props {
  data: UserData
  isLoading: boolean
}

const Card = ({ data, isLoading }: Props) => {
  const { login, avatar_url: avatar, bio, blog, company, followers, following, name, public_repos: repos, twitter_username: twitter, location } = data

  const saveComponentAsImage = () => {
    htmlToImage.toJpeg(document.getElementById('user-card') as HTMLElement, { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement('a')

        link.download = `${login}-dev.jpg`
        link.href = dataUrl
        link.click()
      })
  }

  return (
    <div className='flex-col flex p-5 bg-gitBlack border justify-between border-gitGray rounded-lg h-[350px]' id='user-card'>
      {isLoading
        ? (
          <div className='flex items-center flex-col mt-4 space-x-3 w-full h-full justify-between'>
            <div className='flex flex-row items-center w-full space-x-5'>
              <svg aria-hidden='true' className='text-gray-200 w-24 h-24 dark:text-gray-700' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path clip-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z' fill-rule='evenodd' /></svg>
              <div className='flex-col w-full'>
                <div className='h-5 bg-gray-200 w-48 rounded-full dark:bg-gray-700 mb-2' />
                <div className='h-3 bg-gray-200 w-28 rounded-full dark:bg-gray-700' />
              </div>
            </div>
            <div className='w-full flex flex-row justify-between'>
              <div className='flex flex-col space-y-3'>
                <div className='w-48 h-5 bg-gray-200 rounded-full dark:bg-gray-700' />
                <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
              </div>
              <div className='flex flex-col space-y-3'>
                <div className='w-48 h-5 bg-gray-200 rounded-full dark:bg-gray-700' />
                <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
              </div>
            </div>
            <div className='w-full flex flex-row justify-between'>
              <div className='flex flex-col space-y-3'>
                <div className='w-48 h-5 bg-gray-200 rounded-full dark:bg-gray-700' />
                <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
              </div>
              <div className='flex flex-col space-y-3'>
                <div className='w-48 h-5 bg-gray-200 rounded-full dark:bg-gray-700' />
                <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
              </div>
            </div>
          </div>
          )
        : (
          <>
            <div className='flex flex-row space-x-5 items-center w-full'>
              <img alt={`${name}`} className='w-24 h-24 rounded-full' src={`${avatar}`} />
              <div className='justify-center item-center space-y-2 w-full'>
                <div className='flex flex-row items-center space-x-3'>
                  <h1 className='font-mono font-bold text-lg'>{name}</h1>
                  <span title='GitHub'>
                    <a className='font-mono text-base text-gitBlue hover:underline' href={`https://github.com/${login}`} rel='noreferrer' target='_blank'>/{login}</a>
                  </span>
                </div>
                <h2 className='font-mono text-sm'>{bio}</h2>
              </div>
            </div>
            <div className='flex flex-row justify-between w-full mt-5'>
              {twitter || company
                ? (
                  <div className='flex flex-col space-y-2 w-[50%]'>
                    {twitter && (
                      <a href={`https://twitter.com/${twitter}`} rel='noreferrer' target='_blank'>
                        <p className='text-sm font-mono align-text-top font-bold hover:text-gitBlue '>
                          <FontAwesomeIcon fontSize='1rem' icon={faTwitter} style={{ marginRight: 10 }} />
                          {twitter}
                        </p>
                      </a>
                    )}

                    {company && (
                      <p className='text-sm font-mono align-text-top font-bold'>
                        <FontAwesomeIcon fontSize='1rem' icon={faBuilding} style={{ marginRight: 10 }} />
                        {company}
                      </p>
                    )}
                  </div>
                  )
                : null}
              {blog || location
                ? (
                  <div className='flex flex-col space-y-2 w-[50%]'>
                    {blog && (
                      <a href={`${blog}`} rel='noreferrer' target='_blank'>
                        <p className='text-sm font-mono align-text-top font-bold hover:text-gitBlue truncate'>
                          <FontAwesomeIcon fontSize='1rem' icon={faGlobe} style={{ marginRight: 10 }} />
                          {blog}
                        </p>
                      </a>
                    )}
                    {location && (
                      <p className='text-sm font-mono align-text-top font-bold'>
                        <FontAwesomeIcon fontSize='1rem' icon={faLocationDot} style={{ marginRight: 10 }} />
                        {location}
                      </p>
                    )}
                  </div>
                  )
                : (null)}
            </div>
            <div className='flex flex-row justify-between items-center mt-5'>
              <div className='justify-start space-y-1'>
                <p className='font-mono font-bold text-sm'>Repos</p>
                <p className='font-mono font-bold text-lg bg-gitGray rounded-full text-center'>{repos}</p>
              </div>
              <div className='justify-start space-y-1'>
                <p className='font-mono font-bold text-sm'>Followers</p>
                <p className='font-mono font-bold text-lg'>{followers}</p>
              </div>
              <div className='justify-start space-y-1'>
                <p className='font-mono font-bold text-sm'>Followings</p>
                <p className='font-mono font-bold text-lg'>{following}</p>
              </div>
            </div>
            <div className='flex justify-end items-center space-x-5'>
              <span title='save card as image'>
                <button className='text-gitGreen border hover:bg-gitGreen hover:text-white border-gitGreen py-1 px-2 rounded-full font-bold font-mono text-xs' onClick={saveComponentAsImage}>Save as image</button>
              </span>
            </div>
          </>
          )}
    </div>
  )
}

export default Card
