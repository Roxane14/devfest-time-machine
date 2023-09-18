export const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the successful response here
            console.log(data);
        })
        .catch(error => {
            // Handle errors here
            console.error(error);
        });
}

