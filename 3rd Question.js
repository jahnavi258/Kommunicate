function reverse(x)
{
	x = x + "";
	return x.split("").reverse().join("");
}

var num=prompt("Enter the number");
console.log(Number(reverse(num)));