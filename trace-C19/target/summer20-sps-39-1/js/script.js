const myForm = document.getElementById('zipForm'); 

myForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const formData = new FormData(myForm);
    const searchParams = new URLSearchParams();

    console.log("FromData " + formData)
    for(const pair of formData) {
        searchParams.append(pair[0], pair[1]);
    }

    console.log("SearchParams " + searchParams)


    fetch('/outLocation', {
    method: 'post', 
    body: searchParams
     }).then(function(response) {
         return response.text();

     }).then(function(text) {
         console.log(text);
     }).catch(function(error) {
         console.error(error);
     })
});


