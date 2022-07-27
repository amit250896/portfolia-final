import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

function Headersocial() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><AiFillLinkedin /></a>
        <a href='https://github.com' target="_blank"><FaGithubSquare /></a>
        <a href='https://naukri.com' target="_blank"><MdWork /></a>

    </div>
  )
}

export default Headersocial