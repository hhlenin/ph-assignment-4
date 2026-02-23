let jobs = [
    {
        id: 1,
        status: "interview",
        title: "Serior Software Developer",
        company: "DataSoft Ltd.",
        type: "Full Time",
        salary: "150,000 - 200,000",
        description: "Backend Development with ASP.net"
    },
    {
        id: 2,
        status: "reject",
        title: "Software Developer Grade-II",
        company: "Theta Corp.",
        type: "Full Time",
        salary: "120,000 - 150,000",
        description: "API maintanace and provide security"
    },

    {
        id: 3,
        status: "all",
        title: "Frontend Engineer",
        company: "Future Tech.",
        type: "Part Time",
        salary: "60,000 - 90,000",
        description: "Vue, Vanilla and React, Router"
    },

    {
        id: 4,
        status: "reject",
        title: "Frontend Engineer I",
        company: "Future Tech.",
        type: "Full Time",
        salary: "160,000 - 190,000",
        description: "Vue, Vanilla and React, Router"
    },
];

let currentTab = "all";

common(jobs, currentTab);
setCount(jobs);
setHeader(currentTab);


function makePost(data, key) {
    return `
    <details class="interviewed collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
          <summary class="collapse-title font-semibold">
            <h3 class="font-bold">${data.title}</h3>
            <p class="text-base-content/30">${data.company}</p>
          </summary>
          <div class="collapse-content text-sm">
          <div class="grid grid-cols-12">
              <div class="col-span-11">
                <p class="text-base-content/30 my-6">${data.type} · ${data.salary}</p>
                <p>${data.description}</p>
                <div class="mt-3">
                    <button data-id=${key} ${(data.status === "interview") ? "disabled" : ''} class="uppercase btn btn-outline btn-success mr-[8px]">Interview</button>
                    <button data-id=${key} ${(data.status === "reject") ? "disabled" : ''} class="uppercase btn btn-outline btn-error">Reject</button>
                </div>
              </div>
              <div class="col-span-1">
                <button data-id="${key}" class="delete">
                  <svg class="delete" data-id=${key} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                  </svg>
                </button>
              </div>
            </div>
        

          </div>
        </details>
    `
}

document.getElementById("parent").addEventListener("click", function (e) {

    
    if (e.target.type === "radio") {
        let currentTab = e.target.id;
        common(jobs, e.target.id)

    }
    if (e.target.classList.contains("delete")) {
        if (!confirm("Are You Sure Want to Delete this Job?")) {
            return;
        }
        jobs.splice(e.target.dataset.id, 1)
        let currentTab = document.getElementById("heading").innerText.toLowerCase();

        common(jobs, currentTab);
        setCount(jobs);
        setHeader(currentTab);

    }

    if (e.target.tagName === "BUTTON") {
        console.info(jobs);
        if (e.target.classList.contains("btn-error")) {
            jobs[e.target.dataset.id].status = "reject"
        }
        if (e.target.classList.contains("btn-success")) {
            jobs[e.target.dataset.id].status = "interview"
        }

        let currentTab = document.getElementById("heading").innerText.toLowerCase();

        common(jobs, currentTab);
        setCount(jobs);
        setHeader(currentTab);

    }
    e.stopPropagation;
});

function common(data, tabName) {
    setHeader(tabName);
    document.getElementById(`accordion-${tabName}`).innerHTML = "";
    for (const [key, job] of data.entries()) {

        if (tabName === "all") {
            let post = makePost(job, key);
            document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend", post);
            continue;
        }
        if (job.status === tabName) {
            let post = makePost(job, key);
            document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend", post);
        }

    }
}

function setCount(data) {
    let reject = 0;
    let interview = 0;

    for (const job of data) {
        if (job.status === "interview") {
            interview++;

        }
        if (job.status === "reject") {
            reject++;
        }
    }
    document.getElementById("card-interview-jobs").innerText = interview;
    document.getElementById("card-reject-jobs").innerText = reject;
    document.getElementById("card-all-jobs").innerText = data.length;

}

function setHeader(tabName) {
    document.getElementById("total-jobs").innerText = document.getElementById(`card-${tabName}-jobs`).innerText
    document.getElementById("heading").innerText = tabName;

}
