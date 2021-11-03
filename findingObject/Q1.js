function searchItem(item, searchingNumber) {
    for (let key in item){
        if (typeof item[key] === 'object'){
            searchItem(item[key], searchingNumber);
        }
        else if (typeof item[key] === 'number' && item[key] === searchingNumber){
            console.log("TRUE")
        }
    }
}

const input =  {
    d: {
        c: {
            b: {
                a: {
                    number: 30,
                    str: 'hi'
                }
            }
        }
    }
}


searchItem(input,30)



