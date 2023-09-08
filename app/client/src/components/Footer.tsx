import packagejson from '../../package.json'
const Footer = () => {
  const date = new Date().getFullYear()
  const appVersion = packagejson.version

  return (
    <div className='px-10'>
      <p className='text-center text-xs text-gitGray font-mono'>{`${date} - Designed and developed with ❤️ - `}<a className='hover:text-gitBlue hover:underline' href='https://www.linkedin.com/in/santiago-moyano/' rel='noreferrer' target='_blank'>Santiago Moyano</a></p>
      <p className='text-center text-xs text-gitGray font-mono'>{`${date} - containerized and fix with ❤️ - `}<a className='hover:text-gitBlue hover:underline' href='https://www.linkedin.com/in/roxsross/' rel='noreferrer' target='_blank'>Rossana Suarez</a></p>
      <p className='text-center font-mono text-white text-m'>Version v{appVersion} (DevFinder)</p>
    </div>
  )
}

export default Footer
