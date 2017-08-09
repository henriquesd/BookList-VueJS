var data = { 
  books: [{ title: 'The Hobbit', author: 'J.R.R. Tolkien', publisher: 'Houghton Mifflin Harcourt', checked: false },
          { title: 'Lord of The Rings - The Return of the King', author: 'J.R.R. Tolkien', publisher: 'Mariner Books', checked: true },
          { title: 'Under the Dome', author: 'Stephen King', publisher: 'Gallery Books', checked: false }], 
  header: 'My Books - Vue.js', 
  newBook: '',
  newAuthor: '',
  newPublisher: ''
};

new Vue({ 
   el: '#app', 
   data: data,
   methods: { 
     addBook: function () { 
       var title = this.newBook.trim(); 
       var author = this.newAuthor.trim(); 
       var publisher = this.newPublisher.trim();
       if (title && author) { 
         this.books.push({ 
           title: title, 
           author: author, 
           publisher: publisher,
           checked: false 
         }); 
         this.newBook = ''; 
         this.newAuthor = '';
         this.newPublisher = '';
       } 
     }
   }
 });
