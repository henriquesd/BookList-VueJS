$(document).ready(function() {
	
	function onAdd() {
		var $ul, li, $li, $label, $div, book; 
		book = $('.js-new-book').val(); 
		author = $('.js-new-author').val();
        publisher = $('.js-new-publisher').val();
		
		if (book === '') { 
			return; 
		}
		
		$ul = $('ul'); 
		$li = $('<li>').appendTo($ul); 
		$div = $('<div>') 
			.addClass('checkbox') 
			.appendTo($li);
			
		$label = $('<label>').appendTo($div); 
		$('<input>') 
			.attr('type', 'checkbox') 
			.addClass('js-book') 
			.attr('name', 'list') 
			.click(toggleRemoved) 
			.appendTo($label);

		$('<big>')
			.appendTo($label)
			.append(book);
			
		$label.append(" - ");
			
		$('<small>')
			.appendTo($label)
			.append(author);
			
        $label.append("<br/>");
			
		$('<small>')
			.appendTo($label)
			.append(publisher);
			        
		$('.js-new-book, .js-new-author, .js-new-publisher').val('');

	}
	
    /* Checkbox event click; */
	function toggleRemoved(ev) {
		var $el; 
		$el = $(ev.currentTarget); 
		$el.closest('li').toggleClass('removed'); 
	}
	$('.js-add').click(onAdd); 
	$('.js-book').click(toggleRemoved); 
});
