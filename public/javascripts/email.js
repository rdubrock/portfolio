<!--
                  // Email obfuscator script 2.1 by Tim Williams, University of Arizona
                  // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
                  // This code is freeware provided these four comment lines remain intact
                  // A wizard to generate this code is at http://www.jottings.com/obfuscator/
{ 
coded = "C6DDt@3mJJVmq3t82.8tf"
key = "8jXugTYIaS1C5DpoJn3kZFwbmHE7Bxd94iRAteUQ2cvGqfMW0zLVhOlPNs6ryK"
shift=coded.length
link=""
for (i=0; i<coded.length; i++) {
if (key.indexOf(coded.charAt(i))==-1) {
ltr = coded.charAt(i)
link += (ltr)
}
else {
ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
link += (key.charAt(ltr))
}
}
}
