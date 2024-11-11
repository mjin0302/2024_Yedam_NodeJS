// 10_async_await.js

// 함수 내부는 동기식이 맞음
//
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

// 함수자체는 동기식이 맞으나 밖에서 보면 비동기 작업이다.
console.log(getPostInfo());
console.log("코드 종료");