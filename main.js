module.exports = function main(numStr) {
	var
		firstLine = "",
		secondLine = "",
		thirdLine = "";

    function mkZero() {
    	firstLine +=  "._.";
    	secondLine += "|.|";
    	thirdLine +=  "|_|";

    }

    function mkOne() {
    	firstLine +=  "...";
    	secondLine += "..|";
    	thirdLine +=  "..|";
    }

    function mkTwo() {
    	firstLine +=  "._.";
    	secondLine += "._|";
    	thirdLine +=  "|_.";
    }

    function mkThree() {
    	firstLine +=  "._.";
    	secondLine += "._|";
    	thirdLine +=  "._|";
    }

    function mkFour() {
    	firstLine +=  "...";
    	secondLine += "|_|";
    	thirdLine +=  "..|";
    }

    function mkFive() {
    	firstLine +=  "._.";
    	secondLine += "|_.";
    	thirdLine +=  "._|";
    }

    function mkSix() {
    	firstLine +=  "._.";
    	secondLine += "|_.";
    	thirdLine +=  "|_|";
    }

    function mkSeven() {
    	firstLine +=  "._.";
    	secondLine += "..|";
    	thirdLine +=  "..|";
    }

    function mkEight() {
    	firstLine +=  "._.";
    	secondLine += "|_|";
    	thirdLine +=  "|_|";
    }

    function mkNine() {
    	firstLine +=  "._.";
    	secondLine += "|_|";
    	thirdLine +=  "..|";
    }

    function pushByDigit(digit) {
    	switch(digit) {
    		case "0":
    			mkZero();
    			break;
			case "1":
				mkOne();
				break;
			case "2":
				mkTwo();
				break;
			case "3":
				mkThree();
				break;
			case "4":
				mkFour();
				break;
			case "5":
				mkFive();
				break;
			case "6":
				mkSix();
				break;
			case "7":
				mkSeven();
				break;
			case "8":
				mkEight();
				break;
			case "9":
				mkNine();
				break;
    	}
    }

    for (let i = 0; i < numStr.length - 1; i++) {
    	pushByDigit(numStr[i]);
    	firstLine += " ";
    	secondLine += " ";
    	thirdLine += " ";
    }
    pushByDigit(numStr[numStr.length - 1]);

    return (firstLine + "\n" + secondLine + "\n" + thirdLine + "\n");
};