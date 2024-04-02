import React from 'react'
import { LibraryItem } from '../Library/LibraryItem'
import { library } from '../../data/userData'
import { DisplayLibraryItem } from '../../components/ItemDisplays/DisplayLibraryItem'
import { LikeButton } from '../../components/buttons/LikeButton'

export const PlayerTrackInfo = () => {
  const track = library[0];
  return (
    <div className='w-1/4 flex justify-cneter items-center space-x-4'><DisplayLibraryItem {...track} /><LikeButton id={track.id} /></div>
  )
}
