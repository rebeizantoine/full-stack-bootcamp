setTimeout(() => {
    console.log("Hello after 5 seconds!");
}, 5000); // 5000 milliseconds = 5 seconds


function updateClock() {
    const currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
}

setInterval(updateClock, 1000); // 1000 milliseconds = 1 second


const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

delayedPromise
    .then((message) => {
        alert(message);
        console.log("Chained message!");
    })
    .catch((error) => {
        console.error("Error:", error);
    });


const networkRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("Data fetched successfully!");
        } else {
            reject("Network Error!");
        }
    }, 3000);
});

networkRequest
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchPost();

const postIds = [1, 2, 3];

const fetchPromises = postIds.map((postId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json());
});

Promise.all(fetchPromises)
    .then((results) => {
        console.log("Combined data:", results);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

const fetchPromises = [...Array(5)].map((_, index) => {
    const postId = index + 4; // Post IDs from 4 to 8
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json());
});

(async () => {
    for await (const result of fetchPromises) {
        console.log(result);
    }
})();
