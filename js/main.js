const elbox = document.querySelector(".box")

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => rendercountr(data))
.catch((error) => console.log(error.message))

 function rendercountr(data) {

   data.forEach((post) => {
    const html = `
    <article>
    <h2>id: ${post.id}</h2>
    <h2>title: ${post.title}</h2>
    <h2>body: ${post.body}</h2>
    </article>
    `
    elbox.insertAdjacentHTML("beforeend",html)
   });
}
rendercountr()

