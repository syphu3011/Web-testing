let showtype = document.getElementById("show-type")
let showprice = document.getElementById("show-price")
let showsale = document.getElementById("show-sale")


showtype.onclick = function() {
    showFilter(listtype, listprice, listsale)
}
showprice.onclick = function() {
    showFilter(listprice, listsale, listtype)
}
showsale.onclick = function() {
    showFilter(listsale, listtype, listprice)

}

function showFilter(list1, list2, list3) {
    if (list1.style.display == "block") {
        list1.style.display = ""
    } else {
        list1.style.display = "block"
    }
    list2.style.display = ""
    list3.style.display = ""
    showuser.style.display = ""
    showcart.style.display = ""
}

var itemstype = document.getElementById("list-type").getElementsByClassName("list-item")
var itemsprice = document.getElementById("list-price").getElementsByClassName("list-item")
var itemssale = document.getElementById("list-sale").getElementsByClassName("list-item")
select(itemstype, document.getElementById("selected-type"), listtype)
select(itemsprice, document.getElementById("selected-price"), listprice)
select(itemssale, document.getElementById("selected-sale"), listsale)


function select(items, selected, list) {
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            selected.innerHTML = items[i].textContent
            list.style.display = ""
        }
    }
}