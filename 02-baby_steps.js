let somma = 0;
for (var i = 2; i < process.argv.length; i++)
{
  var argomento = parseInt(process.argv[i], 10);
  somma += argomento;
}
console.log(somma);
