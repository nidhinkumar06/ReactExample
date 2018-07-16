const magic = function() {
	// a. what is `this`?
    console.log('a',this);
    
	const cool = () => {
		// b. what is `this`?
	    console.log('b',this);
	};
	cool();
};
// magic();

// const switchTV = function() {
//     console.log(this); //it won't work bcoz it won't know what is this.television
// }

// switchTV();

// const apple = { name: 'apple' };
// apple.magic = magic;
// apple.magic();

const orange = { name: 'orange' };
magic.call(orange);
