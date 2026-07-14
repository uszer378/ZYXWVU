
async function loadPersonData() {
    let data = await fetch('person.json');
    let jsoned = await data.json();
    let name = document.getElementById('name')
    let bday = document.getElementById('bday')
    let job = document.getElementById('job')
    let gender = document.getElementById('gender')
    name.textContent = jsoned.name
    job.textContent = jsoned.job
    bday.textContent = jsoned.birthdate
    gender.textContent = jsoned.gender
    

}
loadPersonData();