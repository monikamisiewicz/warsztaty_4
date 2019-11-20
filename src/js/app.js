$(function(){
    $("#booklist").on("click",function(){
        $.ajax({
            url:"http://localhost:8282/books/",
            method:"get",
            dataType:"json"
        }).done(function(response){
            console.log(response.results);
            renderBooks(response.results)
        }).fail(function(err){
            console.log(err)
        })
    });

    function renderBooks(books){
        books.forEach(function(book){
            $(".booklist").append($(`<li>${book.title}</li>`))
        })
    }

});
