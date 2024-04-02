import React from 'react'
import { SectionBigImageItem } from '../../components/sections/SectionBigImageItem'
import { useAppSelector } from '../../redux/hooks'
import { MenuSectionType } from '../../redux/reducers/menuReducer';

export const List = () => {
    const state = useAppSelector((state) => state.menu);

    if (state.section !== MenuSectionType.LIST || typeof state.content === 'string') return <></>;

    const { title, list } = state.content || { title: "", list: [] };

    return (
        <div className='h-full overflow-hidden hover:overflow-y-scroll'><SectionBigImageItem title={title} list={list} isExtendable={false} /></div>
    )
}
