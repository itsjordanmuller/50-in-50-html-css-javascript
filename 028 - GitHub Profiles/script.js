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
      src="https://randomuser.me/api/portraits/men/30.jpg"
      alt="Profile Picture"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>johndoe</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
      nam!
    </p>

    <ul>
      <li>10 <strong>Followers</strong></li>
      <li>20 <strong>Following</strong></li>
      <li>30 <strong>Repos</strong></li>
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
