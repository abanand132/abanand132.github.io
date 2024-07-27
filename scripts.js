document.addEventListener('DOMContentLoaded', function () {
    const certButtons = document.querySelectorAll('.cert-btn');
    const certLists = document.querySelectorAll('.cert-list ul');

    function hideAllCertLists() {
        certLists.forEach(list => {
            list.classList.remove('active');
        });
        certButtons.forEach(button => {
            button.classList.remove('active');
        });
    }

    certButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const isActive = button.classList.contains('active');
            hideAllCertLists();
            if (!isActive) {
                certLists[index].classList.add('active');
                button.classList.add('active');
            }
        });
    });

    // Show the first certification list by default
    certButtons[0].classList.add('active');
    certLists[0].classList.add('active');
});
