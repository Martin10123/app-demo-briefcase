import todo from "../images/TodoApp/aaa.png";
import hotels from "../images/Hotels/App-heores (19).png";
import appMine from "../images/NotesMine/Captura.JPG";
import appCars from "../images/CarsDemo/Captura.JPG";
import appGifos from "../images/AppGifs/a.png";
import calendarApp from "../images/Calendar/App-heores (55).png";
import appHeroes from "../images/AppHeroes/App-heores (57).png";
import devsUnited from "../images/DevsUnited/App-heores (7).png";

export const dataApps = [
  {
    id: 1,
    status: "Complete",
    testing: "in process",
    title: "Mini Twitter",
    tools: ["React", "Firebase", "Git", "Github"],
    desc: "This app is a replica of how Twitter works, you can write a tweet, delete your tweet, see the posts of other users and you can like and save them as a favorite. In your profile you can see the tweets you have written and you can find the tweets you have liked easily.",
    img: devsUnited,
    web: "https://fir-devs-united.web.app/register",
    github: "https://github.com/Martin10123/Devs_united",
    hosting: "Firebase hosting",
  },
  {
    id: 2,
    status: "Complete",
    testing: "in process",
    title: "App To Gifos",
    tools: ["React", "Firebase", "Git", "Github", "Api - Giphy-developer"],
    desc: "This was one of the first applications I made, it was a challenge for me as it had to consume an API. This app helps you search for gifs quickly and easily, you can click on the image and it takes you directly to the original page of the gif.",
    img: appGifos,
    web: "https://martin10123.github.io/gifs/",
    github: "https://github.com/Martin10123/gifs",
    hosting: "Github pages",
  },
  {
    id: 3,
    status: "Complete",
    testing: "in process",
    title: "App to Note",
    tools: ["React", "Redux", "Firebase", "Git", "Github", "Cloudinary"],
    desc: "This app is about writing notes, thoughts or even appointments that you want to remember later. In this app you can delete, upload a photo and modify the written note.",
    img: appMine,
    web: "https://sql-demos10.web.app/auth",
    github: "https://github.com/Martin10123/Notes-App",
    hosting: "Firebase hosting",
  },
  {
    id: 4,
    status: "Complete",
    testing: "in process",
    title: "Calendar App",
    tools: [
      "React",
      "Redux",
      "Express",
      "MongoDB",
      "Heroku",
      "Git",
      "Github",
      "Otras dependencias",
    ],
    desc: "This app is about a calendar, in which you can write an event, modify that event and delete that event. It is a very useful app as it helps you organize your events by adding a start and end date.",
    img: calendarApp,
    web: "https://calendar-backend-martin.herokuapp.com",
    github: "https://github.com/Martin10123/Calendar_App",
    hosting: "Heroku",
  },
  {
    id: 5,
    status: "Complete",
    testing: "in process",
    title: "Cars - Demo",
    tools: ["React", "Redux", "Firebase", "Git", "Github"],
    desc: "This is a demo of a car agency, it is still under construction because it has many more features that need to be added, in this app you can promote cars, sell them and buy cars. You can look at its characteristics, the owner of the car and its data, you can communicate with the seller directly to consult details. You can see the best-selling cars, the most expensive, the cheapest, their year, their price among other options.",
    img: appCars,
    web: "https://martin10123.github.io/cars-demo/",
    github: "https://github.com/Martin10123/cars-demo",
    hosting: "Github pages",
  },
  {
    id: 6,
    status: "in process",
    testing: "in process",
    title: "Todo App",
    tools: ["React", "Redux", "Firebase", "Git", "Github"],
    desc: "This is an App that contains two options, it gives you the option to write a note or a task. She created this when she was just beginning to learn redux, to fine-tune concepts. You can review your profile and there you can see the notes and tasks you saved, it will give you the option to make them private. You can see your profile and even modify it.",
    img: todo,
    web: "",
    github: "https://github.com/Martin10123/Todo_App",
    hosting: "",
  },
  {
    id: 7,
    status: "Complete",
    testing: "Complete",
    title: "Heroes App",
    tools: ["React", "Firebase", "Git", "Github"],
    desc: "This is an app where you can see your favorite hero and look at his characteristics.",
    img: appHeroes,
    web: "https://martin10123.github.io/app-heroes/",
    github: "https://github.com/Martin10123/app-heroes",
    hosting: "Github pages",
  },
  {
    id: 8,
    status: "Complete",
    testing: "in process",
    title: "Hotels",
    tools: ["React", "Git", "Github"],
    desc: "This was my first application created with React, it really cost me a lot, everything was new to me, but with help I was able to do it and from there I began to understand several concepts. This app gives you the option to search for hotels in different countries, either by price, size and country.",
    img: hotels,
    web: "https://martin10123.github.io/app-hotels/",
    github: "https://github.com/Martin10123/app-hotels",
    hosting: "Github pages",
  },
];
