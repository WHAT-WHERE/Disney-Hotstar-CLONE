let movies = [
  {
    name: "Doctor Strange in the Multiverse of Madness",
    des:
      "When the multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
    image: "images/Doctor Strange.png"
  },
  {
    name: "Ms.Marvel",
    des:
      "Kamala Khan, a Muslim American teen growing up in Jersey City, is a Superhero mega fan who discovers she has super powers.",
    image: "images/Ms.Marvel.png"
  },
  {
    name: "Obi-Wan Kenobi",
    des:
      "During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission.",
    image: "images/Obi-Wan Kenobi.png"
  },
  {
    name: "Link: Eat, Love, Kill",
    des:
      "When Eun Gye-hoon moves back to a familiar town, he finds himself experiencing strange emotions and realises he shares a conections with  a woman who lives there.",
    image: "images/Link.png"
  },
  {
    name: "Kiss Sixth Sense",
    des:
      "Hong Ye-sool, an account executive at Zeu Ad, is making her way up at work, However, she has one secret: she can see the future when she kisses someone.",
    image: "images/Kiss.webp"
  },
  {
    name: "Doctor Lawyer",
    des:
      "Genius surgeon Han Yi-han makes a life-altering decision to become a lawyer specialising in medical crimes afer losing a patient to surgical malpractice",
    image: "images/Doctor-Lawyer.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

// funtion for creating slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement('div');
  var imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  // attaching all elements

  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
      }px)`;
  }
}

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// Card Sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  })

  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  })
})
