console.log("JavaScript is working")
let colors = ["orange", "blue", "green", "purple"]
let post = {
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 33;

if (age >= 18) {
    console.log("you're and adult!");
} else {
    console.log("you're a kid");
}

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

colors.forEach(color => {
    console.log(color);
});