class User {
    name;
    age;
    gender;
    description;
    image;
    constructor(name, age, gender, description, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }
    like() { }
    unlike() { }
    update(name, age, gender, description, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.description = description;
        this.image = image;
    }
    toHTML() {
        return `<div class="user-container">
        <div class="prev"><</div>
        <img src="${this.image}" alt="arnh profile">
        <div class="info">
           <p>${this.name}</p>
           <p>${this.age}</p>
           <p>${this.description}</p>
        </div>
        <div class="next">></div>
    </div>`

    }
}
class UserCollection {
    listUser;
    current;
    constructor() {
        this.listUser = [];
        this.current = 0;
    };
    addUser(p) {
        this.listUser.push(p);
    }
    removeUser(index) {
        this.listUser.splice(index, 1);
    }
    show() {
        document.getElementById("app").innerHTML = this.listUser[0].toHTML();
        this.listenClick();
    }
    prev() {
        if (this.current > 0) {
            this.current--;
            document.getElementById("app").innerHTML = this.listUser[this.current].toHTML();
        }
        else {
            this.current = this.listUser.length;
            document.getElementById("app").innerHTML = this.listUser[this.current].toHTML();
        }
        this.listenClick();
    }
    next() {
        if (this.current < this.listUser.length) {
            this.current++;
            document.getElementById("app").innerHTML = this.listUser[this.current].toHTML();
        }
        else {
            this.current = 0;
            document.getElementById("app").innerHTML = this.listUser[this.current].toHTML();
        }
        this.listenClick();
    }
    listenClick() {
        document.querySelector('.prev').addEventListener("click", (e) => {
            console.log(e);
            userCollection.prev()
        })
        document.querySelector('.next').addEventListener("click", (e) => {
            console.log(e);
            userCollection.next()
        })
    }
}
const userCollection = new UserCollection();
const user1 = new User("Trần Như Quỳnh", 18, "Female", "Cute, thich di duoi mua", "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/122056098_680097129555355_9117209179269398832_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=rVBNTKBisLIAX_Ghruz&_nc_ht=scontent-xsp1-2.xx&oh=c57bca7a418659a100a1ec56eb9bd404&oe=5FE066F0");
const user3 = new User("Ngọc Mai", 18, "Female", "Cute, thich di duoi mua", "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/126888465_759198044669615_3733950293321668734_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=3wJgJ2KE22wAX-nB7MC&_nc_ht=scontent-xsp1-1.xx&oh=88a384af580221e816cd60caebc2b3b9&oe=5FE0D9E4");
const user2 = new User("Xu Xu", 18, "Female", "Cute, thich di duoi mua", "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/122118553_2761897564084220_600607091245869485_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=lFwAV02vaXIAX8WoydQ&_nc_ht=scontent-xsp1-1.xx&oh=7339668819a91f8ae78efdff4440759d&oe=5FE0BB90");

userCollection.addUser(user1);
userCollection.addUser(user2);
userCollection.addUser(user3);
userCollection.show();
