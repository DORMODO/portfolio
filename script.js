const skillsList = document.querySelector(".skills__list");

const allButton = document.querySelector("button[data-type='all']");
const frontendButton = document.querySelector("button[data-type='frontend']");
const backendButton = document.querySelector("button[data-type='backend']");
const filterButtons = [allButton, frontendButton, backendButton];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    skillsList.className = "skills__list"; // Reset class name
    skillsList.classList.add(button.dataset.type); // Add relevant class
    skillsItems.forEach((skill) => skill.classList.remove("underline"));
  });
});

const skillsArray = [
  { name: "HTML", experience: "2013", type: "frontend" },
  { name: "CSS", experience: "2013", type: "frontend" },
  { name: "Javascript", experience: "2013", type: "frontend" },
  { name: "React", experience: "2016", type: "frontend" },
  { name: "Redux", experience: "2017", type: "frontend" },
  { name: "React Testing Library", experience: "2020", type: "frontend" },
  { name: "Node.js", experience: "2020", type: "backend" },
  { name: "Express.js", experience: "2020", type: "backend" },
  { name: "MongoDB", experience: "2020", type: "backend" },
];

const currentYear = new Date().getFullYear();

skillsArray.forEach((skillData) => {
  const skill = `
    <li 
      class = "skills__item"
      data-type = "${skillData.type}"
      data-name = "${skillData.name}"
    >
      <h2 class="skills__title">
          ${skillData.name}
      </h2>
      <span class="skills__years">
          ${currentYear - skillData.experience} years
      </span>
    </li>`;

  skillsList.innerHTML += skill;
});

const skillsButton = document.querySelectorAll(".skills__button");

skillsButton.forEach((button) => {
  button.addEventListener("click", () => {
    skillsButton.forEach((skill) =>
      skill.classList.remove("skills__button--isActive")
    );
    button.classList.add("skills__button--isActive");
  });
});

const skillsItems = document.querySelectorAll(".skills__item");

skillsItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("underline")) {
      item.classList.remove("underline");
    } else {
      skillsItems.forEach((skill) => skill.classList.remove("underline"));
      item.classList.add("underline");
    }
  });
});

const submitButton = document.querySelector(".contact__button");
const inputs = document.querySelectorAll(".contact__input");

inputs.forEach((item) => {
  if (item.tagName !== "TEXTAREA") {
    item.addEventListener("keydown", (event) => {
      if (event.key === "_") {
        event.preventDefault();
        alert("Text don't contain '_'");
      }
    });
  }
});

inputs.forEach((item) => {
  item.addEventListener("focus", () => item.classList.add("border-blue"));
  item.addEventListener("blur", () => item.classList.add("border-red"));
});
