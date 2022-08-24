function getNamaUser() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      user.forEach((element) => {
        return console.log(`namanya adalah: ${element.name}`);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
getNamaUser();
