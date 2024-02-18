window.onload = function() {
    document.getElementById("download").addEventListener("click", ()=> {
        const container = document.getElementById("container");
        html2pdf().from(container).save();
    })
}