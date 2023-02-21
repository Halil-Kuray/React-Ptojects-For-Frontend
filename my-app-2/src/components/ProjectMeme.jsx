import React from 'react'
import Data from '../data'
import Header from './Header'
import Meme from './Meme'


export default function ProjectMeme() {
  return (
    <article>
        <Header/>
        <Meme data={Data}/>
    </article>
  )
}
