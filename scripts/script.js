const accordion = document.getElementById('accordion');
accordion.addEventListener('click', function(e){
    const childs = this.childNodes;
    // console.log(childs);
    
    for(let i= 0; i< childs.length; i++) {
        console.log(childs[i])
        (childs[i].hasAttribute("open"))
    }
    if (e.target.tagName === "SUMMARY") {
        e.target.parentNode.classList.remove("border-base-300");
        e.target.parentNode.classList.add("border-white");
        e.stopPropagation();
    }
    
});