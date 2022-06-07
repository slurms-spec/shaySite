// const fetchPromise = fetch('https://dog.ceo/api/breeds/image/random')

// console.log(fetchPromise)


// async function getACuteDogPhoto(){
//     try{ 
//     const response = await fetch('https://dog.ceo/api/breeds/image/random')
//     if(!response.ok){
//         throw new Error(`HTTP erro: ${response.status}`)
//     }

//     const data = await response.json()
//     console.log(data)

  
//     }

//     catch(error){
//         console.error(`Could not get products: ${error}`)
//     }
// }

// getACuteDogPhoto()

const promise = fetch('https://dog.ceo/api/breeds/image/random')

promise
    .then(res => res.json())
    .then(user => console.log('yay'))
    .catch(err => console.lerror('boo', err))


