  //this function validates the input of the grid name to make sure it is un
    function isEmpty(str) {
        return str.length === 0;
    }
  export const validateInput = (input) => {
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
