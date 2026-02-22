const accordion = document.getElementById('accordion-all');
let totalJobs = accordion.children.length;
document.getElementById("total-jobs").innerText = totalJobs;
document.getElementById("card-total-jobs").innerText = totalJobs;

getCount();



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

function getCount() {
    let rejectedJobs = 0;
    let interviewJobs = 0;

    for (const child of accordion.children) {
        if (child.classList.contains("interviewed")) {
            interviewJobs++;
        }
        if (child.classList.contains("rejected")) {
            rejectedJobs++;
        }

    }
    // document.getElementById("total-jobs").innerText = totalJobs;
    document.getElementById("card-rejected-jobs").innerText = rejectedJobs;

    // document.getElementById("total-jobs").innerText = totalJobs;
    document.getElementById("card-interviewed-jobs").innerText = interviewJobs;
}

document.getElementById("rejected-tab").addEventListener('click', function () {
    document.getElementById("heading").innerText = "Rejected";
    document.getElementById("total-jobs").innerText = document.getElementById("card-rejected-jobs").innerText;
});

document.getElementById("all-tab").addEventListener('click', function () {
    document.getElementById("heading").innerText = "Available";
    document.getElementById("total-jobs").innerText = document.getElementById("card-total-jobs").innerText;
});
document.getElementById("interviewed-tab").addEventListener('click', function () {
    document.getElementById("heading").innerText = "Interviewed";
    document.getElementById("total-jobs").innerText = document.getElementById("card-interviewed-jobs").innerText;
});

accordion.addEventListener("click", function () {
    console.log('ddssgd');
    
    // document.getElementById("accordion-").
    for (const child of this.children) {
        if (child.classList.contains("interviewed")) {
            console.log(child);
            
            // document.getElementById("accordion-").appendChild(child)
            document.getElementById("accordion-").innerHTML('bello')

        }
        if (child.classList.contains("rejected")) {
            document.getElementById("accordion").appendChild(child)

        }

    }
});

