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

const apple = { name: 'apple' };
apple.magic = magic;
apple.magic();

const orange = { name: 'orange' };
magic.call(orange);
