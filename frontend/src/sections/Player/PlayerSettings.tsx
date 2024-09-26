import React from 'react';
import { AiOutlinePlaySquare } from "react-icons/ai";
import { PiMicrophoneStageBold, PiSpeakerHighBold, PiSpeakerLowBold, PiSpeakerNoneBold, PiSpeakerXBold } from "react-icons/pi";
import { IoReorderFour, IoResize } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PlayerActionTypes } from '../../redux/action-types/playerActionTypes';
import classNames from 'classnames';

export const PlayerSettings = () => {
  const dispatch = useAppDispatch();
  const player = useAppSelector((state) => state.player);
  const volume = player.volume;

  const handleVolumeChange = (newVolume: number) => {
    dispatch({ type: PlayerActionTypes.VOLUME, payload: newVolume })
  };

  const handleChangeInVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(Number(e.target.value));
  };

  return (
    <div className='w-1/4 flex justify-end items-center pr-4'>
      <div className='flex space-x-4'>
        <button className={classNames('')}><AiOutlinePlaySquare /></button>
        <button className={classNames('')}><PiMicrophoneStageBold /></button>
        <button className={classNames('')}><IoReorderFour /></button>
        <div className='flex w-1/2 space-x-2'>
          <div>
            {volume == 0 ? <PiSpeakerXBold/> : volume < 1/3 ? <PiSpeakerNoneBold/> : volume < 2/3 ? <PiSpeakerLowBold/> : <PiSpeakerHighBold/>}
          </div>
          <input
            type="range"
            className="w-2/3 h-2  mt-0.5 rounded-lg bg-slate-400 accent-gray-900"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleChangeInVolume}
          />
        </div>
        <button className=''><IoResize /></button>
      </div>
    </div>
  )
}
