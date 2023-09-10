const APIURL = "https://api.github.com/users/";

getUser("itsjordanmuller");

function getUser(username) {
  axios(APIURL + username)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
