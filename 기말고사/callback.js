function getMessage(callback) {
    setTimeout(function() { callback("반갑습니다!");}, 1000);}
console.log("아직 getMessage 수행 전입니다");
getMessage(function(message) {console.log(message)});
console.log("이미 getMessage 수행이 완료되었습니다");
