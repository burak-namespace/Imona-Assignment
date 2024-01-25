
function displayMessage(datas){
    $(".alert").empty();

    let response = $('#response');
    $(".alert").css("visibility", "visible");
    $(".alert").append(`Thanks for your return ${datas['name']}! , We created an account for you in the ${datas['job']} department and your ID number is ${datas['id']}`)

    
}


let formDOM = document.querySelector('#form');
formDOM.addEventListener('submit',function(event){
    event.preventDefault();

    var name = $('#name').val();
    var job = $('#job').val ();

    let data = {
        'name' : name,
        'job' : job
    }
    console.log(data);
    

    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(datas => {
        displayMessage(datas);
        console.log("worked")
    })
    .catch((error) => {
        console.error('Error',error);
    })


});



document.addEventListener("DOMContentLoaded",function(){
    
})