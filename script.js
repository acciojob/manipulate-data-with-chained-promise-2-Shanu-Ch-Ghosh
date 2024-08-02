//your JS code here. If required.

let arr = [1,2,3,4]

let oddNum = arr.filter((val)=>{
	return val%2!=0;
});



let evenNum = arr.filter((val)=>{
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
		resolve(oddNum);
	   },1000)
	})
})
.then((oddNum)=>{
	outputBox.innerText = (oddNum);
	return new Promise((resolve)=>{
		setTimeout(()=>{
		resolve(evenNum);
	   },2000)
	})
})
.then((evenNum)=>{
	outputBox.innerText = (evenNum);
})