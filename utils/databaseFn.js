const fetchAll = async () => {
    try { //weird stuff again
        const response = await fetch(`/api/cards`, { 
            cache: 'no-store',  
            method: 'POST' ,  //it was storing the GET request so I had to make it a post
          })

        if (response.ok) {
            const toReceive = await response.json()
            const test = JSON.stringify(toReceive) // stringified?
            return test // should I return JSON? 
        }
    } catch (err) {
        console.log("error with fetching all cards", err)
    }
}


const createOne = async (title, card) => {
    // in this case sent obj and param are same
    // console.log("YOU MADE IT INTO THE SAVE FN!!")
    const toSend = JSON.stringify({ cardInfo:card })
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

export {createOne, fetchAll}