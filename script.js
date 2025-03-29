console.log("Script loaded successfully!");

document.getElementById('reg_form').addEventListener('submit',function(event){

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const study_yr = document.getElementById('year_study').value;
    const checkin = document.getElementById('check_in').value;
    const checkout = document.getElementById('check_out').value;

    if(!name || !email || !study_yr || !checkin || !checkout){
        alert("Please fill all fields!");
        event.preventDefault();
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Invalid email format!');
        event.preventDefault();
        return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
        alert('Check-out time must be after check-in time!');
        event.preventDefault();
        return;
    }
    

    alert("Registration successful!");

});
