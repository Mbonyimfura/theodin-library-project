const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
        `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeBook(index));

    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";
    toggleReadButton.addEventListener("click", () => toggleReadStatus(index));

    bookCard.appendChild(removeButton);
    bookCard.appendChild(toggleReadButton);

    libraryContainer.appendChild(bookCard);
  });
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary(); 
}

const newBookForm = document.getElementById("book-form");
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayLibrary();
});

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary(); 
}

const newBookButton = document.getElementById("new-book-button");

newBookButton.addEventListener("click", function () {
  const newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block"; 
});

function toggleForm() {
  const newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "none";
}

displayLibrary();
