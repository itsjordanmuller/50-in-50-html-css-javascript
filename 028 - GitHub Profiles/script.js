const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// getUser("itsjordanmuller");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
  } catch (err) {
    console.log(err);
  }

  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.name} - ${user.login}</h2>
    <p>${user.bio}</p>

    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>

    <div id="repos">
      <a href="#" class="repo">Repo 1</a>
      <a href="#" class="repo">Repo 2</a>
      <a href="#" class="repo">Repo 3</a>
    </div>
  </div>
</div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
