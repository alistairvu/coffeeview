


async function addssss(newPost) {
    const respon = await firebase.firestore().collection('cafes').add(newPost);
    console.log(respon);
}

document.getElementById("btn").addEventListener('click', () => {
    let namess = document.getElementById("name");
    let address = document.getElementById("address")
    let district = document.getElementById("district")
    let hours = document.getElementById("hours");
    let img = document.getElementById("img");
    let phone = document.getElementById("phone");
    let price = document.getElementById("price");
    let rating = document.getElementById("price");
    let review = document.getElementById("review");
    let reviews = document.getElementById("reviews");
    let cafe = {
        address: address.value,
        district: district.value,
        hours: hours.value,
        img: img.value,
        phone: phone.value,
        price: price.value,
        rating: rating.value,
        review: review.value,
        reviews: reviews.value,
        name: namess.value
    }
    addssss(cafe);
    console.log(cafe);
})