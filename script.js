//your JS code here. If required.
function test() {
	let prom = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		}, 1000);
	});
	prom.then((data)=>{
		let ele = document.getElementById("output");
		ele.innerText = data;
	})
}
test();