const list = document.querySelector(".list");

const baseURL = "https://apis.scrimba.com/jsonplaceholder";

fetch(`${baseURL}/posts`)
  .then((response) => response.json())
  .then((data) => {
    let listHTML = "";

    data.map((element) => {
      const { title, body } = element;
      listHTML += `
            <li>
                <p>${title}</p>
                <p>${body}</p>
            </li>
        `;
    });

    list.innerHTML = listHTML;
  });

