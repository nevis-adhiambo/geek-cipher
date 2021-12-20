
var MAX = 26;

function encryptStr(str, n, x)
{	
	
	x = x % MAX;
	
	var freq = Array(MAX).fill(0);
	
	for(var i = 0; i < n; i++)
	{
		freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
	}
	
	for(var i = 0; i < n; i++)
	{
	
		if (freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] % 2 == 0)
		{
			var pos = (str[i].charCodeAt(0) - 'a'.charCodeAt(0) + x) % MAX;
			str[i] = String.fromCharCode(pos + 'a'.charCodeAt(0));
		}
		
		
		else
		{
			var pos = (str[i].charCodeAt(0) - 'a'.charCodeAt(0) - x);
			
			if (pos < 0)
			{
				pos += MAX;
			}
			
			str[i] = String.fromCharCode(pos + 'a'.charCodeAt(0));
		}
	}
	
	return str.join('');
}

var s = "abcda";
var n = s.length;
var x = 3;

document.write( encryptStr(s.split(''), n, x));

