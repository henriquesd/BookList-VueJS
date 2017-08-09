var data = { 
  books: [{ title: 'The Hobbit', author: 'J.R.R. Tolkien', publisher: 'Houghton Mifflin Harcourt', checked: false },
          { title: 'Lord of The Rings - The Return of the King', author: 'J.R.R. Tolkien', publisher: 'Mariner Books', checked: true },    
          { title: 'Under the Dome', author: 'Stephen King', publisher: 'Gallery Books', checked: false }],
  header: 'My Books - Vue.js Components', 
  newBook: '',
  newAuthor: '',
  newPublisher: ''
};

var ItensComponent = Vue.extend({ 
  data: function () { 
    return data; 
  }, 
  template: '<ul>' + 
  '           <li v-for="book in books" :class="{ \'removed\': book.checked }">' + 
  '             <div class="checkbox">' + 
  '             	<label>' + 
  '                	<input type="checkbox" v-model="book.checked"> ' + 
  '                	<big>{{ book.title }}</big> - <small>{{ book.author }}</small> <br/> <small>{{ book.publisher }}</small>' + 
  '             	</label>' +  
  '             </div>' +  
  '           </li>' + 
  '         </ul>' 
});

var ChangeTitleComponent = Vue.extend({ 
  data: function () { 
    return data; 
  }, 
  template: '<input v-model="header"/>' 
}); 

var AddItemComponent = Vue.extend({ 
  data: function () { 
    return data; 
  }, 
  methods: { 
    addBook: function () { 
      var title, author, publisher;
      title = this.newBook.trim(); 
      author = this.newAuthor.trim(); 
      publisher = this.newPublisher.trim(); 
      if (title) { 
        this.books.push({ 
          title: title, 
          author: author, 
          publisher: publisher,
          checked: false 
        }); 
        this.newBook = ""; 
        this.newAuthor = ""; 
        this.newPublisher = "";
      } 
    } 
  }, 
  template: 
	'<div>' + 
		'<input v-model="newBook" @keyup.enter="addBook"' +
			' placeholder="Title" type="text" class="form-control" /><br/>'  + 
    
		'<input v-model="newAuthor" @keyup.enter="addBook"' +
			' placeholder="Author" type="text" class="form-control" /> <br/>'  + 
    
        '<input v-model="newPublisher" @keyup.enter="addBook"' +
			' placeholder="Publisher" type="text" class="form-control" /> <br/>'  +
    
		'<span class="input-group-btn">' + 
		'  <button @click="addBook" class="js-add btn btn-primary btn-block"' +
		   ' type="button">Add</button>'  + 
		'</span>' +
    
	'<div>'
}); 

/* Registering components */
Vue.component('itens-component', ItensComponent); 
Vue.component('change-title-component', ChangeTitleComponent); 
Vue.component('add-item-component', AddItemComponent);

/* Initializing Vue */
new Vue({ 
  el: '#app', 
  data: data 
});
