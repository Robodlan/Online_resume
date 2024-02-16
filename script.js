window.onload = function() {
    document.getElementById("download").addEventListener("click", ()=> {
        const container = document.getElementById("container");
        console.log(container);
        console.log(window);
        html2pdf().from(container).save();
    })
}