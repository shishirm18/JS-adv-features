let url = "http://universities.hipolabs.com/search?name=India";
let btn = document.querySelector("button");
let ul = document.querySelector("#coll");

// fetch the college names for India
async function getColleges(){
    let res = await axios.get(url);
    return res.data;
}

// Adding click event listeners for button
btn.addEventListener("click", async () => {
    ul.innerText = "";
    inpState = document.querySelector("input").value;
    let res = await getColleges();
    resList = res.filter((re) => {
        if(re['state-province'] == inpState){
            return re;
        }
    })
    displayColleges(resList);
})

// Helper fn for displaying
function displayColleges(colArr){
    for(col of colArr){
        let li = document.createElement('li');
        li.innerText = col.name;
        ul.appendChild(li);
    }
}
