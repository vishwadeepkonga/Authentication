let user_DB=[]


function resetfields()
{
    document.getElementById('registration-form').reset()
document.getElementsById('valid-firstname').style.display= 'none'
}

function home_page()
{
    document.getElementById('homepage').style.display='block'
    document.getElementById('signuppage').style.display='none'
    document.getElementById('loginpage').style.display='none'
    document.getElementById('home').classList.add('active')
    document.getElementById('sign').classList.remove('active')
    document.getElementById('log').classList.remove('active')


}
function signup_page()
{
    document.getElementById('homepage').style.display='none'
    document.getElementById('signuppage').style.display='block'
    document.getElementById('loginpage').style.display='none'
    document.getElementById('home').classList.remove('active')
    document.getElementById('sign').classList.add('active')
    document.getElementById('log').classList.remove('active')


}
function login_page()
{
    document.getElementById('homepage').style.display='none'
    document.getElementById('signuppage').style.display='none'
    document.getElementById('loginpage').style.display='block'

}
function signup_validation(){
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let username =document.getElementById('username').value
    let city=document.getElementById('city').value
    let state=document.getElementById('state').value
    let zipcode=document.getElementById('zipcode').value
    let password=document.getElementById('password').value
    let confirmpassword=document.getElementById('confirm').value
    console.log(password)

     
let error=false
    if(firstname.length>=2)
    {
        document.getElementById('valid-firstname').style.display='block'
        document.getElementById('invalid-firstname').style.display='none'

    }
    else{
        error=true
        document.getElementById('invalid-firstname').style.display='block'
        document.getElementById('valid-firstname').style.display='none'


    }
    if(lastname.length>=2)
    {
        document.getElementById('valid-lastname').style.display='block'
        document.getElementById('invalid-lastname').style.display='none'

    }
    else{
        error=true

        document.getElementById('invalid-lastname').style.display='block'
        document.getElementById('valid-lastname').style.display='none'


    }
     if(username.includes('@')&&username.includes('.')&&username.indexOf('@')>=2)
     {
        document.getElementById('invalid-username').style.display='none'

     }
     else{
        error=true

        document.getElementById('invalid-username').style.display='block'

     }
if(city.length>1)
{

    document.getElementById('invalid-city').style.display='none'

}
else{
    error=true

    document.getElementById('invalid-city').style.display='block'

}
if(state==='none')
{
    error=true

    document.getElementById('invalid-state').style.display='block'


}
else{

    document.getElementById('invalid-state').style.display='none'

}
if(zipcode>=100000&&zipcode<=999999)
{

    document.getElementById('invalid-zip').style.display='none'


}
else{
    error=true

    document.getElementById('invalid-zip').style.display='block'

}
if(password.length>=8)
{
    document.getElementById('valid-password').style.display='none'

}
else{
    document.getElementById('valid-password').style.display='block'

}
if(password!==confirmpassword)
{
    document.getElementById('invalid-confirm-password').style.display='block'
}
else{
    document.getElementById('invalid-confirm-password').style.display='none'

}
if(error === false)
{
    alert('your details have been saved')
    resetfields()
}

let userdetails={
    firstname,
    lastname,
    username,
    city,
    state,
    zipcode,
    password:encrypt(password)

}
user_DB.push(userdetails)
if(error === false)
{
    alert('your details have been saved')
    resetfields()
}


}
function loginpage(){
    let loginusername=document.getElementById('loginusername').value
    let loginpassword=document.getElementById('loginpassword').value
    if(user_DB.find(user=>user.username===loginusername&&decrypt(user.password)===loginpassword))
    {
        alert('Log-in success')
    }
    else{
        alert('login unsucessful')
    }
    let encryptdetails={
        'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
        'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
        'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
        'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
        'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
        'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
        'Y': 'L', 'Z': 'M',
        'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
        'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
        'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
        'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
        'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
        'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
        'y': 'l', 'z': 'm',
        '0': '5', '1': '6', '2': '7', '3': '8',
        '4': '9', '5': '0', '6': '1', '7': '2',
        '8': '3', '9': '4',
        '!': '#', '$': '%', '&': '+', '-': '@',
        '': '~', '#': '!', '%': '$', '+': '&',
        '@': '-', '~': ''

    }
    

    function encrypt(password)
    {

        let encryptpassword='';
        for(let char of password)
        {
            encryptpassword=encryptpassword+encryptdetails.char

        }
        console.log(encryptpassword)
        return encryptpassword

    }
    function decrypt(encryptpassword)
    {
        let originalpassword=''

        let keys=object.keys(encryptdetails)
        let values=object.values(encryptdetails)
        for(let char of encryptpassword)
        {
            let index=values.indexOf(char)
            originalpassword=originalpassword+keys[index]
        }
        return originalpassword
    }

}