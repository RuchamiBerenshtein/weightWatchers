const a = new Address("street", "", 8);
const m = new Manager(1, "firstName", "lastName", a, 454567, "gh@gmail.com");

const onload = () => {
    m.getAll();
}

const addMeet = document.getElementById('addMeeting');
const blur = document.getElementById('blur');
const addMeeting = () => {
    m.newMeeting();
    document.getElementById('date').value = Date.now();
    blur.classList.add('blur');
    addMeet.style.display = "block";
}

const closeInput = () => {
    blur.classList.remove('blur');
    addMeet.style.display = "none";
}