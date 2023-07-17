console.log("JS START")

const posts =[{title: 'BLOG1'}];
var interval;
function createPost(post) {
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


function deleteBlog(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    })
}
function getPost() {
    setTimeout( () => {
        posts.forEach((post) => {
            console.log(post.title);
             
        })
    }, 1000);

}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },100)
        
    })
}



Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()]).then(getPost)

