var formEl = $('#generator');
var nameInputEl = $('#link');
var skillsListEl = $('#printed-links');

const array1 = ["?source=fb", "?source=twitter", "?source=insta", "?source=linkedin"];

// pass a function to map


var handleFormSubmit = function (event) {
    event.preventDefault();

    var nameInput = nameInputEl.val();
    const map1 = array1.map(x => nameInput + x);

    console.log(map1)
    console.log(nameInput)

    if (!nameInput) {
        alert('You need to put a link in this field');
        return;
    }

    $.each(map1, function (index, value) {
        var listEl = $('<li>');
        listEl.addClass('list-group-item copy').text(value);
        listEl.appendTo(skillsListEl);
    });

    // resets form
    nameInputEl.val('');

};

formEl.on('submit', handleFormSubmit);

function copyLink() {
    var linkSelect = document.querySelector(".copy");
    linkSelect.select();
    document.execCommand("copy");
    alert('Link copied!')
}