function drag(e){
    e.dataTransfer.setData('image',e.target.id);
}
function allowDrag(e){
    e.preventDeafault();
}
function drop(e){
    e.preventDefault();
    var data=e.dataTransfer.getData('image')
    e.target.appendChild(document.getElementById(data));
}