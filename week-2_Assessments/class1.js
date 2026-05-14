/**
 * Problem Statement: Library Book Management System
 * Objective: Create a Book class and manage a collection of books.
 */

class Book {
  /**
   * @param {string} title 
   * @param {string} author 
   * @param {number} pages 
   * @param {boolean} [isAvailable=true] 
   */
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  /**
   * Marks the book as borrowed (unavailable).
   */
  borrow() {
    this.isAvailable = false;
    console.log(`[BORROW] "${this.title}" has been borrowed.`);
  }

  /**
   * Marks the book as returned (available).
   */
  returnBook() {
    this.isAvailable = true;
    console.log(`[RETURN] "${this.title}" has been returned.`);
  }

  /**
   * @returns {string} Formatted book details.
   */
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  /**
   * @returns {boolean} True if the book has more than 300 pages.
   */
  isLongBook() {
    return this.pages > 300;
  }
}

// 1. Create book objects
const library = [
  new Book('Harry Potter', 'J.K. Rowling', 500),
  new Book('1984', 'George Orwell', 250),
  new Book('The Hobbit', 'J.R.R. Tolkien', 310),
  new Book('To Kill a Mockingbird', 'Harper Lee', 281),
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180),
];

console.log("--- Library Information ---");
library.forEach(book => console.log(book.getInfo()));

console.log("\n--- Transaction Log ---");
// 2. Borrow 2 books
library[0].borrow();
library[2].borrow();

// 3. Return 1 book
library[0].returnBook();

console.log("\n--- Statistics ---");
// 4. Count "long books"
const longBooks = library.filter(book => book.isLongBook());
console.log(`Number of long books (>300 pages): ${longBooks.length}`);

// 5. List all available books
const availableBooks = library.filter(book => book.isAvailable);
console.log("\nAvailable Books for Checkout:");
availableBooks.forEach(book => console.log(` - ${book.getInfo()}`));