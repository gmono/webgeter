
class textcontent {
    title: string;//标题
    content: string;//正文
}

class Reader {
    pageurl: string;
    gettext(): textcontent {
        var ret = new textcontent();
        //这里添加后续代码
        return ret;
    }
}
var read = new Reader();
window.onload = () => {
    //添加事件监听
    var ele = document.getElementById("but");
    ele.onclick = () => {
        var t = document.getElementById("text") as HTMLInputElement;
        read.pageurl = t.value;
        var ss = read.gettext();
        document.getElementById("title").innerText = ss.title;
        document.getElementById("cont").innerText = ss.content;

    }

}