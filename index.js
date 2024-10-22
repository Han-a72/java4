

let count = 0;
document.getElementById("increasing").onclick = function(){
    count+=1;
    document.getElementById("labelItem").innerHTML = count;
}

document.getElementById("decreasing").onclick = function(){
    count-=1;
    document.getElementById("labelItem").innerHTML = count;
}



// function increaseCount() {
//     count += 1;
//     document.getElementById("labelItem").innerHTML = count;
// }

// function decreaseCount() {
//     count -= 1;
//     document.getElementById("labelItem").innerHTML = count;
// }
