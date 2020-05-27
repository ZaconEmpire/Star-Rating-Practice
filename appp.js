let count = 0;

function rate(item) {
    count = item.id[0];
    sessionStorage.star = count;
    for (var i = 0; i < 5; i++) {
        if(i < count){
            document.getElementById((i+1)).style.color = 'yellow'
        }else{
            document.getElementById((i+1)).style.color = 'white'
        }
    }
}