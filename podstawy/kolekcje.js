// TABLICA

// let nowaTablica = new Array();
let nowaTablica = [];

console.log(nowaTablica[0]);

// dodawanie elementu na końcu tablicy
nowaTablica.push("Tadzio");

// dodawanie elementu na początku tablicy
nowaTablica.unshift("Andrzej");

// usuwa ostatni element tablicy
nowaTablica.pop();

// usuwa pierwszy element tablicy
nowaTablica.shift();

// usuwanie elementów tablicy w środku tablicy
nowaTablica.splice(3, 1);

// wyswietlenie wszystkich elementów będących w tablicy
for (let i = 1; i < nowaTablica.length; i++) {
    console.log(nowaTablica[i]);
}


// pętla foreach
for (let element of nowaTablica) {
    console.log(element);
}


// MAPA
let produkty = new Map();

// dodawanie elementu do Mapy indeks i wartość
produkty.set(1, "MARCHEW");
produkty.set(2, "Pietruszka");

// wyświetlanie elementu Mapy po indeksie
console.log(produkty.get(1));

// usuwanie elementu z Mapy po indeksie
produkty.delete(1);

// sprawdzanie czy w Mapie jest dany indeks i odpowiedź jest True i False
console.log(produkty.has(1));

// wyświetlenie kluczy z Mapy
for (let klucz of produkty.keys()) {
    console.log(key);
}

// wyświetlenie wartości z Mapy
for (let wartosci of produkty.values()) {
    console.log(key);
}

// wyświetlenie elementów z Mapy w formie pary klucz i wartość
for (let pary of produkty.entries()) {
    console.log(pary);
}


// SET'y
let nazwiska = new Set();
nazwiska.add("imie1");
nazwiska.add("imie2");
nazwiska.add("imie3");
nazwiska.add("imie4");

// wyświetlenie elementów w Set'cie
for (let nazwisko of nazwiska) {
    console.log(nazwisko);
}

// usuwanie elementów z SET'u
nazwiska.delete("imie1");

// sprawdzenie czy w SET'cie jest element szukany odpowiedź True lub False
console.log(nazwiska.has("imie2"));


