const sideBar = document.getElementById('sideBar')
const icon = document.getElementById('icon')
let flag = false
function openSide() {
    document.body.classList.toggle('overflow-y-hidden')
    sideBar.classList.toggle('side')
    icon.innerHTML = flag ? '<i class="fa-solid fa-bars text-2xl"></i>' : '<i class="fa-solid fa-xmark text-2xl"></i>'
    flag = !flag
}
function toggleFooter(id) {
    const content = document.getElementById("footerDown" + id);
    const icon = document.getElementById("icon" + id);

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      content.classList.add("hidden");
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
} 
