//formulaire sert à etre 1 élément de quizz
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("ok")

   //Script de test
   let login = document.getElementsByName("login")//getelementbytagname("")[0,1,2,3]
   //vider les champs
   //verifier mdp est remplie
   let mdp = document.getElementsByName("password") 
   console.log(login[0].value="") 
   //condition pour vérifier si le champs login est remplie

   let btn = document.getElementsByTagName("input")[2]
   //event document
   let warning = document.querySelector('section:nth-child(2) p')
    let form = document.querySelector(".form")
    let btn_form = document.querySelector("section a")
    let checked = document.querySelector("section h2")

    //objet a verifier
   let User =({
        username : "admin@gmail.com",
        password : 3615
    })
    console.log(typeof User.password)

   //event
   btn.addEventListener("click",(event)=>{
       event.preventDefault()
       if(login[0].value == User.username && parseInt(mdp[0].value) === User.password){
           warning.style.display="block"
           warning.classList.add("success")
           warning.innerText = `${User.username} vous êtes connecté`
       }
       else{
           warning.style.display="block"
           warning.classList.add("warning")
       }
       event.stopPropagation()
   })
   //verifier le bon login un mail expression reg et mdp

   login[0].addEventListener("click",()=>{
       login[0].value=""
   })
   btn_form.addEventListener("click",()=>{
       form.classList.toggle("appear")
       checked.classList.toggle("checked")
   })
   console.log(document.styleSheets[0])

})
