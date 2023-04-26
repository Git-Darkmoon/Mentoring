const data = [
  {
    index: 0,
    img: "https://i.pinimg.com/474x/44/67/4a/44674a81a917f4367a6fb62d75aa33ac.jpg",
    person: "Susan Smith",
    job: "Web Developer",
    info: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus.",
  },
  {
    index: 1,
    img: "https://i.pinimg.com/564x/6b/95/01/6b9501905d858837e8258c474c1f99c5.jpg",
    person: "Peter Jones",
    job: "Sofware Engineer",
    info: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. ",
  },
  {
    index: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5ZYjLInYuCW1adDmP3nPeYu9-1u2ggh_TQ&usqp=CAU",
    person: "Anna Fox",
    job: "UX Designer",
    info: "Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.",
  },
  {
    index: 3,
    img: "https://i.pinimg.com/736x/49/07/87/490787ec7e4d6681796bf04e31a29c61.jpg",
    person: "Sarah Wizlow",
    job: "Ethical Hacker",
    info: "Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada.",
  },
]

const wrapper = document.getElementById("wrapper")

function generateCards(dataArray) {
  dataArray.map((eachElement) => {
    console.table(eachElement)

    // Object Destructuring === Arrays Destructuring

    const { img, person, job, info } = eachElement

    wrapper.innerHTML += `
    <div class="card">
        <div>
          <img
            src="${img}"
            alt=""
          />
        </div>
        <h2>${person}</h2>
        <h5>${job}</h5>
        <p>
            ${info}
        </p>
      </div>
      `
  })
}

generateCards(data)

/* 
    BASICS:
        - vars.
        - data type.
        - data structure.
        - array methods.
        - Plata.
    DOM:
        - classlist.
        - domElements.
        - events.
        - innerHTML.
        - localeStorage ❌
    POO:
        - objects
        - Classes
    Asynchronism:
        - setTimeOut()
        - setInterval()
        - clearInterval()
        - fetch()
    Error Handling (Toastify):

    Projects (6)
    Final Project:
        -   WebApp fetching REST Api, responsive, design patterns, CSS Variables.
        
*/
