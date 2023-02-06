//Api random 
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then((data) => {

  console.log(data)

  const user = data.results[0];
  const name = `${user.name.first} ${user.name.last}`; 
  const age = user.dob.age; 
  const phone = user.cell;
  const city = `${user.location.city} ${user.location.country}`; 
  const email = user.email; 
  const img = user.picture.medium;
  const nameh = user.name.first; 

  const fullnombre = document.getElementById('fullname')
  fullnombre.innerHTML = `${name}`

  const titlename = document.getElementById('logo')
  titlename.innerHTML = `${name}`

  const edad = document.getElementById ('edad')
  edad.innerHTML = `${age}`

  const cell = document.getElementById('celular')
  cell.innerText = `${phone}`

  const direccion = document.getElementById('ciudad')
  direccion.innerHTML = `${city}`

  const correo = document.getElementById('email')
  correo.innerHTML = `${email}`

  const imagen1 = document.getElementById('img')
  imagen1.innerHTML = `<img src="${img} " class="img-fluid rounded-circle mw-100" alt="profile-pic" width="400"
  height="400">`

  const imagen2 = document.getElementById('img2')
  imagen2.innerHTML = `<img src="${img}" alt="" class="rounded-circle mw-100" alt="profile-pic" width="100"
  height="100">`
  
  const namehome= document.getElementById('homename')
  namehome.innerHTML = `${nameh}`
  
  })