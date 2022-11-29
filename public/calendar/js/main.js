(function($) {

	"use strict";

// userEntries is all of the entries of the current user
console.log(userEntries);

// Setup the calendar with the current date
$(document).ready(function(){
    var date = new Date();
    var today = date.getDate();
    var year = date.getFullYear();
    // Set click handlers for DOM elements
    $(".right-button").click({date: date}, next_year);
    $(".left-button").click({date: date}, prev_year);
    $(".month").click({date: date}, month_click);
    // Set current month as active
    $(".months-row").children().eq(date.getMonth()).addClass("active-month");
    init_calendar(date);
    var entries = check_entries(today, date.getMonth()+1, date.getFullYear());
    show_entries(entries, months[date.getMonth()], today, year);
    $(".add-entry-container").show();
    var add_entry_form = $("<form action='/addEntry' method='GET'></form>");
    var add_entry_button = $("<button class='button-15' id='add-button'>Add Entry</button>");
    $(add_entry_form).append(add_entry_button)
    $(".add-entry-container").append(add_entry_form)
});

// Initialize the calendar by appending the HTML dates
function init_calendar(date) {
    $(".tbody").empty();
    $(".entry-container").empty();
    $(".add-entry-container").empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = days_in_month(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
    // Set date to 1 to find the first day of the month
    date.setDate(1);
    var first_day = date.getDay();
    // 35+firstDay is the number of date elements to be added to the dates table
    // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
    for(var i=0; i<35+first_day; i++) {
        // Since some of the elements will be blank, 
        // need to calculate actual date from index
        var day = i-first_day+1;
        // If it is a sunday, make a new row
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
        // if current index isn't a day in this month, make it blank
        if(i < first_day || day > day_count) {
            var curr_date = $("<td class='table-date nil' style='cursor:default;'>"+"</td>");
            row.append(curr_date);
        }   
        else {
            var curr_date = $("<td class='table-date'>"+day+"</td>");
            var entries = check_entries(day, month+1, year);
            if(today===day && $(".active-date").length===0) {
                curr_date.addClass("todays-date");
                curr_date.addClass("active-date");
                show_entries(entries, months[month], day, year);
            }
            // If this date has any entries, style it with .entry-date
            if(entries.length!==0) {
                curr_date.addClass("entry-date");
            }
            // Set onClick handler for clicking a date
            curr_date.click({entries: entries, month: months[month], day:day, year:year}, date_click);
            row.append(curr_date);
        }
    }
    // Append the last row and set the current year
    calendar_days.append(row);
    $(".year").text(year);
}

// Get the number of days in a given month/year
function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);    
}

// Event handler for when a date is clicked
function date_click(event) {
    $(".add-entry-container").empty();
    $(".entry-container").show(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    show_entries(event.data.entries, event.data.month, event.data.day, event.data.year);
    console.log(event.data.entries, event.data.month, event.data.day, event.data.year);
    let date = new Date();
    let dayNow = date.getDate();
    let month = date.getMonth();
    let options = { month: 'long' };
    month = new Intl.DateTimeFormat('en-US', options).format(date);
    let yearNow = date.getFullYear();
    if(event.data.month===month && event.data.day===dayNow && event.data.year===yearNow){
        $(".add-entry-container").show();
        var add_entry_form = $("<form action='/addEntry' method='GET'></form>");
        var add_entry_button = $("<button class='button-15' id='add-button'>Add Entry</button>");
        $(add_entry_form).append(add_entry_button)
        $(".add-entry-container").append(add_entry_form)
    }
};

// Event handler for when a month is clicked
function month_click(event) {
    $(".entry-container").show(250);
    $(".add-entry-container").empty();
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Display all events of the selected date in card views
function show_entries(entries, month, day, year) {
    // Clear the dates container
    $(".entry-container").empty();
    $(".entry-container").show(250);
    let monthAsNumber;
    switch(month){
        case 'January':
            monthAsNumber = 1;
            break;
        case 'February':
            monthAsNumber = 2;
            break;
        case 'March':
            monthAsNumber = 3;
            break;
        case 'April':
            monthAsNumber = 4;
            break;
        case 'May':
            monthAsNumber = 5;
            break;
        case 'June':
            monthAsNumber = 6;
            break;
        case 'July':
            monthAsNumber = 7;
            break;
        case 'August':
            monthAsNumber = 8;
            break;
        case 'September':
            monthAsNumber = 9;
            break;
        case 'October':
            monthAsNumber = 10;
            break;
        case 'November':
            monthAsNumber = 11;
            break;
        case 'December':
            monthAsNumber = 12;
            break;
    }
    let activeDate = `${monthAsNumber}${day}${year}`
    let activeDateAsNum = Number(activeDate);

    // If there are no entries for this date, notify the user
    if(entries.length===0) {
        var entry_card = $("<div class='entry-card'></div>");
        var entry_name = $("<div class='entry-name'>There are no entries for "+month+" "+day+", "+year+".</div>");
        $(entry_card).append(entry_name);
        $(".entry-container").append(entry_card);
    } else if(entries.length===1){
        var entry_card = $("<div class='entry-card has-entry'></div>");
        var entry_click = $(`<a href='/dateEntry/${activeDateAsNum}' class='entry-click'>There is 1 entry for ${month} ${day}, ${year}.</a>`);
        $(entry_card).append(entry_click);
        $(".entry-container").append(entry_card);
    }
    else {
        var entry_card = $("<div class='entry-card has-entry'></div>");
        var entry_click = $(`<a href='/dateEntry/${activeDateAsNum}' class='entry-click'>There are ${entries.length} entries for ${month} ${day}, ${year}.</a>`);
        $(entry_card).append(entry_click);
        $(".entry-container").append(entry_card);
    }
}

// Checks if a specific date has any entries
function check_entries(day, month, year) {
    var entries = [];
    for(var i=0; i<userEntries.length; i++) {
        if(userEntries[i]["day"]===day &&
            userEntries[i]["month"]===month &&
            userEntries[i]["year"]===year) {
                entries.push(userEntries[i]);
            }
    }
    return entries;
}

const months = [ 
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December" 
];

})(jQuery);

// var todaysDate = new Date();
// var dd = String(todaysDate.getDate()).padStart(2, '0');
// var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = todaysDate.getFullYear();

// todaysDate = mm + '/' + dd + '/' + yyyy;
// function addZero(i) {
//     if (i < 10) {i = "0" + i}
//     return i;
//   }
// const currentTime = `${addZero(todaysDate.getHours())}:${addZero(todaysDate.getMinutes())}`

// window.onload = (event) => {
//     document.querySelector('.todaysDate').innerHTML = todaysDate
// };