import React from 'react'
import { LibraryItem } from '../Library/LibraryItem'
import { library } from '../../data/userData'
import { DisplayLibraryItem } from '../../components/ItemDisplays/DisplayLibraryItem'
import { LikeButton } from '../../components/buttons/LikeButton'
import { useAppSelector } from '../../redux/hooks'

export const PlayerTrackInfo = () => {
  const track = useAppSelector(state => state.player.playing);

  return (
    track && <div className='w-1/4 flex justify-cneter items-center space-x-4'><DisplayLibraryItem item={track} /><LikeButton id={track.id as string} /></div>
  )
}
