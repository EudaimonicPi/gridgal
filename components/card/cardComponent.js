'use client'
import { useState} from 'react';
import CardView from '@/components/card/postcard'
import ModalView from '@/components/modals/moreModal'


export default function CardComponent({card}) {
     const [show, setShow] = useState(false)

    return (
        <div>
            <ModalView setShow={setShow} show={show} card={card}/>
            <CardView setShow={setShow} card={card} />
        </div>
)}