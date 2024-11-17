export function usdToTry() {
    return fetch('https://api.frankfurter.app/latest?from=USD&to=TRY')
        .then(response => response.json())
        .then(data => data.rates.TRY);
}

export function euroToTry() {
    return fetch('https://api.frankfurter.app/latest?from=EUR&to=TRY')
        .then(response => response.json())
        .then(data => data.rates.TRY);
}

export function btcToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function ethToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function bnbToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function adaToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=ADATRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function xrpToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=XRPTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function solToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=SOLTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function dogeToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOGETRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function dotToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=DOTTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function shibToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=SHIBTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function ltcToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=LTCTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function maticToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=MATICTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function avaxToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=AVAXTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function manaToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=MANATRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function sandToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=SANDTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function usdtToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=USDTTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function busdToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=BUSDTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function linkToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=LINKTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function uniToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=UNITRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function atomToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=ATOMTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function algoToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=ALGOTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function ftmToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=FTMTRY')
        .then(response => response.json())
        .then(data => data.price);
}

export function nearToTry() {
    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=NEARTRY')
        .then(response => response.json())
        .then(data => data.price);
}