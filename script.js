let btn = document.getElementById("shorten");
let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
}


coptButton.onclick = ()=>{
     window.navigator.clipboard.writeText(newURL.value);
    //coptButton.innerHTML = "Copied!"

    //setTimeout(() => {
    //  coptButton.innerHTML = "Copy";
    //}, 1000);
}

//Navigation
function openNav() {
    document.getElementById("myNav").style.width = "70%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }