
// FETCH API
function getPersons(url,page_number){
    fetch(url + page_number)
    .then(response => response.json())
    .then((data) => {
        //TODO
        displayUsers(data.data);
        displayPagitation(data.total_pages,data.page)
    })
    .catch((err) => console.log(err))
}
function getPerson(id){
    fetch("https://reqres.in/api/users/" + id)
    .then(response => response.json())
    .then((data) => {
        //TODO
        see_details(data);
    })
    .catch((err) => console.log(err))
}


function displayUsers(data){
    const content1body = $('#content1-body');
    $('#content1-body').empty();

    data.forEach(user => {
        content1body.append(`
        <article class="shadow">
                <img src="${user.avatar}" alt="${user.first_name}" width="120">
                <div class="article-body">
                    <h2 id="${user.id}" onclick="getPerson(${user.id})">${user.first_name} ${user.last_name}</h2>
                </div>
        </article>
    `);
        
    });
}

function displayPagitation(total_pages,page){
    const pagitation = $('#dynamic-pages-numbers');
    $('#dynamic-pages-numbers').empty();

    for(let i=1; i <= total_pages; i++){
        if(i == page){
            pagitation.append(`
            <li class="page-item">
                <button class="page-link active" onclick="handleButtonClick(event)">
                    ${i}
                </button>
            </li>
        `);
        }
        else{
            pagitation.append(`
            <li class="page-item">
                <button class="page-link" onclick="handleButtonClick(event)">
                    ${i}
                </button>
            </li>
        `);
        }
        
        
    }
    
}

function handleButtonClick(event){
    var button = event.target;
    pagination_change(button.textContent);
}
function see_details(data){

    $('#content1-body').empty();
    $('#dynamic-pages-numbers').empty();
    const profile_page = $("#content1-body");

    profile_page.append(`
        <div id="profile">
            <div id="profile-head">
                <img src="${data.data['avatar']}" alt="${data.data['first_name']}" width="100%">
                <h2>${data.data['first_name']} ${data.data['last_name']}</h2>
            </div>


            <div id="profile-body">
                <p>${data.data['email']}</p>
            </div>
        </div>
    
    `)

    


}

function pagination_change(number){
    getPersons("https://reqres.in/api/users?page=",number);
}
document.addEventListener("DOMContentLoaded",function(){
    var pagination;
    var nmb;
    if(nmb > 0){
        getPersons("https://reqres.in/api/users?page=",nmb);
        console.log("worked")
    }
    else{
        getPersons("https://reqres.in/api/users?page=",1);
        pagination = document.querySelectorAll('.page-link');
    }
 

    
    
})



