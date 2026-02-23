const list = document.querySelector(".list");

const baseURL = "https://apis.scrimba.com/jsonplaceholder";

fetch(`${baseURL}/posts`)
  .then((response) => response.json())
  .then((data) => {
    let listHTML = "";

    data.slice(0, 5).map((element) => {
      const { title, body } = element;
      listHTML += `
            <li class="list-item">
                <h3>${title}</h3>
                <p>${body}</p>
                <hr>
            </li>
        `;
    });

    list.innerHTML = listHTML;
  });


 