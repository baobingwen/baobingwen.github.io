function $(t) {
    return document.getElementById(t)
}

function gets(t, e, n) {
    var o = new XMLHttpRequest;
    o.open((null != e) ? "POST" : "GET", t, !0);
    o.onreadystatechange = function () {
        if (4 == o.readyState && (200 == o.status || 304 == o.status)) {
            n(o.responseText);
        }
    };
    o.send(e);
}

// 列数，行数，雷数
var X, Y, M;

var _gs, _ln, _ff, _v;
// d31:雷区信息
// d31[y][x][0]	是否已翻开	            0 未翻开，1 已翻开，2 标记为雷
// d31[y][x][1]	是否标记为雷（插旗）	 0 无标记，1 有标记
// d31[y][x][2]	周围雷数	            该格子周围 8 个格子中雷的数量
// d31[y][x][3]	自动展开标记	        用于高级逻辑（如自动展开空区域）
var d31 = [];
var CX = [-1, -1, -1, 0, 0, 1, 1, 1, 0], CY = [-1, 0, 1, -1, 1, -1, 0, 1, 0];

function S98(t, e) {
    ctx.drawImage(gfb[0], 25 * t, 25 * e);
    setTimeout(function () {
        if (0 == d31[e][t][0]) {
            ctx.drawImage(gfs[0], 25 * t, 25 * e);
        }
    }, 120)
}

function c67(t, e) {
    var n, o, r, a;
    o = 0, r = 0;
    for (a = 0; a < 8; a++) {
        f = e + CY[a];
        u = t + CX[a];
        if (0 <= f && f < Y && 0 <= u && u < X) {
            if (2 == (n = (l = d31[f][u])[0])) {
                o++;
            } else {
                if (0 == n && 1 == l[1]) {
                    r = 1;
                }
            }
        }
    }
    var c = o >= d31[e][t][2];
    for (a = 0; a < 8; a++) {
        var l;
        f = e + CY[a];
        u = t + CX[a];
        if (0 <= f && f < Y && 0 <= u && u < X && 0 == (l = d31[f][u])[0]) {
            if (c) {
                if (r) {
                    if (1 == l[1]) {
                        ctx.drawImage(gfs[2], 25 * u, 25 * f);
                        l[0] = 1;
                    }
                } else {
                    o0o(u, f);
                }
            } else {
                S98(u, f);
            }
        }
    }
    if (c && r) {
        f17();
    }
}

function f17() {
    var t, e, n;
    _edn();
    $("face").src = gif[2];
    _gs = 3;
    for (e = 0; e < Y; e++) {
        for (t = 0; t < X; t++) {
            if (0 == (n = d31[e][t])[0]) {
                1 == n[1] && ctx.drawImage(gfs[3], 25 * t, 25 * e)
            } else {
                if (2 == n[0] && 0 == n[1]) {
                    h_f[f_n++] = setInterval(function (t, e) {
                        var n = 0;
                        return function () {
                            ctx.drawImage(0 == n ? gfb[d31[e][t][2]] : gfs[1], 25 * t, 25 * e);
                            n = !n;
                        }
                    }(t, e), 800)
                }
            }
        }
    }
}

function see() {
    _ln = [];
    var t, e, n, o, r;
    n = 0, o = 0;
    for (r = 0; r < Y; r++) {
        for (t = 0; t < X; t++) {
            if (2 == (e = d31[r][t])[0] && 1 != e[1])
                return 1;
            if (0 == e[0] && 0 == e[3]) {
                if (1 == e[1]) {
                    n++;
                } else {
                    o++;
                    _ln.push([t, r]);
                }
            }
        }
    }
    return n != o ? 2 : 0
}

function gtm(t, e) {
    var n, o, r, a;
    r = 0;
    for (a = 0; a < 8; a++) {
        o = e + CY[a];
        n = t + CX[a];
        if (0 <= o && o < Y && 0 <= n && n < X && 1 == d31[o][n][1]) {
            r++;
        }
    }
    return r
}

function rv() {
    var t, e;
    for (e = 0; e < _ln.length; e++) {
        t = _ln[e];
        (t = d31[t[1]][t[0]])[1] = 0 == t[1] ? 1 : 0;
    }
}

function ck() {
    if (0 != see()) {
        return 1;
    }
    var t, e, n, o;
    rv();
    for (e = 0; e < Y; e++)
        for (t = 0; t < X; t++)
            if (o = (n = d31[e][t])[2], 1 == n[0] && 0 != o && gtm(t, e) != o)
                return rv(), 2;
    for (e = 0; e < Y; e++)
        for (t = 0; t < X; t++)
            1 != (n = d31[e][t])[0] && (n[2] = gtm(t, e));
    return 0
}

function ab(t, e) {
    var n, o, r, a, c, l, f, u, i, s, _;
    for (_ = 0; _ < 9; _++) {
        i = e + CY[_];
        u = t + CX[_];
        if (0 <= i && i < Y && 0 <= u && u < X && (f = (n = d31[i][u])[2], 1 == n[0]) && 0 < f) {
            for (s = l = 0; s < 8; s++) {
                r = i + CY[s];
                a = u + CX[s];
                if (0 <= r && r < Y && 0 <= a && a < X) {
                    0 == (c = (o = d31[r][a])[0]) ? l++ : 2 == c && (1 == o[1] ? f-- : l++);
                }
            }
            if (0 < l && f == l) {
                for (s = 0; s < 8; s++) {
                    r = i + CY[s];
                    a = u + CX[s];
                    if (0 <= r && r < Y && 0 <= a && a < X) {
                        if (1 != (c = (o = d31[r][a])[0]) && (o[3] = 1), 0 == c) {
                            if (1 == _af) {
                                M5k(a, r)
                            }
                        }
                    }
                }
            }
        }
    }
}

function o0o(t, e) {
    var n = d31[e][t];
    if (1 == n[1] && (1 == _gs && ck(), 1 == n[1]))
        return ctx.drawImage(gfs[2], 25 * t, 25 * e), n[0] = 1, f17(), 1;
    if (n[0] = 1, ctx.drawImage(gfb[n[2]], 25 * t, 25 * e), 0 == --RB) {
        scs();
    }
    else if (0 == n[2]) {
        for (var o, r, a = 0; a < 8; a++) {
            o = e + CY[a];
            r = t + CX[a];
            0 <= o && o < Y && 0 <= r && r < X && 0 == d31[o][r][0] && o0o(r, o);
        }
    }
    return ab(t, e), 0
}

function scs() {
    var t, e, n;
    _ff = _nf ? 2 : _af;
    _gs = 2;
    _edn();
    for (e = 0; e < Y; e++)
        for (t = 0; t < X; t++)
            0 == (n = d31[e][t])[0] && (1 != n[1] ? bug(1, t, e) : M5k(t, e));
    0 != RM && bug(2, t, e);
    crm(M);
    $("face").src = gif[1];
    up();
}

function up() {
    var e, t;
    if (3 < _v && _t0 < 20) {
        return;
    } else {
        t = "B" + (e = lid()) + "c3/" + _v + "" + _t0 + "" + _ff;
        3 < _v && (t += "" + X + "" + Y + "" + M);
        gets(app, t, function (t) {
            "" == e && 1 < t.length && (_id = t, $("uid").innerHTML = t, localStorage.setItem("uid", t))
        })
    }
}

// t = "rm","es"
function DS(t) {
    var o = $(t), r = o.getContext("2d"), a = 3;
    return function (t) {
        var e = (t = t < 10 ? "00" + t : t < 100 ? "0" + t : t.toString()).length;
        if (e != a) {
            o.width = 13 * e;
            a = e;
        }
        for (var n = 0; n < e; n++) {
            r.drawImage(gfd[parseInt(t.charAt(n))], 13 * n, 0)
        }
    }
}

function kai(t, e) {
    var n, o;
    n = RB;
    for (o = 8; 0 <= o && 0 < n; o--) {
        var r;
        var a = e + CY[o];
        var c = t + CX[o];
        if (0 <= a && a < Y && 0 <= c && c < X) {
            r = p32[a * X + c];
            if (1 == d31[a][c][1]) {
                a = Math.floor(Math.random() * n);
                mplus(r, -1);
                mplus(a, 1);
                ex(a, --n);
            } else {
                ex(r, --n);
            }
        }
    }
    _es()
}

var d32 = [], p32 = [];

// 初始化雷局分布信息
function _gnt() {
    var t, e, n, o;
    // 初始化d31[]，d31[0~Y-1][0~X-1][0~3]
    for (o = 0; o < Y; o++) {
        d31[o] = [];
        for (t = 0; t < X; t++)
            d31[o][t] = [0, 0, 0, 0];
    }
    // 初始化d32[]，p32[]
    for (n = 0; n < XY; n++) {
        d32[n] = n;
        p32[n] = n;
    }
    RB = XY; // 剩余格子数
    for (e = 0; e < M; e++) {
        n = Math.floor(Math.random() * RB);
        RB = RB - 1;
        ex(n, RB);
    }
    for (n = RB; n < XY; n++) {
        mplus(n, 1);
    }
    RM = M; // 剩余雷数
    RB = XY - RM; // 剩余不是雷的格子数
}

// 带反向索引维护的双数组元素交换
function ex(t, e) {
    var n = d32[t];
    var o = d32[e];
    d32[t] = o;
    d32[e] = n;
    p32[n] = e;
    p32[o] = t;
}

function mplus(t, e) {
    var t = d32[t];
    var n = Math.floor(t / X);
    var o = t % X;
    d31[n][o][1] += e;
    for (z = 0; z < 8; z++) {
        cy = n + CY[z];
        cx = o + CX[z];
        if (0 <= cy && cy < Y && 0 <= cx && cx < X) {
            d31[cy][cx][2] += e;
        }
    }
}

var _nf, _mp1, _mp2, _x0, _y0, _hl, h_f = [], f_n = 0;

// 初始化一局游戏
function _45() {
    if (he > 0) {
        clearInterval(he);
        he = 0;
    }
    for (var t = 0; t < f_n; t++)
        clearInterval(h_f[t]);
    f_n = 0;
    _gnt();
    _d46();
    _y0 = _x0 = -1;
    _nf = 1;
    _gs = 0;
}

function _65(t) {
    var e, n, o;
    if (_tch || 1 < _gs) {
        return;
    }
    n = paf.getBoundingClientRect();
    e = Math.floor((t.clientX - n.left) / 25);
    n = Math.floor((t.clientY - n.top) / 25);
    if (e < 0 || e == X || n < 0 || n == Y) {
        return;
    }
    _x0 = e;
    _y0 = n;
    o = d31[_y0][e][0];
    if (2 == t.button) {
        if (1 == _mp2) {
            return;
        }
        if (1 == o) {
            c67(e, n);
        } else {
            M5k(e, n);
        }
    } else {
        if (1 == _mp1) {
            return;
        }
        if (0 == o) {
            if (0 == _gs) {
                kai(e, n);
            }
            o0o(e, n);
        } else {
            if (1 == o) {
                c67(e, n);
            } else {
                M5k(e, n);
            }
        }
    }
}

function _67(t) {
    var e, n, o;
    if (_tch || 1 < _gs) {
        return;
    }
    n = paf.getBoundingClientRect();
    e = Math.floor((t.clientX - n.left) / 25);
    n = Math.floor((t.clientY - n.top) / 25);
    if (e < 0 || e == X || n < 0 || n == Y) {
        return;
    }
    o = d31[n][e][0];
    if (2 == t.button) {
        if (null == _mp2) {
            return;
        }
        if (1 == o) {
            c67(e, n);
        } else {
            M5k(e, n)
        }
    } else {
        if (null == _mp1) {
            return;
        }
        if (0 == o) {
            if (0 == _gs) {
                kai(e, n);
            }
            o0o(e, n);
        } else {
            if (1 == o) {
                c67(e, n);
            } else {
                M5k(e, n);
            }
        }
    }
}

function _77(t) {
    var e, n, o;
    if (1 < _gs) {
        return;
    }
    _tch = 1;
    e = paf.getBoundingClientRect();
    n = Math.floor((t.touches[0].clientX - e.left) / 25);
    o = Math.floor((t.touches[0].clientY - e.top) / 25);
    if (n < 0 || n == X || o < 0 || o == Y) {
        return;
    }
    if (1 == d31[o][n][0]) {
        c67(n, o);
    } else {
        _hl = setTimeout(function () {
            return lgt(n, o);
        }, 320);
    }
}

function lgt(t, e) {
    if (1 == _opn && null == _tpn) {
        return;
    }
    if (0 == _gs) {
        kai(t, e);
        o0o(t, e);
    } else {
        _tch = 3;
        if (null == _tpn) {
            if (2 == d31[e][t][0]) {
                M5k(t, e);
            }
            if (0 == d31[e][t][0]) {
                o0o(t, e);
            }
        } else {
            M5k(t, e);
        }
    }
}

var _af, tc0 = 0;

function _75(t) {
    if (1 == _tch) {
        var e = paf.getBoundingClientRect();
        n = Math.floor((t.changedTouches[0].clientX - e.left) / 25);
        e = Math.floor((t.changedTouches[0].clientY - e.top) / 25);
        if (n < 0 || n == X || e < 0 || e == Y)
            return;
        var o, r, a = d31[e][n][0];
        if (0 == _gs) {
            kai(n, e);
            o0o(n, e);
        } else {
            if (null == _tpn) {
                if (1 == a) {
                    return;
                }
                o = Date.now();
                r = n == _x0 && e == _y0 ? o - tc0 : (_x0 = n, _y0 = e, tc0 = Date.now(), 1e3);
                if (1 == _opn && r < 400 && 0 == a) {
                    o0o(n, e);
                } else {
                    M5k(n, e);
                }
                tc0 = o;
            } else {
                if (0 == a) {
                    o0o(n, e);
                } else if (2 == a) {
                    M5k(n, e)
                }
            }
        }
        _tch = 4;
        clearTimeout(_hl);
    }
    t.preventDefault ? t.preventDefault() : window.event.returnValue = !1
}

// 自动标雷
function saf() {
    if ($("af").checked) {
        _af = 1;
    } else {
        _af = 0;
    }
    localStorage.setItem("af", _af);
    _45()
}

function _d46() {
    _edn();
    _tch = he = 0;
    _mp1 = localStorage.getItem("_mp1");
    _mp2 = localStorage.getItem("_mp2");
    _tpn = localStorage.getItem("tpn");
    _opn = localStorage.getItem("opn");
    null == (_af = localStorage.getItem("af")) && (_af = af0);
    var t = 25 * X;
    $("p42").style.width = 4 + t + "px";
    paf.width = t;
    paf.height = 25 * Y;
    $("face").src = gif[0];
    for (var e = 0; e < X; e++)
        for (var n = 0; n < Y; n++)
            ctx.drawImage(gfs[0], 25 * e, 25 * n);
    paf.onmousedown = function (t) {
        _65(t)
    };
    paf.onmouseup = function (t) {
        _67(t)
    };
    paf.ontouchstart = function (t) {
        _77(t)
    };
    paf.ontouchmove = function () {
        _tch = 2;
        clearTimeout(_hl)
    };
    paf.ontouchend = function (t) {
        _75(t)
    };
    crm(RM);
    ces(0);
    $("af").checked = parseInt(_af)
}

// 
function _edn() {
    if (0 < he) {
        clearInterval(he);
        he = 0;
        _t0 = Date.now() - _t0;
        ces(parseInt(_t0 / 1e3));
        _t0 = Math.ceil(_t0 / 100);
    } else {
        _t0 = 0;
    }
}

var _t0, e33, _tpn, _opn, _tc;
// 剩余雷数, 剩余不是雷的格子数
var RM, RB;
var paf, ctx, crm, ces, he = 0;

function _es() {
    _t0 = Date.now(), e33 = 0, _gs = 1, he = setInterval(function () {
        ces(++e33)
    }, 1e3)
}

function M5k(t, e) {
    _nf = 0;
    var n = d31[e][t];
    if (0 == n[0]) {
        if (0 >= RM) {
            return;
        }
        if (0 == n[1]) {
            ck();
        }
        ctx.drawImage(gfs[1], 25 * t, 25 * e);
        n[0] = 2;
        crm(--RM);
    } else {
        if (2 != n[0]) {
            return;
        }
        ctx.drawImage(gfs[0], 25 * t, 25 * e);
        n[0] = 0;
        crm(++RM);
    }
}

function start() {
    score = $("ss").href + "#"; // 记录分数的链接, ss.herf = scores.htm
    var t = localStorage.getItem("df5");
    if (null == t) {
        ($("hm").value = 15, $("vm").value = 15, $("mm").value = 20)
    } else {
        t = t.split(";");
        $("hm").value = t[0];
        $("vm").value = t[1];
        $("mm").value = t[2];
    }
    document.oncontextmenu = function () {
        return !1;
    };
    document.onselectstart = function () {
        return !1;
    };
    paf = $("paf");
    ctx = paf.getContext("2d");
    crm = DS("rm");
    ces = DS("es");
    _123(localStorage.getItem("ch7"));
    $("uid").innerHTML = lid();
}

// XY: 宽 * 高, SW: 屏幕宽度, SH: 屏幕高度
var XY, SW, SH;
// score: 记录分数的链接, _id: 用户ID
var score, _id = null;

/** 加载id, 返回昵称string
 *  如果没有id，则从localStorage中获取nick或uid
*/
function lid() {
    var t;
    if (null != _id) {
        return _id;
    }
    t = localStorage.getItem("nick");
    if (null == t || "" == t) {
        t = localStorage.getItem("uid")
    }
    if (null == t) {
        return "";
    } else {
        return t;
    }
}

/*
* t = 1,2,3,4,5
* 1 = 基础, 2 = 中级, 3 = 专家, 4 = 满屏, 5 = 自定义
* _123() = 设置游戏参数
*/
function _123(t) {
    _gs = 0;
    SW = document.body.clientWidth; // 屏幕宽度
    SH = document.body.clientHeight; // 屏幕高度
    if (null == t) {
        if (SW < 560) {
            t = 1; // 屏幕宽度小于560px, 则设置为基础
        } else {
            t = 2; // 屏幕宽度大于560px, 则设置为中级
        }
    }
    _v = t;
    $("custom").style.display = 5 == t ? "" : "none";
    if (1 == t) { // 基础
        Y = X = 9; // 高 = 宽 = 9
        M = 10; // 雷数10
        XY = 81; // 高宽积 81
    }
    else if (2 == t) { // 中级
        Y = X = 16; // 高 = 宽 = 16
        M = 40; // 雷数40
        XY = 256; // 高宽积 256
    }
    else if (3 == t) { // 专家
        M = 99; // 雷数99
        Y = SH < SW ? (X = 30, 16) : (X = 16, 30); // 宽、高 = 16、30
        XY = 480; // 宽高积 480
    }
    else if (4 == t) { // 满屏
        X = parseInt((SW - 18) / 25); // 宽 = 屏幕宽度/25
        Y = parseInt((SH - 54) / 25); // 高 = 屏幕高度/25
        XY = X * Y; // 宽高积
        M = 480 <= XY ? .20625 * XY : XY * XY / 5760 + XY / 8; // 雷数
        M = parseInt(M); // 雷数取整
    }
    else { // 自定义
        if (5 != t) {
            return;
        }
        X = parseInt($("hm").value); // 横
        Y = parseInt($("vm").value); // 竖
        XY = X * Y; // 横*竖
        M = parseInt($("mm").value); // 雷数
        if (XY < M) {
            M = XY; // 如果 横*竖 < 雷数, 则雷数 = 横*竖
        }
    }
    _45();
    localStorage.setItem("ch7", t);
    $("ss").href = score + _v;
}

function udf() {
    _123(5);
    localStorage.setItem("df5", $("hm").value + ";" + $("vm").value + ";" + $("mm").value)
}

function sload(t) {
    var e = localStorage.getItem(t);
    if (null == e) {
        e = 0;
    }
    n = document.getElementsByName(t);
    for (i = 0; i < n.length; i++) {
        if (n[i].value == e) {
            n[i].checked = !0;
        }
    }
    return e;
}

var rlist = ["_mp1", "_mp2", "tpn", "opn"];

function _save(t, e) {
    var n = rlist[t];
    if (0 == e) {
        localStorage.removeItem(n);
        e = null;
    } else {
        localStorage.setItem(n, e);
    }
    if (0 == t) {
        _mp1 = e;
    } else if (1 == t) {
        _mp2 = e
    } else if (2 == t) {
        _tpn = e
    } else {
        _opn = e;
    }
}

function smore(t) {
    if (0 == t) {
        $("topen").style.display = "block";
        $("thint").style.display = "none";
    } else {
        $("thint").style.display = "block";
        $("topen").style.display = "none";
    }
}

// 控制 设置电脑鼠标按键起效时间点 的 显示
var mouse2 = function () {
    var t = 0;
    return function () {
        sload("_mp1");
        sload("_mp2");
        if (0 == t) {
            $("_mouse").style.display = "block";
            $("setm").innerText = shou;
            t = 1;
        } else {
            $("_mouse").style.display = "none";
            $("setm").innerText = shez;
            t = 0;
        }
    }
}();

var touch2 = function () {
    var e = 0;
    return function () {
        var t = sload("tpn");
        sload("opn");
        smore(t);
        if (0 == e) {
            $("_touch").style.display = "block";
            $("sett").innerText = shou;
            e = 1;
        } else {
            $("_touch").style.display = "none";
            $("sett").innerText = shez;
            e = 0;
        }
    }
}();

var setr = function () {
    var t = 0;
    return function () {
        if (0 == t) {
            $("nick").value = localStorage.getItem("nick");
            $("_rename").style.display = "block", $("setr").innerText = shou;
            t = 1;
        } else {
            $("_rename").style.display = "none";
            $("setr").innerText = shez;
            t = 0;
        }
    }
}();

function rename() {
    var t = $("nick").value.trim();
    if (t.charCodeAt(0) < 65) {
        alert(w1)
    } else {
        localStorage.setItem("nick", t);
        $("uid").innerHTML = lid();
        setr()
    }
}

function bcolor() {
    var t = document.body.style;
    e = document.getElementsByTagName("a");
    if ($("bcolor").checked) {
        localStorage.setItem("night", 1);
        t.backgroundColor = "black";
        t.color = "silver";
        for (var n = 0; n < e.length; n++)
            e[n].style.color = "silver";
    }
    else {
        localStorage.setItem("night", 0);
        t.backgroundColor = "#ececec"; // f7f7f0
        t.color = "";
        for (n = 0; n < e.length; n++)
            e[n].style.color = "";
    }
}

function night() {
    var t = localStorage.getItem("night");
    if (null == t) {
        t = nif0;
    }
    $("bcolor").checked = parseInt(t);
    bcolor()
}

function bug(t, e, n) {
    gets("bug.php", VER + ":" + t, function (t) { })
}
