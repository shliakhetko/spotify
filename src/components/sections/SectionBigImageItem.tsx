import React from 'react'
import { ListBigImageItem } from '../lists/ListBigImageItem'
import Item from '../../models/Item'
import { useAppDispatch } from '../../redux/hooks';
import { MenuActionTypes } from '../../redux/action-types/menuActionsTypes';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

interface Props {
    title: string;
    list: Item[];
    isExtendable: boolean;
    isSekeleton?: boolean;
}

export const SectionBigImageItem = (props: Props) => {
    const dispatch = useAppDispatch();

    if(props.isSekeleton) return (<div className='mx-3 w-[100%-5px]'>
        <div className='mt-8 flex justify-between items-center'>
            <span className={classNames('text-xl font-bold', props.isExtendable && 'hover:underline cursor-pointer')}><Skeleton width={200} height={20}/></span>
            {props.isExtendable && <span className='text-sm text-neutral-400 hover:underline cursor-pointer'><Skeleton width={100} height={12}/></span>}
        </div>
        <ListBigImageItem isExtended={props.isExtendable} list={props.list} isSkeleton={props.isSekeleton}/>
    </div>);

    const showAll = () => {
        dispatch({ type: MenuActionTypes.LIST, payload: {title:props.title, list:props.list} });
    }

    return (
        <div className='mx-3 w-[100%-5px]'>
            <div className='mt-8 flex justify-between items-center'>
                <span className={classNames('text-xl font-bold', props.isExtendable && 'hover:underline cursor-pointer')} onClick={showAll}>{props.title}</span>
                {props.isExtendable && <span className='text-sm text-neutral-400 hover:underline cursor-pointer' onClick={showAll}>Show all</span>}
            </div>
            <ListBigImageItem isExtended={props.isExtendable} list={props.list} />
        </div>
    )
}
