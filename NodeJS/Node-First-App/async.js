// Asynchronous Code:
// setTimeout(() => { task, time });

// Synchronous Code:
// console.log('Hello'); 

const fetchData = callback => {
    setTimeout(() => {
        callback('Second timer is done!');
    }, 
    1500)
};

setTimeout(() => { 
        console.log('First timer is done!');
        fetchData(text => {
            console.log(text);
        });
    }, 
    2000
);