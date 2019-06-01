module.exports = function main(inputs) {
    const [TAXI_FEE_PER_K, START_FEE, PARK_FEE_PER_MIN] = [0.8, 6, 0.25];
    let [finalPrice, {distance, parkTime}] = [START_FEE, inputs];
	if (distance < 0 || parkTime < 0) {
		console.log("Invalid Input: shouldn't be less than zero.")
		return null;
	} 

	if (distance > 2) {
		finalPrice += TAXI_FEE_PER_K * (distance - 2)
		if (distance > 8) {
			finalPrice += TAXI_FEE_PER_K * 0.5 * (distance - 8);
		}
	}
    return Math.round(finalPrice + PARK_FEE_PER_MIN * parkTime);
};
