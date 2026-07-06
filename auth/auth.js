let auth_origin; // = [{ "name": "洛谷", "value": "qwer" }, { "Github": "asdf" }]
var password;

function getAuthData() {
    // 获取 auth 值
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/auth/auth.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            auth_origin = JSON.parse(xhr.responseText);
            refreshAuth(auth_origin);
        }
    };
    xhr.send();
}

$(document).ready(function () {
    // password = prompt("输入密码", "");
    // 调试TODO
    password = "qwsss";
    if (!(password[0] == "q" && password[1] == "w")) {
        alert("密码错误！");
        password = prompt("输入密码", "");
    }

    getAuthData();

});

function unlockValue(originValue) {
    // 写 unlock 算法
    let unlocked = originValue + " unlocked:" + password;
    return unlocked;
}

function refreshAuth(data) {

    console.log(data);

    for (oneAuth in data) {
        addOneAuth(data[oneAuth]);
    }
}

function addOneAuth(data) {
    let listItem = document.createElement("li");
    // let list = document.getElementsByClassName("list");
    listItem.innerHTML = data["name"] + ": " + to6Num(unlockValue(data['value']));
    $(".list").append(listItem);

    console.log("addOneAuth: ", data);
    // $(".list").html(unlockValue(data["value"]));


}

function to6Num(origin) {
    let the6Num = origin + " 6Num";
    return the6Num;
}