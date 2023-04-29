window.addEventListener('DOMContentLoaded', event => {
    const newMails = document.querySelector('#newMails');
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
        // new $.fn.dataTable.Buttons(datatablesSimple, {
        //     buttons: [
        //         'copy',
        //         'excelHtml5',
        //         'pdfHtml5',
        //         'print'
        //     ]
        // });
        // datatablesSimple.buttons().container().appendTo($('#datatablesSimple_wrapper .col-md-6:eq(0)'));
    }
    if (newMails) {
        new simpleDatatables.DataTable(newMails, {
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'pdfHtml5',
                'print'
            ]
        });
    }

});

// Simple-DataTables
// https://github.com/fiduswriter/Simple-DataTables/wiki