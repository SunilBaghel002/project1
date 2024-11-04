const dailyElements = document.querySelectorAll(".daily")
const weeklyElements = document.querySelectorAll(".weekly")
const monthlyElements = document.querySelectorAll(".monthly")
const dailyIcon = document.querySelector(".daily-icon")
const weeklyIcon = document.querySelector(".weekly-icon")
const monthlyIcon = document.querySelector(".monthly-icon")

dailyElements.forEach(dailyContent=>{
    if (dailyContent.style.display = "block") {
        dailyIcon.classList.add("white")
    }
})

// weeklyContents.forEach(weeklyContent=>{
//     if (weeklyContent.style.display = "block") {
//         weeklyIcon.classList.add("white")
//     }
// })

// else if (monthlyContent.style.display = "block") {
//     monthlyContent.classList.add("white")
// }

weeklyIcon.addEventListener("click", ()=>{
    dailyElements.forEach(element=>{
        element.style.display="none"
        dailyIcon.classList.remove("white")
    })
    weeklyElements.forEach(element=>{
        element.style.display="block"
        weeklyIcon.classList.add("white")
    })
    monthlyElements.forEach(element=>{
        element.style.display="none"
        monthlyIcon.classList.remove("white")
    })
})

dailyIcon.addEventListener("click", ()=>{
    dailyElements.forEach(element=>{
        element.style.display="block"
        dailyIcon.classList.add("white")
    })
    weeklyElements.forEach(element=>{
        element.style.display="none"
        weeklyIcon.classList.remove("white")
    })
    monthlyElements.forEach(element=>{
        element.style.display="none"
        monthlyIcon.classList.remove("white")
    })
})

monthlyIcon.addEventListener("click", ()=>{
    dailyElements.forEach(element=>{
        element.style.display="none"
        dailyIcon.classList.remove("white")
    })
    weeklyElements.forEach(element=>{
        element.style.display="none"
        weeklyIcon.classList.remove("white")
    })
    monthlyElements.forEach(element=>{
        element.style.display="block"
        monthlyIcon.classList.add("white")
    })
})