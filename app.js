let users=[]
function getId(posts) {
    const idSet = new Set(posts.map(el=>el.id))
    const id=Array.from(idSet)
   const selectElement= document.querySelector("#select")
    selectElement.innerHTML = `<option >select id </option>`
    id.forEach(el=>{
    selectElement.innerHTML +=
        `<option value="${el}">${el}</option>`
    })  
}
function handleChange(e) {
    console.log(e.target.value);
    const filterData =posts.filter(el=>el.id==e.target.value)
    // document.querySelector("row1").innerHTML =""
    getData(filterData)   
}

function getData(data) {
    let data1=""
    data.map((value)=>{
        let tags=""
        for(const key in value.tags){
            if(value.tags.hasOwnProperty(key))
                {
                    tags +=`<span class="tag">${value.tags[key]}</span>`
                }
        }
        data1 += `  <div class="col-md-4">
                    <div id="cards">
                        <div class="card">
                            <p>${value.id}</p>
                            
                        <h1 class="title">${value.title}</h1>

                            <p>${value.body}</p>
                               <div class="tags">tags:${value.tags}</div>
                            <p 
                            <p class="price">Likes:${value.reactions.likes}</p>
                            <p class="price">Dislikes:${value.reactions.dislikes}</p>
                            <p class="price">Views:${value.views}</p>
                            <p class="price">User ID: ${value.userId}</p>
                            
                        </div>
                    </div>  
                </div>`
    })
    document.querySelector(".row1").innerHTML =data1   
}
fetch("https://dummyjson.com/posts")
.then((res)=>res.json())
.then((data)=>{
    posts=data.posts
    getData(posts)
    getId(posts)   
})