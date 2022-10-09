// Event handler for when a date is clicked
function date_click(event) {
    var today = date.getDate();
    var day = date.getDay();
    var month = date.getMonth();
    var options = { month: 'long' };
    month = new Intl.DateTimeFormat('en-US', options).format(month);
    var year = date.getFullYear();
    
    $(".events-container").show(250);
    // $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    show_events(event.data.events, event.data.month, event.data.day, event.data.year);
    if(event.data.month===month && event.data.day===day && event.data.year===year){
        $(".add-entry-container").show();
        var add_entry_form = $("<form action='/addEntry' method='GET'></form>");
        var add_entry_button = $("<button class='button' id='add-button'>Add Entry</button>");
        $(add_entry_container).append(add_entry_button)
        $(".add-entry-container").append(add_entry_form)
    } else {
        $(".add-entry-container").empty();
    }
};