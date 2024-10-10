let fio = prompt("Введите ФИО:");

if (/[^А-Яа-яЁёA-Za-z\s]/g.test(fio))
{
    alert("ФИО содержит недопустимые символы!");
}
else
{
    alert("ФИО корректно.");
}

let url = prompt("Введите URL который должен начинатся с http:// или с https://");

if (url.startsWith('http://') || url.startsWith('https://'))
{
    let url = new URL(url);
    let prot = url.prot;
    let host = url.host;
    let path = url.pathname;
    let file = path.substring(path.lastIndexOf('/') + 1);
    let direc = path.substring(0, path.lastIndexOf('/'));
    let query = url.search;

    alert("Протокол: " + prot + "\nХост: " + host + "\nПуть: " + direc + "/\nИмя файла: " + file + "\nСтрока запроса: " + query);
}
else
{
    alert("Неверный URL");
}