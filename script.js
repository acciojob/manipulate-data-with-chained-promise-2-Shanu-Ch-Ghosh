//your JS code here. If required.

let arr = [1,2,3,4]

let evenNum = arr.filter((val)=>{
	return val%2==0;
});



let evenMultNum = arr.filter((val)=>{
	return val%2==0;
}).map((val)=>{
	return val*2;
})



let outputBox = document.getElementById("output");

let promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(arr);
	},3000)
});

promise.then((arr)=>{
	outputBox.innerText = (arr);
	return new Promise((resolve)=>{
		setTimeout(()=>{
		resolve(evenNum);
	   },1000)
	})
})
.then((evenNum)=>{
	outputBox.innerText = (evenNum);
	return new Promise((resolve)=>{
		setTimeout(()=>{
		resolve(evenMultNum);
	   },2000)
	})
})
.then((evenMultNum)=>{
	outputBox.innerText = (evenMultNum);
})