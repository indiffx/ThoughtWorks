module.exports = function main(inputs) {
    const [TAXI_FEE_PER_K, START_FEE, PARK_FEE_PER_MIN] = [0.8, 6, 0.25];
    let 
    	{distance, parkTime} = inputs,
    	[extraFee, parkFee] = [0, 0];
	parkFee = PARK_FEE_PER_MIN * parkTime; 
	if (distance <= 2) {
		return Math.round(START_FEE + parkFee);
	}
	if (distance > 8) {
		extraFee = TAXI_FEE_PER_K * 0.5 * (distance - 8);
	}

	price = Math.round(START_FEE + TAXI_FEE_PER_K * 
			(distance - 2) + extraFee + parkFee);
    return price;
};
