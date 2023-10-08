let links = document.querySelectorAll(".links a");
links.forEach((a) => {
    a.addEventListener("click", (a) => {
        links.forEach(a => {
            a.classList.remove("active");
        });
        a.currentTarget.classList.add("active");
    });
});

let searchInput = document.querySelector("header #search");
let mobileLinks = document.querySelectorAll("header .links a");
document.querySelector("header i")
    .addEventListener("click", () => {
        searchInput.classList.toggle("expand");
        mobileLinks.forEach(a => {
            a.classList.toggle("hide");
        })
    });








    // document.querySelector(".section-3")
    // .addEventListener("mousemove", () => {
    //     let eyes = document.querySelectorAll(".eye");
    //     eyes.forEach((eye) => {
    //         let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    //         let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    //         let radian = Math.atan2(event.pageX - x, event.pageY - y);
    //         let rot = (radian * (180 / Math.PI) * -1) + 0;
    //         eye.style.transform = `rotate(${rot}deg)`;
    //     });
    // });