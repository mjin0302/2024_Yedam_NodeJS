// 10_async_await.js

async function getPostInfo() {
   let postList = await fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json());

   let postId = postList[0].id;
   let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                     .then(res => res.json());
   
   let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                           .then(res => res.json());
   post.comments = commentList;
   console.log(post)
}

console.log(getPostInfo());