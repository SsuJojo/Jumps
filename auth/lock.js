//加密;
//word:要加密的内容
//加密秘钥
function asda(word, pwd) {
    var key = CryptoJS.enc.Utf8.parse(pwd);
    var result = CryptoJS.AES.encrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log("加密后 ====> " + result);
}

// word = prompt();
asda(word, "123456");