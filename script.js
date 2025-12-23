let termekek = [
    {
      name: "test1",
      price: "1 $",
      disc:
        "disc1.",
      picture:
        "https://scontent.fqpj1-1.fna.fbcdn.net/v/t39.30808-6/602448529_25301207896231345_6139699776238000698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QIMS-Ijk0JMQ7kNvwE73H4t&_nc_oc=Adl_USxgn6kY8XRUlwGRDY1SYaDbpVYJ9zek_hf-DOwbU9-lC0aEt3SZ6tnuQ6BaBJqPzSPJwRrWyd3sAvpt1siZ&_nc_zt=23&_nc_ht=scontent.fqpj1-1.fna&_nc_gid=i6LSVDz6SMSKoTc-QtAxvQ&oh=00_Afkg-b5zXnz3H9hM9uiuVjSeS0Y3dyMSP731_nOwbtPRsw&oe=69509AD6",
    },
    {
      name: "test2",
      price: "2 $",
      disc:
        "disc2.",
      picture:
        "https://scontent.fqpj1-1.fna.fbcdn.net/v/t39.30808-6/602448529_25301207896231345_6139699776238000698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QIMS-Ijk0JMQ7kNvwE73H4t&_nc_oc=Adl_USxgn6kY8XRUlwGRDY1SYaDbpVYJ9zek_hf-DOwbU9-lC0aEt3SZ6tnuQ6BaBJqPzSPJwRrWyd3sAvpt1siZ&_nc_zt=23&_nc_ht=scontent.fqpj1-1.fna&_nc_gid=i6LSVDz6SMSKoTc-QtAxvQ&oh=00_Afkg-b5zXnz3H9hM9uiuVjSeS0Y3dyMSP731_nOwbtPRsw&oe=69509AD6",
    },
    {
      name: "test3",
      price: "3 $",
      disc:
        "disc3.",
      picture:
        "https://scontent.fqpj1-1.fna.fbcdn.net/v/t39.30808-6/602448529_25301207896231345_6139699776238000698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QIMS-Ijk0JMQ7kNvwE73H4t&_nc_oc=Adl_USxgn6kY8XRUlwGRDY1SYaDbpVYJ9zek_hf-DOwbU9-lC0aEt3SZ6tnuQ6BaBJqPzSPJwRrWyd3sAvpt1siZ&_nc_zt=23&_nc_ht=scontent.fqpj1-1.fna&_nc_gid=i6LSVDz6SMSKoTc-QtAxvQ&oh=00_Afkg-b5zXnz3H9hM9uiuVjSeS0Y3dyMSP731_nOwbtPRsw&oe=69509AD6",
    },
    {
      name: "test4",
      price: "4 $",
      disc:
        "disc4.",
      picture:
        "https://scontent.fqpj1-1.fna.fbcdn.net/v/t39.30808-6/602448529_25301207896231345_6139699776238000698_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QIMS-Ijk0JMQ7kNvwE73H4t&_nc_oc=Adl_USxgn6kY8XRUlwGRDY1SYaDbpVYJ9zek_hf-DOwbU9-lC0aEt3SZ6tnuQ6BaBJqPzSPJwRrWyd3sAvpt1siZ&_nc_zt=23&_nc_ht=scontent.fqpj1-1.fna&_nc_gid=i6LSVDz6SMSKoTc-QtAxvQ&oh=00_Afkg-b5zXnz3H9hM9uiuVjSeS0Y3dyMSP731_nOwbtPRsw&oe=69509AD6",
    },
    
  ];

document.querySelector(".balgomb").addEventListener("click", () => {
    let cont = document.querySelector(".container");

    // teljes törlés
    cont.innerHTML = "";

    // új tartalom
    cont.innerHTML = `
        <div class="rolam">
            <h2 class="bemutatkozas">Rólam</h2>
            <p class="bemutatkozas">Üdv az Eri Varázsműhelyében!<br>
Kreatív kézművesként decoupage díszeket, festett lakásdekorációkat, öntvényeket és puha horgolt kendőket készítek.<br>
Üdvözöllek az oldalamon. :)<br><br>
💗Hogyan jut el hozzád a kedvenc kendőd, vagy lakásdekorációd?<br>
✨️Komáromban személyesen is át veheted, ha nem szeretnél várni.<br>
📦Csomagküldésre is van lehetőség, előreutalás után.</p>
        </div>
    `;
});
function Feltoltes() {
  let counter = 0;
  for (let i of termekek) {
    document.getElementById("termekLista").innerHTML += `<option value="${i.name}"></option>`;
    document.getElementById(
      "termekLista"
    ).innerHTML += `<div id="${i.name}" class="card" >
      <img type="button" id="kep${counter}" src="${i.picture}" class="card-img-top" alt="${i.name}">
      <div class="card-body">
        <p class="card-text">${i.name}<br> ${i.price}</p>
      </div>
    </div>`;
    counter++;
  }
}
document.querySelector(".jobbgomb").addEventListener("click", () => {
    document.querySelector(".container").innerHTML = `
        <div id="flex">
            <div id="termekLista">
                <input style="width:0; height:0; border:none; padding:none; background:none;" 
                autofocus id="termek_nev" class="form-control me-2" list="lista"
                aria-label="Search" />
            </div>
        </div>
    `;
    Feltoltes();
});

document.body.addEventListener("click", (e) => {
    if (e.target.id.includes("kep")) {
        let index = e.target.id.replace("kep", "");
        document.getElementById("nagyKep").src = termekek[index].picture;
        document.getElementById("kepPopup").style.display = "flex";
        document.body.style.overflow = "hidden";
    }
});

document.getElementById("kepClose").addEventListener("click", () => {
    document.getElementById("kepPopup").style.display = "none";
    document.body.style.overflow = "auto";
});
document.getElementById("menuToggle").addEventListener("click", () => {
    let menu = document.getElementById("menuList");
    menu.classList.toggle("hidden");
});
