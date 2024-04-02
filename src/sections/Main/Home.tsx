import React from 'react'
import { DisplayBigImageItem } from '../../components/ItemDisplays/DisplayBigImageItem'
import { library } from '../../data/userData'
import { ListBigImageItem } from '../../components/lists/ListBigImageItem'
import { SectionBigImageItem } from '../../components/sections/SectionBigImageItem'

export const Home = () => {
  return (
    <div className='max-h-[100%-6rem] h-full overflow-hidden hover:overflow-y-scroll'>
        <SectionBigImageItem title='Your playlists' list={library} isExtendable={true}/>
    </div>
  )
}
