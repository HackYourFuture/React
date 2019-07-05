function readFile(path) {
  return new Promise((resolve, reject) => {
    fetch(path)
      .then(data => data.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => reject(error));
  });
}
