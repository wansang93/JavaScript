let 당첨자수 = 2;
// 이 부분을 이해하면 가능할 듯?
let 댓글선택자 = 'cwj9ozl2>div>.UFIComment.UFICommentActorName';

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

var list = [];
document.querySelectorAll(댓글선택자).forEach(function (e) {
    list.push(e.innerText);
});

list = list.filter((v, i, a) => a.indexOf(v) === i);

shuffle(list)
console.log(list.slice(0, 당첨자수));
