function setTabData(data, tabName) {
    setHeader(tabName);
    document.getElementById(`accordion-${tabName}`).innerHTML = "";
    for (const [key, job] of data.entries()) {

        if (tabName === "all") {
            let post = makePostView(job, key);
            document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend", post);
            continue;
        }
        if (job.status === tabName) {
            let post = makePostView(job, key);
            document.getElementById(`accordion-${tabName}`).insertAdjacentHTML("beforeend", post);
        }

    }
}

function setCount(data) {
    let reject = 0;
    let interview = 0;

    for (const job of data) {
        job.status === "interview" ? interview++ : job.status === "reject" ? reject++ : "";

    }
    reject === 0 ? document.getElementById("accordion-reject").innerHTML = makeEmptyView() : "";
    interview === 0 ? document.getElementById("accordion-interview").innerHTML = makeEmptyView() : "" ;
    document.getElementById("card-interview-jobs").innerText = interview;
    document.getElementById("card-reject-jobs").innerText = reject;
    document.getElementById("card-all-jobs").innerText = data.length;

}

function setHeader(tabName) {
    document.getElementById("total-jobs").innerText = document.getElementById(`card-${tabName}-jobs`).innerText
    document.getElementById("heading").innerText = tabName;

}