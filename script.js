//your JS code here. If required.
const size=document.getElementById('sizeInfo')
window.onresize=()=>{
	size.textContent=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}