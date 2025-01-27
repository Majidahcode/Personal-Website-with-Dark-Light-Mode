const toggleIcon =  document.querySelector(".toggle-icon")

toggleIcon.addEventListener("click" , () => {
    toggleIcon.classList.toggle("fa-moon")
    document.body.classList.toggle("dark-mode")
})