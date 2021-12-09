function getMessage(cb) {
    setTimeout(1000);
}

console.log("아직 getMessage 수행 전입니다");

getMessage("반갑습니다!");

console.log("이미 getMessage 수행이 완료되었습니다");
