$(document).ready(function() {
    $('#productosTable').DataTable({
        "paging": true,
        "searching": true,
        "ordering": true,
        "language": {
            "search": "Buscar:", // Texto personalizado para el input de búsqueda
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "paginate": {
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
        "columnDefs": [
            { "orderable": false, "targets": 1 }  // Desactivar el orden en la columna 'Precio'
        ]
    });
});
