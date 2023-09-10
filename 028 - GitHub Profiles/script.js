const APIURL = "https://api.github.com/users/";

getUser("itsjordanmuller");

async function getUser(username) {
  const { data } = await axios(APIURL + username);

  console.log(data);
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));
}
