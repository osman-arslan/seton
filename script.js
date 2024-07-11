function copyTpl() {
    return document.querySelector('#tpl_notes').content.lastElementChild.cloneNode(true);
}

//charge la fonction copyTpl après le chargement de la page
window.addEventListener("load", copyTpl);
let elementTemplate = copyTpl();
console.log(elementTemplate.content)

// Création de fonction create qui se trouve dans createNote
function create(a, b) {

}

function createNote() {
    const t = window.prompt('Titre de la note ?');
    create(t, null).then((res) => {
        const id = res.result.id;
        insertNoteBlock(id, t, '', null, null, null);
        retrieve(id);
    });
}

// chargement du la fonction creatNote après le chargement de lapage
window.addEventListener("load", createNote);

let nouvelleNote = document.getElementsByClassName("new");
console.log(nouvelleNote);
nouvelleNote[0].addEventListener("click", createNote());
nouvelleNote[1].addEventListener("click", createNote());


// Afficher la template HTML
var template = document.querySelector("#tpl_notes");
var elementBody = document.querySelector("body");
var clone = document.importNode(template.content, true);

insertNoteBlock(id, title, content, tag, dateCreated, dateUpdated) {

} 

function list() {
    fetch('/api/')
        .then((e) => { return e.json(); })
        .then((r) => {
            for (let l of r.notes) {
                insertNoteBlock(l.rowid, l.title, l.content, l.tag, l.dateCreated, l.dateUpdated);
            }
        });
}

window.addEventListener("load", list());


let bouton = document.querySelector(".save");
bouton.addEventListener("click",save )

function getNoteBlock(id) {
    return document.querySelector('li[data-noteid="' + id + '"]');
}

function tag(id, tag) {
    fetch('/api/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'tag': tag })
    })
        .then((e) => { return e.json(); })
        .then((r) => {
            if(null === tag) {
                delete getNoteBlock(id).dataset.tag;
            } else {
                getNoteBlock(id).dataset.tag = tag;
            }
        });
}

window.addEventListener("load", tag);

function untag(id) {
    tag(id, null);
}

window.addEventListener("load", untag);

function isTagged(id) {
    return ('important' == getNoteBlock(id).dataset.tag);
}

window.addEventListener("load", isTagged);

function change (id, title, content) {

}

function change () {

}

function remobe () {

}

function flafAsSaved (id) {

}

function isFlaggedAsUnsaved(id) {
    let result;
    if (id) {
        result = true;
    } else {
        result = false
    }
    return result;
}