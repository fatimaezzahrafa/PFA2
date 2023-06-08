document.addEventListener("DOMContentLoaded", (ev) => {
    document.getElementById("recent-updates--table").appendChild(buildTableBody());
    
   
    document
      .getElementsByClassName("recent-updates")
      .item(0)
      .appendChild(buildUpdatesList());
     
  
    const projectAnalytics = document.getElementById("analytics");
    buildProjectAnalytics(projectAnalytics);
  });
  
  const buildTableBody = () => {
    const recenttasksData = RECENT_TASKS_DATA;
  
    const tbody = document.createElement("tbody");
  
    let bodyContent = "";
    for (const row of recenttasksData) {
      bodyContent += `
        <tr>
          <td>${row.projectName}</td>
          <td>${row.taskName}</td>
          <td>${row.hours}</td>
          <td class="${row.statusColor}">${row.status}</td>
          <td class="primary">Details</td>
        </tr>
      `;
    }
  
    tbody.innerHTML = bodyContent;
  
    return tbody;
  };
  
  const buildUpdatesList = () => {
    const updateData = UPDATE_DATA;
  
    const div = document.createElement("div");
    div.classList.add("updates");
  
    let updateContent = "";
    for (const update of updateData) {
      updateContent += `
        <div class="update">
          <div class="profile-photo">
            <img src="${update.imgSrc}" />
          </div>
          <div class="message">
            <p><b>${update.profileName}</b> ${update.message}</p>
            <small class="text-muted">${update.updatedTime}</small>
          </div>
        </div>
      `;
    }
  
    div.innerHTML = updateContent;
  
    return div;
  };
  
  const buildProjectAnalytics = (element) => {
    const projectAnalyticsData = PROJECT_ANALYTICS_DATA;
  
    for (const analytic of projectAnalyticsData) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.classList.add(analytic.itemClass);
  
      const itemHtml = `
        <div class="icon">
          <span class="material-icons-sharp"> ${analytic.icon} </span>
        </div>
        <div class="right">
          <div class="info">
            <h3>${analytic.title}</h3>
            <small class="text-muted"> Last 24 Hours </small>
          </div>
          <h5 class="${analytic.colorClass}">${analytic.percentage}%</h5>
          <h3>${analytic.sales}</h3>
        </div>
      `;
  
      item.innerHTML = itemHtml;
  
      element.appendChild(item);
    }
  };
  
  // Document operation functions
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");
  
  // Show Sidebar
  menu-btn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });
  
 
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });
  
  
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
  
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  });