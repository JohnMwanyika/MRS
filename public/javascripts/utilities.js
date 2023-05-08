toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

// this function toggles between activating and deactivating a user on flipping the switch
function handleCheckboxChange(userId, checkbox) {
    if (checkbox.checked) {
        axios.post(`/dashboard/users/update_status/${userId}`, {
                statusId: 1
            }, )
            .then((response) => {
                toastr[response.data.status](response.data.data, response.data.status);
                setTimeout(() => {
                    location.reload();
                }, 3000);
                console.log(response);
            })

    } else {
        axios.post(`/dashboard/users/update_status/${userId}`, {
                statusId: 2
            })
            .then((response) => {
                toastr[response.data.status](response.data.data, response.data.status);
                setTimeout(() => {
                    location.reload();
                }, 3000);
                console.log(response);
            })
    }
}

function resetUserPassword(userId) {

    axios.post(`/dashboard/users/reset_password/${userId}`, {
            userId: userId,
            passReset: 1
        })
        .then((response) => {
            console.log(response);
            toastr[response.data.status](response.data.data, response.data.status);
        })
        .catch((error) => {
            console.log(error);
            toastr[error.data.status](error.data.data, error.data.status)
        });
};

// Wait for 3 seconds and then launch the modal
// setTimeout(function () {
//     document.getElementById('launchModal').click();
// }, 3000);

function resetOwnPassword(userId) {
    // get password from the user
    const pass = document.getElementById('confirm').value;

    axios.post(`/dashboard/reset_password/${userId}`, {
            password: pass,
            passReset: 0
        })
        .then((response) => {
            console.log(response);
            toastr[response.data.status](response.data.data, response.data.status);
            setTimeout(() => {
                window.location.href = '/logout'
            }, 3000);
        })
        .catch((error) => {
            console.log(error);
            toastr[error.data.status](error.data.data, error.data.status)
            setTimeout(() => {
                location.reload();
            }, 3000);
        });
};