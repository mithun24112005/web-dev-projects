function card(title,channel_n,views,duration,months_old,thumbnail) {
    let views_v=0
    if (views<1000){
        views_v=views
    }
    else if (views>1000 && views<100000){
        views_v=views/1000+"k"
    }
    else{
        views_v=views/100000+"M"
    }
    let html=`<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="yt_img">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${channel_n} . ${views_v} views . ${months_old}</p>
        </div>
    </div>`
    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}

// Ensure container exists before appending
document.addEventListener("DOMContentLoaded", () => {
    if (!document.querySelector(".container")) {
        const container = document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);
    }

    // Example Calls
    card("Introduction to Backend ", "CodeWithHarry", 72700, "31:00", 2, "yt_img.jpg");
});
