module.exports = function main(inputs) {
    // write your code here...
	var distance_price;
	var time_price;
	var price;
	
	if (inputs["distance"] <= 2){
	    distance_price = 6;
	}
	
	time_price = inputs["parkTime"]*0.25;
	
	price = Math.round(distance_price + time_price);
    return price;
};
