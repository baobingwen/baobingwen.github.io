﻿function $(n) {
    return document.getElementById(n)
}
function Load(n, t, s) {
    var e = new XMLHttpRequest;
    e.open("POST", n, !0);
    e.onreadystatechange = function () {
        4 != e.readyState || 200 != e.status && 304 != e.status || s(e.responseText)
    };
    e.send(t);
}
function List(n, t) {
    if(0 == n){
        sall = 0;
    }
    $("ss").innerHTML = levels[_c];
    Load(app, "Ac3/" + _c + "" + n + "" + t, Show)
}
function sp(n) {
    return n <= 9 ? "0" + n : n.toString()
}
var sall, _rm = "";
function Show(n) {
    var n = n.split(""), t = parseInt(n[0]), s = parseInt(n[1]), n = n[2] + _rm, e = new Array, a = (e.length = 0, n.split(""));
    _rm = a[0];
    for (var r = 1; r < a.length; r++)
        e[r] = a[r].split("");
    for (var l, i = [99999999, 99999999], o = [0, 0], c = [], r = e.length - 1; 0 < r; r--) {
        var p, _, u, d, f = document.createElement("div"), g = (f.id = "s" + (r + sall), parseInt(e[r][2])), h = g, L = (1 != g && (g = 0), parseInt(e[r][1])), h = "<span class=flag>" + (2 == h ? f3 : 1 == h ? f1 : f2) + "</span><span class=nick>" + e[r][0] + "</span>" + _use + L / 10 + _sec;
        if (3 < _c) {
            p = parseInt(e[r][5]);
            _ = e[r][3];
            u = e[r][4];
            d = Math.min(p, _ * u - p);
            (o[g] < d || d == o[g] && L < i[g]) && (o[g] = d, c[g] = r, i[g] = L);
            h += "(" + _ + "*" + u + "," + p + _mn + ")";
        } else {
            if (L < i[g]) {
                i[g] = L;
                c[g] = r;
            }
            f.innerHTML = h;
            $("list").appendChild(f);
        }
    }
    $("page").innerHTML = t < s ? "<a href=javascript:List(" + t + "," + s + ")>" + _pg + "</a>" : "";
    null != c[0] && (c[0] += sall, (l = $("s" + c[0])).style.color = _c2, l.style.backgroundColor = _b2);
    null != c[1] && (c[1] += sall, (l = $("s" + c[1])).style.color = _c1, l.style.backgroundColor = _b1);
    sall += e.length;
}
var _c = parseInt(window.location.href.split("#")[1]);
function _s(n) {
    $("list").innerHTML = "";
    $("page").innerHTML = "";
    _rm = "";
    _c = n;
    List(0, 0);
}
if (isNaN(_c)) {
    _c = 2;
}