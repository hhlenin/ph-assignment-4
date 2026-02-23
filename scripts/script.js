let currentTab = "all";

setTabData(jobs, currentTab);
setCount(jobs);
setHeader(currentTab);


document.getElementById("parent").addEventListener("click", function (e) {

    let currentTab = document.getElementById("heading").innerText.toLowerCase();

    if (e.target.type === "radio") {
        currentTab = e.target.id;
        setTabData(jobs, currentTab)
    }

    if (e.target.classList.contains("delete")) {
        if (!confirm("Are You Sure Want to Delete this Job?")) {
            return;
        }
        jobs.splice(e.target.dataset.id, 1)
        setTabData(jobs, currentTab);
    }

    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("btn-error")) {
            jobs[e.target.dataset.id].status = "reject"
        }
        if (e.target.classList.contains("btn-success")) {
            jobs[e.target.dataset.id].status = "interview"
        }
        setTabData(jobs, currentTab);
    }
    setCount(jobs);
    setHeader(currentTab);
    e.stopPropagation;
});


