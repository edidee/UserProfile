function fullName(user) {
  let names = `${user.name.title}  ${user.name.first}  ${user.name.last} `;
  return names;
}

function address(user) {
    let locate = `${user.location.city} ${user.location.state} , ${user.location.country}`;
    return locate; 
}

function fetchData() {
  fetch("https://randomuser.me/api/?results=6")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((info) => {
      console.log(info.results);
      const html = info.results
        .map((user) => {
          return `
            <div class='user shadow-lg col-lg-3'>
            <div class='photo'>
            <img src='${user.picture.medium}' alt='${fullName(user)}' />
            <h6> ${fullName(user)}</h6>
            </div>
            <div class='info'>
            <p>Phone no: ${user.cell} </p>
            <p>Location: ${address(user)} </p>
            <p>Gender: ${user.gender} </p>
            <p>Age: ${user.dob.age} </p>

            </div>
            </div>
            `;
        })
        .join("");
      console.log(html);

      document.getElementById("parent").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
