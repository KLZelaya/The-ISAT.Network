// import the code to be tested
const frgame = require('./face_recognition_game');

describe("A Face Recognition Game", () => {
	it("has a list of people's faces", () => {
		expect(frgame.faceList).toBeDefined();	
	});
});