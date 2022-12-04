let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-120px";
}


uploadSkills()














function uploadSkills(){
let dataSkills=[
{img:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg","title":"HTML 5"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/css3.svg","title":"CSS 3"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg","title":"Javascript"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg","title":"React.JS"},
{img:"img/nextjs-boilerplate-logo.png","title":"Next.JS"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg","title":"Node.JS"},
{img:"img/expressJs.png","title":"Express.JS"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg","title":"Redux"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg","title":"MongoDB"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg","title":"Material UI"},
{img:"https://chiranjeev-thapliyal.vercel.app/svg/git.svg","title":"Git"}
]
let serviceslist=document.getElementById("servicesDiv")
  
  dataSkills.map((skill)=>{
    let div=document.createElement("div")
    let image=document.createElement("img")
    let title=document.createElement("h3")

    if(skill.title==="Next.JS" || skill.title==="Express.JS"){
    image.setAttribute("style","margin-bottom:35px")
    title.setAttribute("class","express-next")
  }

    title.innerText=skill.title
    image.setAttribute("src",skill.img)

    div.append(image,title)
    serviceslist.append(div)
  })
}
