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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png",
      title: "TypeScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
      title: "JavaScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
      title: "React",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      title: "Angular",
    },
    { img: "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail-1.webp", 
      title: "NextJS" 
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
      title: "HTML",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png",
      title: "CSS",
    },
    {
      img: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      title: "Redux",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png",
      title: "NodeJS",
    },
    { img: "img/expressJs.png", title: "ExpressJS" },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb-svgrepo-com.svg/640px-Mongodb-svgrepo-com.svg.png",
      title: "MongoDB",
    },
    {
      img: "https://www.svgrepo.com/show/330247/cypress.svg",
      title: "Cypress",
    }
    ,
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Git_format.png/640px-Git_format.png",
      title: "Git",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/postman.svg",
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
