let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

const serviceID = "service_7rgik59";
const templateID = "template_jaswid2";

let clientName = document.querySelector("#clientName");
let clientEmail = document.querySelector("#clientEmail");
let clientMessage = document.querySelector("#clientMessage");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = clientName.value;
  let email = clientEmail.value;
  let message = clientMessage.value;
 
  console.log(serviceID, templateID, {
    name,
    email,
    message,
  })

  emailjs.send(serviceID, templateID, {
    name,
    email,
    message,
  }).then((response) => {
    if(response.text==='OK'){
      alert("Message sent successfully")
    }else{
      alert("Error Occured Please Contact me through email")
    };
  }).catch((error) => {
    alert("Error Occured Please Contact me through email")
  });
});

function closeMenu() {
  sideMenu.style.right = "-120px";
}

uploadSkills();

function openResume() {
  window.open(
    "https://drive.google.com/file/d/1fNp6Hs_BnTyJ8irjtbHlPhkTkV_qJxzC/view?usp=share_link"
  );
}

function uploadSkills() {
  let dataSkills = [
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
      title: "HTML",
    },
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",
      title: "CSS",
    },
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
      title: "JavaScript",
    },
    {
      img: "img/typescript.png",
      title: "TypeScript",
    },
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
      title: "ReactJS",
    },
    { img: "img/nextjs-boilerplate-logo.png", title: "NextJS" },
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
      title: "Redux",
    },
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
      title: "NodeJS",
    },
    { img: "img/expressJs.png", title: "ExpressJS" },
    
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
      title: "MongoDB",
    },
    {
      img: "https://www.svgrepo.com/show/330247/cypress.svg",
      title: "Cypress",
    }
    ,
    {
      img: "https://chiranjeev-thapliyal.vercel.app/svg/git.svg",
      title: "Git",
    },
    {
      img: "img/getpostman.svg",
      title: "Postman",
    }
  ];
  let skills_learnedlist = document.getElementById("skills_learnedDiv");

  dataSkills.map((skill) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("h3");

    title.innerText = skill.title;
    image.setAttribute("src", skill.img);

    div.append(image, title);
    skills_learnedlist.append(div);
  });
}
