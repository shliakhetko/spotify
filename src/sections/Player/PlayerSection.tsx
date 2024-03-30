import React, { useState } from 'react'
import { PlayerTrackInfo } from './PlayerTrackInfo'
import { PlayerSettings } from './PlayerSettings'
import { Player } from './Player'
import Track from '../../models/Items/Track'
import { useAppSelector } from '../../redux/hooks'

export const PlayerSection = () => {
  const currentTrack = useAppSelector(state=>state.menu);

  return (
    <div className='h-24 w-full flex justify-between text-neutral-100'>
      <PlayerTrackInfo />
      <Player />
      <PlayerSettings />
    </div>
  )
}
