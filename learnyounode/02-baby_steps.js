let sum = 0;
for (var i = 2; i < process.argv.length; i++)
{
  var argument = parseInt(process.argv[i], 10);
  sum += argument;
}
console.log(sum);
