const accordion = document.getElementById('accordion-all');
let totalJobs = accordion.children.length;
document.getElementById("total-jobs").innerText = totalJobs;
document.getElementById("card-total-jobs").innerText = totalJobs;

// getCount();



// accordion.addEventListener('click', function (e) {
//     const children = this.children;
//     for (const child of children) {
//         if (child.classList.contains("interviewed")) {
//             interviewJobs++;
//         }
//         if (child.classList.contains("rejected")) {
//             rejectedJobs++;
//         }

//     }
//     console.log(interviewJobs, rejectedJobs)

// for(let i= 0; i< childs.length; i++) {
//     console.log(childs[i])
//     (childs[i].hasAttribute("open"))
// }
// if (e.target.tagName === "SUMMARY") {
//     e.target.parentNode.classList.remove("border-base-300");
//     e.target.parentNode.classList.add("border-white");
//     e.stopPropagation();
// }

// });

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
];




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
    if (e.target.id === "all") {
        common(jobs, e)
        
    }
    if (e.target.id === "reject") {
        common(jobs, e)
        
    }
    if (e.target.id === "interview") {
        common(jobs, e)
        
    }
    e.stopPropagation;
});

function common (data, event) {
    document.getElementById(`accordion-${event.target.id}`).innerHTML = "";
        for (const job of data) {
            if (event.target.id === "all") {
                let post = makePost(job);
                document.getElementById(`accordion-${event.target.id}`).insertAdjacentHTML("beforeend",post);
                continue;
            }
            if (job.status === event.target.id) {
                let post = makePost(job);
                document.getElementById(`accordion-${event.target.id}`).insertAdjacentHTML("beforeend",post); 
            }
            
        }
}

// function getCount() {
//     let rejectedJobs = 0;
//     let interviewJobs = 0;

//     for (const child of accordion.children) {
//         if (child.classList.contains("interviewed")) {
//             interviewJobs++;
//         }
//         if (child.classList.contains("rejected")) {
//             rejectedJobs++;
//         }

//     }
//     // document.getElementById("total-jobs").innerText = totalJobs;
//     document.getElementById("card-rejected-jobs").innerText = rejectedJobs;

//     // document.getElementById("total-jobs").innerText = totalJobs;
//     document.getElementById("card-interviewed-jobs").innerText = interviewJobs;
// }

// document.getElementById("rejected-tab").addEventListener('click', function () {
//     document.getElementById("heading").innerText = "Rejected";
//     document.getElementById("total-jobs").innerText = document.getElementById("card-rejected-jobs").innerText;
// });

// document.getElementById("all-tab").addEventListener('click', function () {
//     document.getElementById("heading").innerText = "Available";
//     document.getElementById("total-jobs").innerText = document.getElementById("card-total-jobs").innerText;
// });
// document.getElementById("interviewed-tab").addEventListener('click', function () {
//     document.getElementById("heading").innerText = "Interviewed";
//     document.getElementById("total-jobs").innerText = document.getElementById("card-interviewed-jobs").innerText;
// });

// accordion.addEventListener("click", function () {
//     console.log('ddssgd');
    
//     // document.getElementById("accordion-").
//     for (const child of this.children) {
//         if (child.classList.contains("interviewed")) {
//             console.log(child);
            
//             document.getElementById("accordion-").appendChild(child)
//             // document.getElementById("accordion-").innerHTML = `${child}`;

//         }
//         if (child.classList.contains("rejected")) {
//             document.getElementById("accordion").appendChild(child)

//         }

//     }
// });

