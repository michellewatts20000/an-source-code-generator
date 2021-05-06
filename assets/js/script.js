var formEl = $('#generator');
var nameInputEl = $('#link');
var skillsListEl = $('#printed-links');


// const array1 = ["?source=fb", "?source=twitter", "?source=insta", "?source=linkedin"];


const array1 = [
    {
      name: 'Facebook organic',
      source: '?source=fb',
    },
    {
        name: 'Facebook paid',
        source: '?source=fbpaid',
    },
    {
        name: 'Twitter',
        source: '?source=twitter',
    },
    {
        name: 'Instagram',
        source: '?source=insta',
    },
    {
        name: 'LinkedIn',
        source: '?source=linkedin',
    },
  ];

// pass a function to map


var handleFormSubmit = function (event) {
    event.preventDefault();

    var nameInput = nameInputEl.val();
    // const map1 = array1.map(x => nameInput + x);

    let map1 = array1.map(obj => {
        let rObj = {}
        rObj["name"] = obj.name 
        rObj["source"] = nameInput + obj.source;
        return rObj
     })
     

    var i;
    for (i = 0; i < map1.length; i++) {
        var listEl = $('<li>');
        var heading = $('<h4>')
        var link = $('<input>').on("click",(event) => myFunction(event));
        link.val(map1[i].source)
        heading.text(map1[i].name)
        listEl.addClass('list-group-item copy');
        listEl.appendTo(skillsListEl);
        heading.appendTo(listEl);
        link.appendTo(listEl);
    }
   

};

formEl.on('submit', handleFormSubmit);

function myFunction(event) {
  
    /* Get the text field */
    var copyText = event.currentTarget;
  console.log(copyText);
  console.log(event);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
