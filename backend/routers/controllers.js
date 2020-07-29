const express = require('express');
const router = express.Router();

const reciveJsonString = (str) => {
	let newStr = '';
	for (var i = 0; i < str.length; i++) {
		let isThirdIteration = (i + 1) % 3 === 0;
		if (isThirdIteration) newStr += str.charAt(i);
	}
	return newStr;
};

router.post('/test', (req, res) => {
	try {
		const test = req.body.string_to_cut;
		const newTest = reciveJsonString(test);

		return res.format({
			'application/json': function () {
				res.send({ string_to_cut: newTest });
			},
		});
	} catch {
		return res.status(500).send('Error');
	}
});

router.get('/', (req, res) => {
	const lyftStr = 'test';
	try {
		return res.status(200).send(lyftStr);
	} catch (error) {
		return res.status(500).send(error);
	}
});
module.exports = router;
