import Card from '@/components/card/cardComponent'

const genCard = (title, author, description, image, status='pending') => { 
        return {title, author, description, image, status}
}

function getCards(cards, mod=false) {
        // gets all the card element
        // each id is the mongo id generated
        return cards.map((card) => <Card  card={card} mod={mod}/>)
}


export { genCard, getCards}