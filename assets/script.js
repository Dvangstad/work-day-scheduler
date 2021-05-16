var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDay)

var textareaEl = $("textarea");
var currentHour = moment().format('HH')

for(i=0; i<textareaEl.length; i++){
    if(parseInt(textareaEl[i].id) < currentHour){
        textareaEl[i].setAttribute("class", "col-10 past")
    }else if(parseInt(textareaEl[i].id) == currentHour){
        textareaEl[i].setAttribute("class", "col-10 present")
    }else {
        textareaEl[i].setAttribute("class", "col-10 future")
    }
}

function saveToLocal(){
    var valueToSave = $(this).prev().val();
    var keyToSave = $(this).prev().attr("id")
    localStorage.setItem(keyToSave, valueToSave)
    
}






$("button").on("click", saveToLocal)