function show ({
    title = '',
    content = "",
    type = "inf",
    duration = 3000
}) 
{
   let toast = document.querySelector('#toast');
  let deplay = (duration / 1000).toFixed(2)
   let listType = {
    success: "success",
    inf: "inf",
    warning: "warning",
    error: 'error'
   }
   let icons = {
    success: "fa-solid fa-check",
    inf: "fa-solid fa-info",
    warning: "fa-solid fa-circle-exclamation",
    error: "fa-solid fa-triangle-exclamation"
   }
   let a = listType[type]

// create element div has class toast
    let div = document.createElement("div");
    const autoRemoveId = setTimeout(() => {
        toast.removeChild(div)
    }, duration + 1000);
    div.onclick = function(e){
        if(e.target.closest('.toast_close')){
           toast.removeChild(div)
           clearTimeout(autoRemoveId)
        }
    }
    div.style.animation = `slideInLeft ease-in-out 0.3s, fadeOut ease 1s ${deplay} forwards;`
    div.classList.add("toast", `toast_${a}`)
    div.innerHTML = ` <div class="toast_icon">
    <i class="${icons[type]}"></i>
</div>
<div class="toast_body">
    <h2 class="toast_title">${title}</h2>
    <p class="toast_msg">${content}</p>
</div>
<div class="toast_close">
    <i class="fa-solid fa-xmark"></i>
</div>`
toast.appendChild(div)


}


function showSuccess (arguments) {
    show({
        title: "Success",
        content: "Anyone with access can view your visited visitors",
        type: 'success',
        duration: 3000
        })
}
function showError (arguments) {
    show({
        title: "Error",
        content: "Anyone with access can view your visited visitors",
        type: 'error',
        duration: 3000
        })
}