const calcBtn = document.getElementById('calcBtn')
calcBtn.addEventListener('click', ()=>{
	let userName = document.getElementById('username').value
	let partnerName = document.getElementById('partnername').value
	const calcfun = Math.random()*100
	const loveResult = Math.round(calcfun)

	if (userName === '' || partnerName == '') {
		alert("Name can't be empty")
	}else {
		if (loveResult <= 25 && loveResult >= 0) {
			document.getElementById('result').innerText =
			`No love vibes here! You two are like siblings, no romance! (${loveResult}%)`
		} else if (loveResult <= 50 && loveResult >= 25) {
			document.getElementById('result').innerText =
			`It's a friendship thing, but not the kind that leads to forever! (${loveResult}%)`
		}else if (loveResult <= 75 && loveResult >= 50) {
			document.getElementById('result').innerText =
			`There's a spark, but it's not enough to set the whole town ablaze! (${loveResult}%)`
		}else if (loveResult <= 100 && loveResult >= 75) {
			document.getElementById('result').innerText =
			`This love is fire! You two are meant to be, like a Naija jollof rice and fried plantains combo! (${loveResult}%)`
		}
			document.getElementById('username').value= ''
			document.getElementById('partnername').value = ''
	}
})
