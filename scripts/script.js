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

common(jobs, "all");
setCount(jobs);
setHeader("all")

function makePost (data) {
    return `
    <details class="interviewed collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
          <summary class="collapse-title font-semibold">
            <h3 class="font-bold">${data.title}</h3>
            <p class="text-base-content/30">${data.company}</p>
          </summary>
          <div class="collapse-content text-sm">
            <p class="text-base-content/30 my-6">${data.type} · ${data.salary}</p>
            <p>${data.description}</p>
            <div class="mt-3">
              <button ${(data.status === "interview") ? "disabled" : ''} class="uppercase btn btn-outline btn-success mr-[8px]">Interview</button>
              <button ${(data.status === "reject") ? "disabled" : ''} class="uppercase btn btn-outline btn-error">Reject</button>
            </div>

          </div>
        </details>
    `
}

document.getElementById("parent").addEventListener("click", function(e){
    if (e.target.type === "radio") {
        common(jobs, e.target.id)
    }
    e.stopPropagation;
});

function common (data, tabName) {
    setHeader(tabName);
    document.getElementById(`accordion-${tabName}`).innerHTML = "";
        for (const job of data) {


            if (tabName === "all") {
                let post = makePost(job);
                document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend",post);
                continue;
            }
            if (job.status === tabName) {
                let post = makePost(job);
                document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend",post); 
            }
            
        }
}

function setCount (data) {
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

function setHeader (tabName) {
    document.getElementById("total-jobs").innerText = document.getElementById(`card-${tabName}-jobs`).innerText
    document.getElementById("heading").innerText = tabName;

}
