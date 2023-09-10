const APIURL = "https://api.github.com/users/";

getUser("itsjordanmuller");

async function getUser(username) {
  const res = await axios(APIURL + username);

  console.log(res.data);
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));
}
