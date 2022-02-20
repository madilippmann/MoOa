const uploadForm = document.getElementById('upload-form');
const imageInput = document.getElementById('file');

uploadForm.addEventListener("submit", async event => {
    event.preventDefault();
    const title = document.getElementById('title').value

    // if (!title) {
    //     break;
    // }

    const description = document.getElementById('description').value
    const file = imageInput.files[0];

    const token = document.querySelector('#token').getAttribute('value') // grab token to pass back into fetch

    // get secure url from our server
    try {
        const { url } = await fetch("/s3Url").then(res => res.json())
    } catch (err) {
        console.log(err);
    }

    // post the image directly to the bucket
    // add const res = await fetch to check that res worked
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: file
    })


    // Extract path from url to store in db
    const path = url.split('?')[0]


    // Send db info back to server to store image url and title in db
    const addImageRes = await fetch('/add-image', {
        method: "POST",
        body: JSON.stringify({
            path,
            title,
            description
        }),
        headers: {
            'Accept': 'application/json',
            'CSRF-Token': token, // include csrfToken in req header
            "Content-type": 'application/json'
            }
    })


    // Redirect
    window.location.href = "/";

})
