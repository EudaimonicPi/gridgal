'use client'
import { useState} from 'react';
import CardView from '@/components/card/singleCard'
import ModalView from '@/components/modals/moreModal'

export default function CardComponent({card, mod}) {
    const [show, setShow] = useState(false)
    const [countryCode, setCountryCode] = useState('US') // is US okay default, or ahhhhhh? 

    return (
        <div>
            <ModalView setShow={setShow} show={show} card={card} countryCode={countryCode} mod={mod}/>
            <CardView setShow={setShow} card={card} countryCode={countryCode} />
        </div>
)}