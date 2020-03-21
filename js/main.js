//Variabler
const urlE = 'http://localhost/projekt/api/education.php/education/';
const urlP = 'http://localhost/projekt/api/projects.php/projects/';
const urlW = 'http://localhost/projekt/api/work.php/work/';
const workForm = document.getElementById('work-form');
const educationForm = document.getElementById('education-form');
const projectForm = document.getElementById('project-form');

const addWForm = document.getElementById('add-work');
const addEForm = document.getElementById('add-education');
const addPForm = document.getElementById('add-project');

const workList = document.getElementById('work-list');
const educationList = document.getElementById('education-list');
const projectList = document.getElementById('project-list');

//Eventlisteners
window.addEventListener('load', fetchData());

// _____________________________________________________________________________
//Laddar in all data
// _____________________________________________________________________________

function fetchData() {
  showWork();
  showEducation();
  showProjects();
}
// _____________________________________________________________________________
//EDUCATION
// _____________________________________________________________________________

function showEducation() {
  fetch(urlE)
    .then(res => res.json())
    .then(data => {
      let output = '';

      data.forEach(e => {
        output += `<tr>
          <td>${e.dates}</td>
          <td>${e.school}</td>
          <td>${e.program}</td>
          <td><a onclick="updateEducation(${e.id})" class="update"><i class="fa fa-pencil"></i></a></td>
          <td><a onclick="deleteEducation(${e.id})" class="delete"><i class="fa fa-trash"></i></a></td>
        </tr>`;
      });
      educationList.innerHTML = output;
    });
}

// _____________________________________________________________________________
//Add
// _____________________________________________________________________________

function addEducation() {
  let output = '';
  output += `<div class="col">
            <input type="text" id="e-date" class="form-control" placeholder="ÅÅÅÅ-MM - ÅÅÅÅ-MM">
            </div>
            <div class="col">
            <input type="text" class="form-control" id="e-school" placeholder="Skola">
            </div>

            <div class="col">
            <input type="text" class="form-control" id="e-program" placeholder="Program">
            </div>

             <a id="work-submit" onclick="newEducation()" class="btn btn-primary"/>Spara</a>
            `;

  addEForm.innerHTML = output;
}

function newEducation() {
  let date = document.getElementById('e-date').value;
  let school = document.getElementById('e-school').value;
  let program = document.getElementById('e-program').value;

  fetch(urlE, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*'
      // "Content-type": "application/json"
    },
    body: JSON.stringify({
      dates: date,
      school: school,
      program: program
    })
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of add-function
// _____________________________________________________________________________

// _____________________________________________________________________________
//Update
// _____________________________________________________________________________

function updateEducation(education) {
  let id = education;

  let url = urlE + id;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = '';

      data.forEach(input => {
        output += `<div class="col">
            <input type="text" id="input-dates" class="form-control" placeholder="ÅÅÅÅ-MM - ÅÅÅÅ-MM" value="${input.dates}">
            </div>
            <div class="col">
            <input type="text" class="form-control" id="input-school" placeholder="Skola" value="${input.school}">
            </div>

            <div class="col">
            <input type="text" class="form-control" id="input-program" placeholder="Program" value="${input.program}">
            </div>

            <a id="education-update" onclick="sendEducation(${input.id})" class="btn btn-primary"/>Spara</a>`;
      });
      educationForm.innerHTML = output;
    });
}
function sendEducation(id) {
  const inputDates = document.getElementById('input-dates').value;
  const inputSchool = document.getElementById('input-school').value;
  const inputProgram = document.getElementById('input-program').value;

  let jsonStr = JSON.stringify({
    id: id,
    dates: inputDates,
    school: inputSchool,
    program: inputProgram
  });

  fetch(urlE, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain, */*'
      // "Content-type": "application/json"
    },
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}
// _____________________________________________________________________________
//End of update functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//Delete
// _____________________________________________________________________________

function deleteEducation(id) {
  let jsonStr = JSON.stringify({
    id: id
  });
  fetch(urlE, {
    method: 'DELETE',
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => fetchData(data))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of delete functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//PROJECTS
// _____________________________________________________________________________

function showProjects() {
  fetch(urlP)
    .then(res => res.json())
    .then(data => {
      let output = '';

      data.forEach(project => {
        output += `<div class="card">
          <img class="card-img-top" src="${project.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <a onclick="updateProject(${project.id})" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
            <a onclick="deleteProject(${project.id})" class="btn btn-primary"><i class="fa fa-trash"></i></a>
          </div>
        </div>`;
      });
      projectList.innerHTML = output;
    });
}
// _____________________________________________________________________________
//Add
// _____________________________________________________________________________

function addProject() {
  let output = '';
  output += `<div class="col">
              <input type="text" id="p-image" class="form-control" placeholder="BildURL">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="p-title" placeholder="Titel">
              </div>

              <div class="col">
              <input type="text" class="form-control" id="p-description" placeholder="Beskrivning">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="p-url" placeholder="URL">
              </div>
               <a id="work-submit" onclick="newProject()" class="btn btn-primary"/>Spara</a>
              `;

  addPForm.innerHTML = output;
}

function newProject() {
  let image = document.getElementById('p-image').value;
  let title = document.getElementById('p-title').value;
  let description = document.getElementById('p-description').value;
  let pUrl = document.getElementById('p-url').value;

  fetch(urlP, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*'
      // "Content-type": "application/json"
    },
    body: JSON.stringify({
      image: image,
      title: title,
      description: description,
      url: pUrl
    })
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of add-function
// _____________________________________________________________________________

// _____________________________________________________________________________
//Update
// _____________________________________________________________________________

function updateProject(project) {
  let id = project;

  let url = urlP + id;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = '';

      data.forEach(input => {
        output += `<div class="col">
              <input type="text" id="input-image" class="form-control" placeholder="Bild" value="${input.image}">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="input-title" placeholder="Titel" value="${input.title}">
              </div>

              <div class="col">
              <input type="text" class="form-control" id="input-description" placeholder="Beskrivning" value="${input.description}">
              </div>
              <div class="col">
              <input type="text" class="form-control" id="input-url" placeholder="URL" value="${input.url}">
              </div>

              <a id="education-update" onclick="sendProject(${input.id})" class="btn btn-primary"/>Spara</a>`;
      });
      projectForm.innerHTML = output;
    });
}
function sendProject(id) {
  const inputImage = document.getElementById('input-image').value;
  const inputTitle = document.getElementById('input-title').value;
  const inputDescription = document.getElementById('input-description').value;
  const inputUrl = document.getElementById('input-url').value;

  let jsonStr = JSON.stringify({
    id: id,
    image: inputImage,
    title: inputTitle,
    description: inputDescription,
    url: inputUrl
  });

  fetch(urlP, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain, */*'
      // "Content-type": "application/json"
    },
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}
// _____________________________________________________________________________
//End of update functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//Delete
// _____________________________________________________________________________

function deleteProject(id) {
  let jsonStr = JSON.stringify({
    id: id
  });
  fetch(urlP, {
    method: 'DELETE',
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => fetchData(data))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of delete functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//WORK
// _____________________________________________________________________________
function showWork() {
  fetch(urlW)
    .then(res => res.json())
    .then(data => {
      let output = '';

      data.forEach(work => {
        output += `<tr>
            <td>${work.dates}</td>
            <td>${work.company}</td>
            <td>${work.title}</td>
            <td><a onclick="updateWork(${work.id})" class="update"><i class="fa fa-pencil"></i></a></td>
            <td><a onclick="deleteWork(${work.id})" class="delete"><i class="fa fa-trash"></i></a></td>
          </tr>`;
      });
      workList.innerHTML = output;
    });
}

// _____________________________________________________________________________
//Add
// _____________________________________________________________________________

function addWork() {
  let output = '';
  output += `<div class="col">
          <input type="text" id="add-date" class="form-control" placeholder="ÅÅÅÅ-MM - ÅÅÅÅ-MM">
          </div>
          <div class="col">
          <input type="text" class="form-control" id="add-company" placeholder="Företag">
          </div>

          <div class="col">
          <input type="text" class="form-control" id="add-title" placeholder="Titel">
          </div>

           <a id="work-submit" onclick="sendAdd()" class="btn btn-primary"/>Spara</a>
          `;

  addWForm.innerHTML = output;
}

function sendAdd() {
  let date = document.getElementById('add-date').value;
  let company = document.getElementById('add-company').value;
  let title = document.getElementById('add-title').value;

  fetch(urlW, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*'
      // "Content-type": "application/json"
    },
    body: JSON.stringify({
      dates: date,
      company: company,
      title: title
    })
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of add-function
// _____________________________________________________________________________

// _____________________________________________________________________________
//Update
// _____________________________________________________________________________

function updateWork(work) {
  let id = work;
  let url = urlW + id;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let output = '';

      data.forEach(input => {
        output += `<div class="col">
          <input type="text" id="input-date" class="form-control" placeholder="ÅÅÅÅ-MM - ÅÅÅÅ-MM" value="${input.dates}">
          </div>
          <div class="col">
          <input type="text" class="form-control" id="input-company" placeholder="Företag" value="${input.company}">
          </div>

          <div class="col">
          <input type="text" class="form-control" id="input-title" placeholder="Titel" value="${input.title}">
          </div>

          <a id="work-update" onclick="sendUpdate(${input.id})" class="btn btn-primary"/>Spara</a>`;
      });
      workForm.innerHTML = output;
    });
}
function sendUpdate(id) {
  const inputDate = document.getElementById('input-date').value;
  const inputCompany = document.getElementById('input-company').value;
  const inputTitle = document.getElementById('input-title').value;

  let jsonStr = JSON.stringify({
    id: id,
    dates: inputDate,
    company: inputCompany,
    title: inputTitle
  });

  fetch(urlW, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain, */*'
      // "Content-type": "application/json"
    },
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => location.reload(true))
    .catch(err => console.log(err));
}
// _____________________________________________________________________________
//End of update functions
// _____________________________________________________________________________
// _____________________________________________________________________________
//Delete
// _____________________________________________________________________________

function deleteWork(id) {
  let jsonStr = JSON.stringify({
    id: id
  });
  fetch(urlW, {
    method: 'DELETE',
    body: jsonStr
  })
    .then(res => res.json())
    .then(data => fetchData(data))
    .catch(err => console.log(err));
}

// _____________________________________________________________________________
//End of delete functions
// _____________________________________________________________________________
