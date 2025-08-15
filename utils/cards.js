import Card from '@/components/card/WholeCardComponent'

const genCard = (title, author, description, image, authorImage, status='pending',) => { 
        return {title, author, description, image, status, authorImage}
}

function getCards(cards, mod=false, setRefresh=null) {
        // gets all the card element
        // each id is the mongo id generated
        return cards.map((card) => <Card  card={card} mod={mod} setRefresh={setRefresh}/>)
}


export { genCard, getCards}