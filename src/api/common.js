//获取cookie
const getcookie = (key) => {
    let str = document.cookie; //username=admin; age=18
    let arr = str.split('; ');
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//设置cookie
const setcookie = (key, val, iday) => {
    let now = new Date();
    now.setDate(now.getDate() + iday);
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

const removeCookie = (key) => {
    setcookie(key, '', -1);
}

module.exports = {
    getcookie,
    setcookie,
    removeCookie
}