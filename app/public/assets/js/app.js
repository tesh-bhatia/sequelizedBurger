$('.devour-btn').click((event) => {
    event.preventDefault();
    console.log('clicked!')
    //use event.currentTarget with ES6 syntax instead of this
    const id = $(event.currentTarget).attr('data-id')
    console.log(id)

    $.ajax({
        type: 'PUT',
        url: '/',
        data: {id: id}
    }).then(function(){ //this function has to be in es5 for some reason...
        location.reload()
    })
})

$('#submit-btn').click((event) => {
    event.preventDefault();
    const burger_name = $('#burger_name').val()
    
    $.ajax({
        type: 'POST',
        url: '/',
        data: {burger_name: burger_name}
    }).then(function(){ //this function has to be in es5 for some reason...
        location.reload()
    })
})
