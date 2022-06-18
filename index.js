Interger 1:
alert("1-Masala");

let a=Number(prompt("1-raqamni kiriting"));
let b=Number(prompt("2-raqamni kiriting"));

if (a>0 && a<1000 && b<1000 && b>0) {
let c=((Math.pow(a, 3)-Math.pow(b,3))+(Math.pow(a, 3)+Math.pow(b, 3)));
alert(Math.pow(c, 1/4))
}

else {
  alert("Iltimos 0 va 1000 oraliqda sonlarni tanlang")
}

Interger 2:

alert("2-Masala");

let a=Number(prompt("1-raqamni kiriting"));
let b=Number(prompt("2-raqamni kiriting"));

if (a>0 && a<1000 && b<1000 && b>0) {
  alert(Math.pow(((1/6*Math.pow(a, 1/2))+(1/3*Math.pow(b, 1/2))), 2))
}

else {
  alert("Iltimos 0 va 1000 oraliqda sonlarni tanlang")
}

Interger 3:

alert("3-Masala");

let a=prompt("Iltmos 3 xonali raqam kiriting: ");
alert(a.charAt(a.length-1)+a.charAt(1)+a.charAt(0));


Interger 4:

alert("4-Masala");

let a=prompt("Iltmos 3 xonali raqam kiriting: ");

alert(a.charAt(1)+a.charAt(0)+a.charAt(2));

Interger 5:

alert("5-Masala");

let a=Number(prompt("1-raqamni kiriting"));
let b=Number(prompt("2-raqamni kiriting"));

if (a>0 && a<1000 && b<1000 && b>0) {
  alert(Math.round(9*(Math.pow(a, 2))*b-27*(Math.pow(a, 2))*(Math.pow(b, 2))+15*(Math.pow(b, 2))));

}

else {
  alert("Iltimos 0 va 1000 oraliqda sonlarni tanlang")
}

Interger 6:

alert("6-Masala");

let r=Number(prompt("r ning qiymatini kiriting"));
let n=Number(prompt("n ning qiymatini kiriting"));
let a=Number(prompt("a ning qiymatini kiriting"));
let b=Number(prompt("b ning qiymatini kiriting"));

if (a>0 && a<1000 && b<1000 && b>0 && n<1000 && n>0 && r<1000 && r>0) {
  let top=((Math.pow((1+r/100), n)));
  let bottom=(Math.pow((Math.pow(a, 2))+(Math.pow(b, 2)), 1/2));
  alert(top/bottom);
}

else {
  alert("Iltimos 0 va 1000 oraliqda sonlarni tanlang")
}

Interger 7:

alert("7-Masala");

let x1=Number(prompt("x1 ning qiymatini kiriting"));
let y1=Number(prompt("y1 ning qiymatini kiriting"));
let x2=Number(prompt("x2 ning qiymatini kiriting"));
let y2=Number(prompt("y2 ning qiymatini kiriting"));

let c=(Math.pow((x2-x1), 2))+(Math.pow((y2-y1), 2));
alert(Math.pow(c, 1/2));

Interger 8:

let x1=Number(prompt("x1 ning qiymatini kiriting"));
let y1=Number(prompt("y1 ning qiymatini kiriting"));
let x2=Number(prompt("x2 ning qiymatini kiriting"));
let y2=Number(prompt("y2 ning qiymatini kiriting"));
let x3=Number(prompt("x3 ning qiymatini kiriting"));
let y3=Number(prompt("y3 ning qiymatini kiriting"));

let a=(Math.pow((x2-x1), 2))+(Math.pow((y2-y1), 2));
let a_Tomon=(Math.pow(a, 1/2));

let b=(Math.pow((x3-x1), 2))+(Math.pow((y3-y1), 2));
let b_Tomon=(Math.pow(b, 1/2));

let c=(Math.pow((x3-x2), 2))+(Math.pow((y3-y2), 2));
let c_Tomon=(Math.pow(c, 1/2));

let p=(a_Tomon+b_Tomon+c_Tomon);
let p_yarim=(p/2);

let s=Math.pow(p_yarim*(p_yarim-a_Tomon)*(p_yarim-b_Tomon)*(p_yarim-c_Tomon), 1/2);


alert(`Uchburchakning perimetri ${p} ga teng. Uchburchakning yuzi ${s} ga teng`);


//Interger 9:

let a=prompt("Haqiqiy son kiriting: ");

alert(Math.sin(a));


//Interger 10:

let a=prompt("Haqiqiy son kiriting: ");

alert(Math.cos(a));

 Integer 11

let a=prompt("Ikki xonali son kiriting: ");
alert(`Sonlar ko'paytmasi ${a.charAt(0)*a.charAt(1)} ga teng. Sonlar yig'indisi ${Number(a.charAt(0))+Number(a.charAt(1))} ga teng.`)

Integer 12

let n=Number(prompt("n sonini kiriting: "));

alert(2*(Math.pow((n+3),2)));

Interger 13


let n=Number(prompt("n sonini kiriting: "));

let a=((3+n)/2);

alert(`Natija ${Math.pow(a, 2)} ga teng.`)


Integer 14

let n=Number(prompt("n sonini kiriting: "));
let x=Number(prompt("x sonini kiriting: "));

alert(`Natija ${Math.pow(n, x)+Math.pow(6, x)} ga teng.`);

Integer 15

let a=Number(prompt("a sonini kiriting: "));

alert(`Natija ${Math.abs(a)} ga teng`);

Interger 16

let m=Number(prompt("m sonini kiriting: "));

alert(m.toFixed(2));


Integer 17

let x=Number(prompt("x sonini kiriting: "));
let y=Number(prompt("y sonini kiriting: "));

alert(Math.pow(x, 4)+5*(Math.pow(x, 2))+(Math.pow(x, 3)*y));

Interger 18;

let x=Number(prompt("x sonini kiriting: "));
let y=Number(prompt("y sonini kiriting: "));

alert(6*(Math.pow(x, 3))*Math.pow(y, 5)+4*(Math.pow(x, 4)*(Math.pow(y,3)))-24*x*y);

Integer 19;

let a=prompt("Uch xonali son kiriting: ");
alert(`Sonlar ko'paytmasi ${a.charAt(0)*a.charAt(1)*a.charAt(2)} ga teng. Sonlar yig'indisi ${Number(a.charAt(0))+Number(a.charAt(1))+Number(a.charAt(2))} ga teng.`);

Integer 20;

alert(Math.abs(5/3-13/4));
