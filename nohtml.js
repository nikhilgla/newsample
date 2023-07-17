console.log("JS START")

const posts =[{title: 'BLOG1'}];

// function createPost(post) {
//     setTimeout( () => {
//         post.createdAt = new Date().getTime();
//         posts.push(post);
//     }, 1000)
// }
async function createPost(post){
    setTimeout( () => {
        post.createdAt = new Date().getTime();
        posts.push(post);
    }, 1000)
}
//Do not touch these functions below at all
// function create1stBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG1'});
//             resolve();
//         }, 3000)
//     }) 
// }

//Do not touch these functions below at all
// function create2ndBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG2'});
//             resolve()
//         }, 2000)
//     }) 
// }


// function deleteBlog(){
//    //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//    //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR")
//             }
//         }, 1000)
//     })
// }
function getPost() {
    setTimeout( () => {
        posts.forEach((post) => {
            console.log(post.title);
             
        })
    }, 1000);

}

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve()
//         },100)
        
//     })
// }



// Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()]).then(getPost)

console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  const getColdDrinks = new Promise((resolve,reject) => {
        setTimeout(() => resolve('coldDrink'),3000);
  })

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);

  let coldDrink = await getColdDrinks;
  console.log(`added ${coldDrink}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
