function getParameters(urlString,Parameter) {

        let paramString = urlString.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        for(let pair of queryString.entries()) {
            if(pair[0] == Parameter)
            return pair[1];
        }
    }
let urlString = 
"https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getParameters(urlString,'utm_medium'))
console.log(getParameters(urlString,'utm_campaign'))