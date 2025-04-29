function saveGameType(){
    const cards = document.querySelectorAll('#gameTypeGroup .card');

    cards.forEach(card => {
        card.addEventListener('click', function(){
            cards.forEach(c => c.classList.remove('selected')); // elimina la clase de todas las tarjetas

            card.classList.add('selected');
            localStorage.setItem('gameType', card.id);
        });
    });
};



// Llamado a funciones cuando el DOM ha cargado
document.addEventListener('DOMContentLoaded', function() {
    
    const calendarInstance = flatpickr("#calendar", {
        locale: "es",
        dateFormat: "d/m/Y",
        inline: true,
        minDate: "today",
        maxDate: new Date().fp_incr(7),
        monthSelectorType: "static",
        onChange: function(selectedDates, dateStr, instance) {
            document.getElementById("dateInput").value = dateStr; // actualiza el input cuando elijan una fecha
            localStorage.setItem("selectedDate", dateStr);
            
        }
    });
    

    
    saveGameType();
});
