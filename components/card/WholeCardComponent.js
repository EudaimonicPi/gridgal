'use client'
import { useState} from 'react';
import CardView from '@/components/card/cardView/singleCard'
import ModalView from '@/components/modals/moreModal'

export default function WholeCardComponent({card, mod, setRefresh}) {
    const [show, setShow] = useState(false)

    return (
        <div>
            <ModalView setShow={setShow} show={show} card={card} 
            mod={mod} setRefresh={setRefresh}/>
            <CardView setShow={setShow} card={card} />
        </div>
)}