import Card from '@/components/card/WholeCardComponent'

const genCard = (title, author, description, image, authorImage, status='pending',) => { 
        return {title, author, description, image, status, authorImage}
}

const getCards = (cards, mod=false, setRefresh = () => {}, onlyFavorites = false) => {
  if (!cards) return "No Cards Available"
  // If onlyFavorites is true, filter the cards to only include those where ecyFav is true
  const filteredCards = onlyFavorites ? cards.filter(card => card.ecyFav === true) : cards;

  return filteredCards.map( (card) => 
    <Card  key={card._id} card={card} mod={mod} setRefresh={setRefresh}/>)
};


export { genCard, getCards}