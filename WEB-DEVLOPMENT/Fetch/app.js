fetch("https://swapi.py4e.com/api/people/1/")
    .then((res) => {
        console.log("resolved", res);
        return res.json;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("opps erroe")
    }); 