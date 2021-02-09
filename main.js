var user_name;
function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("User Name",user_name);
    window.location="second_page.html"
}