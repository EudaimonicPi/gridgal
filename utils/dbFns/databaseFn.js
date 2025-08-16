import { noWIFIfetchedCards } from "../offline/data"


// fetches all the cards (if mod, fetches pending cards only)
// const fetchAll = async (mod = false, limit = null, onlyFavorites=false) => {
//   const toSend = { mod, limit }; // now sending limit too
//   const jsonToSend = JSON.stringify(toSend);



// Fetches all the cards (if mod, fetches pending cards only)
const fetchAll = async (mod = false, limit = null, onlyFavorites = false) => {
  const toSend = { mod, limit, onlyFavorites }; // Include onlyFavorites in the request
  const jsonToSend = JSON.stringify(toSend);

  try {
    const response = await fetch(`/api/cards`, { 
      cache: 'no-store',
      method: 'POST',
      body: jsonToSend,
    });

    if (response.ok) {
      const toReceiveJSON = await response.json();
      return JSON.stringify(toReceiveJSON)
    }
  } catch (err) {
    console.log("Error with fetching all cards", err);
  }
};




// creates a card
const createOne = async (title, card, mod=false) => {
// when mod is = to trye, sends that into the create which determines eh db

    // in this case sent obj and param are same
    // console.log("YOU MADE IT INTO THE SAVE FN!!")
    const toSend = JSON.stringify({ cardInfo: card, mod: mod})
    try {
      const response = await fetch(`/api/create/${title}`,
        {
            method: 'POST',
            body: toSend,
        })
    if (response.ok) {
        console.log("LOL I do not need to send anything back ")
    }
  } catch(err) {
    console.log("err with trying to create grid in db", err)
  }
}

const updateStatus = async (title, cardID, ecyFav=false) => {
  const toSend = JSON.stringify({cardID: cardID, ecyFav: ecyFav})
  try {
    const response = await fetch(`/api/card/${title}`, 
    {
      method: 'PUT', 
      body: toSend, 
    })
    if (response.ok) {
        console.log("nothing to return, just a status update...")
        // may have to redo some stuff so page reloads
    }
  } catch(err) {
    console.log("err with trying to update status of card", err)
  }
}


// const can do create One to moderator DB? 
const deleteOne = async (title, cardID) => {
    const toSend = JSON.stringify({ cardID: cardID })
    try {
      const response = await fetch(`/api/card/${title}`,
        {
            method: 'DELETE',
            body: toSend,
        })
    if (response.ok) {
        console.log("LOL I do not need to send anything back ")
    }
  } catch(err) {
    console.log("err with trying to create grid in db", err)
  }
}

export {createOne, fetchAll, updateStatus, deleteOne}