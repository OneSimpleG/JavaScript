const dropdown = document.createElement("select")
dropdown.className="MainDropdown"
const mainOptions = ["Select one","Directors","Films"]
for(let i of mainOptions){
    const option = document.createElement("option")
    option.innerText=i
    option.className=i.split(" ").join("")
    dropdown.append(option)
}
function formCreate(list){
    const form = document.createElement("form")
    form.className="Form"
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.width="250px"
    for(let j of list){
        const label = document.createElement("label")
        label.innerText=`${j}:`
        const input = document.createElement("input")
        input.type="text"
        input.className=j.split(" ").join("")
        form.append(label,input)
    }
    document.body.append(form)
}
function clearForms(){
    const formRemove = document.querySelectorAll(".Form")
    formRemove.forEach(el=>el.remove())
}
dropdown.addEventListener("change",(event)=>{
    const selectedOption = event.target.value
    const selectOne = document.querySelectorAll(".Selectone")
    selectOne.forEach(el=>el.remove())
    const removeSecondaryDropdown = document.querySelectorAll(".SecondaryDropdown")
    removeSecondaryDropdown.forEach(el=>el.remove())
    const secondaryDropdown = document.createElement("select")
    secondaryDropdown.className = "SecondaryDropdown"
    document.body.append(secondaryDropdown)
    const submitRemove = document.querySelectorAll(".Submit")
    submitRemove.forEach(el=>el.remove())
    const submit = document.createElement("button")
    submit.innerText="Submit"
    submit.className="Submit"
    document.body.append(submit) 
    const secondaryOptions = ["Create","Get All","Get One","Update","Delete"]
    clearForms()
    if(selectedOption=="Directors"){
        console.log("You wish to add a director?");
        for(let j of secondaryOptions){
            const option = document.createElement("option")
            option.innerText=j
            option.className=j.split(" ").join("")
            secondaryDropdown.append(option)
        }
    }else if(selectedOption=="Films"){
        console.log("Do you want to add a Film?");
        for(let j of secondaryOptions){
            const option = document.createElement("option")
            option.innerText=j
            option.className=j.split(" ").join("")
            secondaryDropdown.append(option)
        }
    }

    secondaryDropdown.addEventListener("change",(secondEvent)=>{
        clearForms()
    })

    submit.addEventListener("click",(event)=>{
        clearForms()
        const primaryValue = document.querySelector(".MainDropdown").value.toLowerCase()
        const secondaryValue = document.querySelector(".SecondaryDropdown").value
        switch (secondaryValue){
            case 'Get All':
                async function getAll(){
                    const response = await fetch(`http://localhost:8000/api/${primaryValue}`)
                    const result = await response.json()
                    console.log(...result);
                }
                getAll()
                break
            case `Get One`:
                const getOneLabels = ["id"]
                formCreate(getOneLabels)
                const getOneSubmit = document.createElement("button")
                getOneSubmit.innerText="submit"
                document.querySelector(".Form").append(getOneSubmit)
                getOneSubmit.addEventListener("click",(event)=>{
                    event.preventDefault()
                    let id = document.querySelector(".id").value
                    async function getOne(){
                        const response = await fetch(`http://localhost:8000/api/${primaryValue}/${id}`)
                        const result = await response.json()
                        console.log(result);
                    }
                    getOne()
                })
                break
            case 'Create':
                clearForms()
                let createLabels = ["First Name","Last Name","Age"]
                if(primaryValue!="directors"){
                    createLabels = ["Title","Film Director","Lenght","Year","Description"]
                }
                formCreate(createLabels)
                const createSubmit = document.createElement("button")
                createSubmit.innerText="submit"
                document.querySelector(".Form").append(createSubmit)
                createSubmit.addEventListener("click",(event)=>{
                    event.preventDefault()
                    console.log("form submited");
                    async function create(){
                        if(primaryValue=="directors"){
                            const response = await fetch(`http://localhost:8000/api/${primaryValue}`,{
                                method: "POST",
                                body: JSON.stringify({
                                    firstName: document.querySelector(".FirstName").value,
                                    lastName: document.querySelector(".LastName").value,
                                    age: parseInt(document.querySelector(".Age").value)
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                        }else{
                            const response = await fetch(`http://localhost:8000/api/${primaryValue}`,{
                                method: "POST",
                                body: JSON.stringify({
                                    title: document.querySelector(".Title").value,
                                    filmDirector: document.querySelector(".FilmDirector").value,
                                    lenght: document.querySelector(".Lenght").value,
                                    year: document.querySelector(".Year").value,
                                    description: document.querySelector(".Description").value
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                        }
                    }
                    create()
                })
                break
            default:
                console.log(`not done`);
        }
    })
})
document.body.append(dropdown)

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 1,
//     title: "Fix my bugs",
//     completed: false
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// });