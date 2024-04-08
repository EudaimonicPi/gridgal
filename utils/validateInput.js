  //this function validates the input of the grid name to make sure it is un
    function isEmpty(str) {
        return str.length === 0;
    }

    
 const validateInput = (input) => {
        const trimmed = input.trim();

        if (isEmpty(trimmed)) {  //can't be empty
            return ["Name must have characters"];
        }
        // uniqueness? 
        // if (titles.includes(trimmed)) {   
        //     return ['', "Name must be unique"]
        // }
        if (trimmed.length > 20) {
            return ["Name must be less than 20 characters" ];
        }
        return []; 
    }

        // clean this function the fuck up ;)
function isInvalid(title, author, imageFile) {

    if (!imageFile) {
        return ["Please Upload an Image"]
    }
    //titles is fetching all of the titles.... cards.get titles
    // authors don't have to be unique though... does uniqueness matter? 
    const titleValid = validateInput(title)
    // const authorValid = validateInput(author)

    // I TOOK AUTHOR OUT LOL OOOPS, has implications
    if (titleValid.length === 0) {
        // console.log("We made it y'all")
        return []
    } 

    // desription can be empty but ned to design those guidelines :) 
    if (!titleValid.length == 0) {
        return titleValid
    }
    // if (!authorValid.length == 0) {
    //     return authorValid
    // }

}


    export {validateInput, isInvalid}

