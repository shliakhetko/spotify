import React from 'react'
import { SectionBigImageItem } from '../../components/sections/SectionBigImageItem'
import { useAppSelector } from '../../redux/hooks'
import { ItemList, MenuSectionType } from '../../redux/reducers/menuReducer';

export const List = () => {
    const state = useAppSelector((state) => state.menu  );

    if (state.section !== MenuSectionType.LIST) return <></>;

    const { title, list } = state.content as ItemList || { title: "", list: [] };

    return (
        <div className='h-full pt-16 overflow-hidden hover:overflow-y-scroll'><SectionBigImageItem title={title} list={list} isExtendable={false} /></div>
    )
}
