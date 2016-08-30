var textcontent = (function () {
    function textcontent() {
    }
    return textcontent;
}());
var Reader = (function () {
    function Reader() {
    }
    Reader.prototype.gettext = function () {
        var ret = new textcontent();
        //这里添加后续代码
        return ret;
    };
    return Reader;
}());
var read = new Reader();
window.onload = function () {
    //添加事件监听
    var ele = document.getElementById("but");
    ele.onclick = function () {
        var t = document.getElementById("text");
        read.pageurl = t.value;
        var ss = read.gettext();
        document.getElementById("title").innerText = ss.title;
        document.getElementById("cont").innerText = ss.content;
    };
};
//# sourceMappingURL=app.js.map