let url = "http://universities.hipolabs.com/search?name=India";
let btn = document.querySelector("button");
let ul = document.querySelector("#coll");

// fetch the college names for India
async function getColleges(){
    let res = await axios.get(url);
    return res.data;
}

btn.addEventListener("click", async () => {
    let res = await getColleges();
    console.log(res);
    for(re of res){
        let li = document.createElement('li');
        li.innerText = re.name;
        ul.appendChild(li);
    }

})

