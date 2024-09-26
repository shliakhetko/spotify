import React, { useEffect, useRef, useState } from 'react'
import Item from '../../models/Item'
import { DisplayBigImageItem } from '../ItemDisplays/DisplayBigImageItem'
import ItemType from '../../models/ItemType'
import useRefWidth from '../../hooks/useRefWidth'
import classNames from 'classnames'

interface Props {
    list: Item[]
    isExtended: boolean;
    isSkeleton?: boolean;
}

export const ListBigImageItem = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const width = useRefWidth(ref);
    const [render, setRender] = useState<boolean>(false);

    const numberInRow = ref.current ? Math.ceil(width && ref.current?.clientWidth / 180) : 0;
    const empty = new Array<null>(numberInRow).fill(null);

    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 50);
    })

    if(props.isSkeleton) return (<div className='pt-1 pb-6' ref={ref}>
        <ul className={classNames('grid', !render && 'opacity-0')} style={{ gridTemplateColumns: `repeat(${numberInRow}, minmax(0, 1fr))` }}>
            {empty.map((item, i) => <li key={i} className='h-fit w-fit p-2.5 rounded-md cursor-pointer hover:bg-neutral-900'><DisplayBigImageItem item={null} /></li>)}
        </ul>
    </div>);

    const list = props.isExtended && ref.current ? [...props.list].slice(0, numberInRow) : [...props.list];

    return (
        <div className='pt-1 pb-6' ref={ref}>
            <ul className={classNames('grid', !render && 'opacity-0')} style={{ gridTemplateColumns: `repeat(${numberInRow}, minmax(0, 1fr))` }}>
                {list.map((item, i) => (item.type !== ItemType.FOLDER && <li key={i} className='h-fit w-fit p-2.5 rounded-md cursor-pointer hover:bg-neutral-900'><DisplayBigImageItem item={item} /></li>))}
            </ul>
        </div>
    )
}
