const library = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "1984",
        author: "George Orwell",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

// Step 2: Set all read values to true
library.forEach(book => {
    book.status.read = true;
});

// Step 3: Destructure title from the first book
const { title: firstBook } = library[0];

// Step 4: Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);

console.log(firstBook); // "The Great Gatsby"
console.log(libraryJSON); // JSON string of the library
