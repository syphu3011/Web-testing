let exit = document.getElementById("exit-log")
let divAcc = document.getElementById("account")
let signup = document.getElementById("signup")
let btnsignup = document.getElementById("btn-signup")
let btnlogin = document.getElementById("btn-login")
let mailorphone = document.getElementById("mailorphone")
let passwd = document.getElementById("passwd")
let btnlogout = document.getElementById("log-out")
let btnback = '<div id="back"><img style="height: 15px; transform: rotate(180deg);" src="Image/btn-next-prev.png" alt=""><div>quay lại</div></div>'

// let data = JSON.parse(localStorage.getItem("data"))

function createButtonBack(cur, newele) {
    let div = document.createElement("div")
    div.id = "back"
    let img = document.createElement("img")
    img.src = "Image/btn-next-prev.png"
    img.style.transform = "rotate(180deg)"
    img.style.height = "15px"
    let node = document.createTextNode("quay lại")
    div.appendChild(img)
    div.appendChild(node)
    div.onclick = function() {
        showacc(cur, 0, 1200)
        setTimeout(() => {
            cur.style.display = ""
            document.getElementById("back").style.display = ""
            showacc(newele, -500, 0)
        }, 450);
    }
    return div
}

exit.onclick = function() {
    if (signin.style.display == "block") {
        showacc(signin, 0, 1200)
    }
    if (signup.style.display == "block") {
        showacc(signup, 0, 1200)
    }
    if (in4.style.display == "block") {
        showacc(in4, 0, 1200)
    }
    if (updateinf.style.display == "block") {
        showacc(updateinf, 0, 1200)
    }
    if (onclickProduct.style.display == "block") {
        showacc(onclickProduct, 0, 1200)
    }
    if (setnewpass.style.display == "block") {
        showacc(setnewpass, 0, 1200)
    }
    setTimeout(() => {
        signin.style.display = ""
        divAcc.style.display = ""
        signup.style.display = ""
        setnewpass.style.display = ""
        onclickProduct.style.display = ""
        in4.style.display = ""
        updateinf.style.display = ""
    }, 450);

}
btnsignup.onclick = function() {
    showacc(signin, 0, 1200)
    setTimeout(() => {
        signin.style.display = ""
        signup.appendChild(createButtonBack(signup, signin))
        showacc(signup, -500, 0)
    }, 450);
}
btnback.onclick = function() {
    showacc(signup, 0, 1200)
    setTimeout(() => {
        signup.style.display = ""
        showacc(signin, -500, 0)
    }, 450);
}

btnlogout.onclick = function() {
    currentUser = null
    username = ""
    showuser.style.display = ""
}
document.getElementById("forgot-pass").onclick = function() {
    let setnewpass = document.getElementById("setnewpass")
    showacc(signin, 0, 1200)
    setTimeout(() => {
        signin.style.display = ""
        setnewpass.appendChild(createButtonBack(setnewpass, signin))
        showacc(setnewpass, -500, 0)
    }, 300);
}