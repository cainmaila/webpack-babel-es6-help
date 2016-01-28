let cain = "cainXXX";

class MyCalss {
    constructor(_name) {
        this.myname = _name;
    }
    talk(){
        alert(this.myname);
    }
}

let ss = new MyCalss(cain);
ss.talk();
