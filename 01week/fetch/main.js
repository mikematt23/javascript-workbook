window.onload = function(){
  console.log("window loaded")
  getPosts()
}


let getPosts = function(){
  console.log("inside the post method about t make a request")
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(function(response){
      console.log("fetch is done")
      return response.json()
    }) 
    .then(function(data){
      console.log("Got my data.length =",data.length)
      data.forEach(updateHtml)
    })
  console.log("Request sent off....")
}


let updateHtml = function(post){
  console.log("updating the hmtl post =", post)
  let postUl= document.getElementById("posts")
  let postLi = document.createElement("Li")
  postLi.innerText = post.title;
  postUl.appendChild(postLi)

  let userId = post.userId;
  let userSpan = document.createElement("span");
  userSpan.innerText = "  - by"+userId
}
