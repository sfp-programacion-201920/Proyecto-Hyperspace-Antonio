document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
    if (!entry.classList.contains('active')) {
        document.querySelector('.feedback li.active').classList.remove('active');
        entry.classList.add('active');
    }
    e.preventDefault();
}));

function validpassword() {
    var contraseña1 = document.forms["Formulario"]["password"].value;
    var contraseña2 = document.forms["Formulario"]["password2"].value;
    if (contraseña1 != contraseña2) {
        alert("Las contraseñas no coinciden");
        return false;
    } else {
        alert("Las contraseñas coinciden");
        return false;
    }
}