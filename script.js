

const sideMenu = document.getElementById("sideMenu");

const openMenu = () => 
{
  sideMenu.style.right = "0";
}

const serviceID = "service_7rgik59";
const templateID = "template_jaswid2";

const clientName = document.querySelector("#clientName");
const clientEmail = document.querySelector("#clientEmail");
const clientMessage = document.querySelector("#clientMessage");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => 
{
  e.preventDefault();

  const name = clientName.value;
  const email = clientEmail.value;
  const message = clientMessage.value;

  emailjs.send(serviceID, templateID, 
  {
    name,
    email,
    message,
  }).then((response) => 
    {
    if (response.text === 'OK') 
    {
      alert("Message sent successfully")
    } else 
    {
      alert("Error Occured Please Contact me through email")
    };
  }).catch((error) => 
  {
    alert("Error Occured Please Contact me through email")
  });
});

const closeMenu = () => 
{
  sideMenu.style.right = "-120px";
}


const openResume = () => 
{
  window.open(
    "https://drive.google.com/file/d/1fNp6Hs_BnTyJ8irjtbHlPhkTkV_qJxzC/view?usp=share_link"
  );
}

const uploadSkills = () => 
{
  const dataSkills = [
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
    {
      img: "https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail-1.webp",
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
  const skills_learnedlist = document.getElementById("skills_learnedDiv");

  dataSkills.map((skill) => 
  {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h3");

    title.innerText = skill.title;
    image.setAttribute("src", skill.img);

    div.append(image, title);
    skills_learnedlist.append(div);
  });
}

const handlePortfolioTitle = () => 
{
  const portfolioTitle = document.querySelector('#portfolio-title')
  const defaultTitle = 'Sagar'
  console.log(document['hidden'],135)
  if (typeof document.hidden !== "undefined") 
  {

    const handleVisibilityChange = () => 
    {
      console.log(document['hidden'])
      if (document['hidden']) 
      {
        portfolioTitle.innerText = 'The One U R Looking For'
      } else 
      {
        portfolioTitle.innerText = defaultTitle
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange, false);
  } else 
  {
    // Page Visibility API is not supported
    portfolioTitle.innerText = defaultTitle
  }
}

uploadSkills();
handlePortfolioTitle();


const addProjects = () => 
{

  const projects_made__worklist = document.querySelector('.projects_made__worklist')

  const projects = [{
    image: 'img/fashionHunter.png',
    title:'Fashion Hunter',
    repoLink:'https://github.com/MythOfSagar/fashion_hunter_project',
    deployedLink:'https://fashion-hunter.netlify.app',
    techStack:'React | Redux | Chakra UI | ExpressJS | MongoDB',
    desc:`Fashion Hunter is an e-commerce website,
    on which I have developed
    admin page and a payment page.`
  }];

  projects.forEach(({image,title,deployedLink,desc,techStack,repoLink}) => {
    const el = 
    document.createElement('div').innerHTML =
    `<div class="individualProjects">
    <div class="projects_made__worklist-work">
      <img src="${image}" alt="${title}" />
      <div class="projects_made__worklist-layer">
        <h2>${title}</h2>
      </div>
    </div>
    <div class="projectIcons">
      <a title="Click to view Source Code" href="${repoLink}" target="_blank"><i
          class="fa-brands fa-github"></i></a>
      <h2>${title}</h2><a title="Click to Visit Website" href="${deployedLink}" target="_blank"><i
          class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    <h4>${desc}</h4>
    <h4><span>Tech Stack:</span>${techStack}</h4>
  </div>`

  projects_made__worklist.append(el)
  })

 
}

// addProjects()