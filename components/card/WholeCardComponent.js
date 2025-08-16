'use client'
import { useState} from 'react';
import CardView from '@/components/card/cardView/CardView'
import MoreInfoModal from '@/components/modals/MoreInfoModal'

export default function WholeCardComponent({card, mod, setRefresh}) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <MoreInfoModal
                setShow={setShow} 
                show={show} 
                card={card} 
                mod={mod} 
                setRefresh={setRefresh}/>
            <CardView setShow={setShow} card={card} />
        </div>
)}