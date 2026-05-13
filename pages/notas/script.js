const noteForm = document.getElementById("noteForm");
const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const notesList = document.getElementById("notesList");

let notes = loadNotes();

noteForm.addEventListener("submit", handleSubmit);

renderNotes();

function handleSubmit(event) {
    event.preventDefault();

    const title = noteTitle.value.trim();
    const content = noteContent.value.trim();

    if (title === "" || content === "") {
        alert("Debes escribir título y contenido.");
        return;
    }

    const newNote = {
        id: Date.now(),
        title: title,
        content: content,
        createdAt: new Date().toLocaleString("es-MX")
    };

    notes.push(newNote);

    saveNotes();
    renderNotes();
    clearForm();
}

function renderNotes() {
    notesList.innerHTML = "";

    if (notes.length === 0) {
        notesList.innerHTML = `
            <p class="empty-message">
                Todavía no hay notas guardadas.
            </p>
        `;

        return;
    }

    notes.forEach(note => {
        const card = document.createElement("article");

        card.classList.add("note-card");

        card.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <small>${note.createdAt}</small>
            <br><br>
            <button onclick="deleteNote(${note.id})">
                Eliminar
            </button>
        `;

        notesList.appendChild(card);
    });
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);

    saveNotes();
    renderNotes();
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes === null) {
        return [];
    }

    return JSON.parse(storedNotes);
}

function clearForm() {
    noteTitle.value = "";
    noteContent.value = "";
}