document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;}

document.onkeydown = (e) => {
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
