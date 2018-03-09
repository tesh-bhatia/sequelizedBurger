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
    }).then(
        location.reload()
    )
})
