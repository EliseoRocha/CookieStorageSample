
// 20 cookies per domain
// joeswebsite.com      :one domain
// dev.joeswebsite.com  :another domain
// 4kb of string data per cookie
// Cookies get sent back and forth with each request

//EVERY COOKIE: Name, Value, Experation Date
/**
 * Creates/Updates a cookie with a value and expiration date.
 * @param cookieName The name of the cookie
 * @param cookieValue The value of the cookie
 * @param daysTilExpire Days from today, until the cookie expires
 */
function setCookie(cookieName:string, cookieValue:string, daysTilExpire:number){
    //Encoding all special characters
    cookieValue = encodeURIComponent(cookieValue);

    // Get today's date and added daysTilExpired
    let expireDate = new Date();

    expireDate.setDate(expireDate.getDate() + daysTilExpire);

    let eDate = expireDate.toUTCString();

    // create cookie
    document.cookie = `${cookieName}=${cookieValue};expires=${eDate}`;
}

/**
 * Gets value for the cookie with the desired cookieName
 * Returns empty string if not found
 * @param cookieName
 */
function getCookieValue(cookieName:string):string{
    let allCookies = document.cookie;

    if(allCookies == ""){
        return "";
    }

    console.log("Browser returns the following cookies: ");
    console.log(allCookies);

    //split up big cookie string into an array
    let cookieAttributes:string[] = allCookies.split(",");

    //FirstCookie=FirstValue;expires=somedate;SecondCookie=secVal;expires
    //[0]: FirstCookie=FirstValue
    //[1]: expires=somedate
    for (let index = 0; index < cookieAttributes.length; index++) {
        let currAttr:string = cookieAttributes[index].trim();

        //check if currAttr is our cookie
        if(currAttr.startsWith(cookieName + "=")){
        
            let equalPos = currAttr.indexOf("=");
            let currValue = currAttr.substr(equalPos + 1);

            return decodeURIComponent(currValue);
        }
    }

    return "";
}