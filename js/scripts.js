const projectsURL = "/data/projects.json";
const techsURL = "data/techs.json";

fetch(projectsURL)
  .then((response) => response.json())
  .then(projectsList)
  .catch((error) => console.error("Error fetching projects:", error));

fetch(techsURL)
  .then((response) => response.json())
  .then(techs)
  .catch((error) => console.error("Error fetching techs:", error));
function projectsList(projectsData) {
  const projects = projectsData.project;
  const projectsContainer = document.getElementById("projects");

  projects.forEach((project) => {
    const projectHTML = `
        <div class="col-md-3 projList">
          <img class="card-img-top" src="${project.img}" alt="${
      project.name
    }" data-toggle="modal" data-target="#projectList${
      project.id
    }" style="cursor:pointer;">
            <div class="card-body">
                <h4 class="card-title title-font">${project.name}</h4>
                <p class="card-text">${project.aboutShort}</p>
                <center>
                    <button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#projectList${
                      project.id
                    }">
                    Learn more!
                    </button>
                </center>
          </div>
        </div>
   
        
        <div class="modal fade" id="projectList${
          project.id
        }" tabindex="-1" role="dialog" aria-labelledby="projectList${
      project.id
    }Label" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title title-font" id="projectList${
                  project.id
                }Label">${project.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <center><img src="${project.img}" /></center><br>
                ${project.aboutFull}
              </div>
              <div class="modal-footer">
                <h4 class="title-font">Try ${project.name}</h4>
                ${createLink(project.projectLink, "portfolio")}
                <p><button type="button" data-dismiss="modal" class="btn btn-outline-primary title-font bottom" style="margin-top:20px" aria-label="Close">
                  Back
                </button></p>
              </div>
            </div>
          </div>
        </div>
      `;

    projectsContainer.innerHTML += projectHTML;
  });
}
function techs(techsData) {
  const techs = techsData.techs;
  const techsContainer = document.getElementById("techs");

  techs.forEach((tech) => {
    const techHTML = `
        <div class="col-sm-4 technologies">
          <center><img class="techs" src="${tech.image}"><br>
            ${tech.name}</center>
        </div>
      `;

    techsContainer.innerHTML += techHTML;
  });
}
function createLink(urlString, img, mail) {
  let projectLink =
    urlString !== ""
      ? `<a href="${urlString}" target= "_blank"><img src="img/icon/${img}.png"></a>`
      : "";
  return projectLink;
}

// Carousel to replace project card
{
  /* <div class="carousel-item active">
        <img class="d-block w-100" src="${project.img}" alt="${
              project.name
            }" data-toggle="modal" data-target="#projectList${
              project.id
            }" style="cursor:pointer;">
            <div class="carousel-caption d-none d-md-block">
                <div class="badge bg-gradient-primary-to-secondary text-white mb-4">                                                
                    <h5>${project.name}</h5>
                    <p>${project.aboutShort}</p>
                    <center><button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#projectList${
                      project.id
                    }">
                         Learn more!
                    </button></center>
                </div>
            </div>
        </div> */
}
