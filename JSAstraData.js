/*	JSAstraData.js
	
	Very simple data structures for JavaScript.

	Written by Adam Holisky (@adamholisky), 2014
	Free to use, no restrictions
	Original idea for the code and library came as I was reading through "Data Structures and Algorithms Using JavaScript" by Michael McMillian (O’Reilly)

	v1.0 -- 3-30-14
*/

/*	AstraList
	--------------------
	Creates a simple list

	Usage Example:

	var myList = new AstraList();

	myList.append( "Element Alpha" );
	myList.append( "Element Omega" );

	myList.forEach( function( theString ) {
		console.log( "Callbacked with: " + theString );
	});
*/
var AstraList = function()
{
	this.dataStore = [];

	this.getSize = function()
	{
		return this.dataStore.length;
	}

	this.append = function( el )
	{
		this.dataStore[this.dataStore.length] = el;
	}

	this.find = function( el )
	{
		for( var i = 0; i < this.dataStore.length; i++ )
		{
      		if( this.dataStore[i] == el )
      		{
         		return i;
      		}
  		}

   		return -1;
	}

	this.remove = function( el )
	{
		var foundAt = this.find( el );

   		if( foundAt > -1 )
   		{
      		this.dataStore.splice( foundAt, 1 );
      		this.listSize--;
      		return true;
   		}

   		return false;
	}

	this.toString = function()
	{
		return this.dataStore;
	}

	this.insert = function( el, afer )
	{
   		var insertPos = this.find( after );
   		
   		if( insertPos > -1 ) 
   		{
    		this.dataStore.splice( insertPos+1, 0, element );
    		this.listSize++;
    		return true;
 		}

   		return false;
	}

	this.clear = function()
	{
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	}

	this.contains = function( el )
	{
   		for ( var i = 0; i < this.dataStore.length; i++ )
   		{
      		if ( this.dataStore[i] == element )
      		{
         		return true;
    		}
   		}

   		return false;
	}

	this.forEach = function( callback )
	{
		for( var i = 0; i < this.dataStore.length; i++ )
		{
			callback( this.dataStore[i] );
		}
	}
}

/*	AstraQueue
	--------------------
	Creates a simple queue

	Usage Example:

	var myQueue = new AstraQueue();

	myQueue.enqueue( "Alpha" );
	myQueue.enqueue( "Beta" );
	myQueue.enqueue( "Delta" );

	myQueue.dequeueForEach( function( theString ) {
		console.log( "Dequeued off: " + theString );
	});
*/
var AstraQueue = function()
{
	this.dataStore = [];

	this.enqueue = function( el )
	{
		this.dataStore.push( el );
	}

	this.dequeue = function()
	{
		return this.dataStore.shift();
	}

	this.getSize = function()
	{
		return this.dataStore.length;
	}

	this.forEach = function( callback )
	{
		for( var i = 0; i < this.dataStore.length; i++ )
		{
			callback( this.dataStore[i] );
		}
	}

	this.dequeueForEach = function( callback )
	{
		while( this.dataStore.length != 0 )
		{
			callback( this.dequeue() );
		}
	}
}

/*	AstraStack
	--------------------
	Creates a simple stack

	Written by Adam Holisky (@adamholisky), 2014
	Free to use, no restrictions
	Original idea for the code from "Data Structures and Algorithms Using JavaScript" by Michael McMillian (O’Reilly)

	Usage Example:

	var myStack = new AstraStack();

	myStack.push( "Dirty Dish 1" );
	myStack.push( "Dirty Dish 2" );
	myStack.push( "Dirty Dish 3" );

	myStack.popForEach( function( theString ) {
		console.log( "Popped off: " + theString );
	});	
*/
var AstraStack = function()
{
	this.dataStore = [];

	this.push = function( el )
	{
		this.dataStore.push( el );
	}

	this.pop = function()
	{
		return this.dataStore.pop();
	}

	this.getSize = function()
	{
		return this.dataStore.length;
	}

	this.forEach = function( callback )
	{
		for( var i = 0; i < this.dataStore.length; i++ )
		{
			callback( this.dataStore[i] );
		}
	}

	this.popForEach = function( callback )
	{
		while( this.dataStore.length != 0 )
		{
			callback( this.pop() );
		}
	}
}

/*	AstraDictionary
	--------------------
	Creates a dictionary

	Usage Example:

	var myDict = new AstraDictionary();

	myDict.add( "Husband", "Adam" );
	myDict.add( "Wife", "Kaite" );
	myDict.add( "Cat", "Max" );

	myDict.forEach( function( key, value ) {
		console.log( "Callbacked " + key + " with: " + value );
	});
*/
var AstraDictionary = function()
{
	this.dataStore = new Array();

	this.add = function( key, value )
	{
		this.dataStore[key] = value;
	}

	this.get = function( key )
	{
		return this.dataStore[key];
	}

	this.remove = function( key )
	{
		delete this.dataStore[key];
	}

	this.forEach = function( callback )
	{
		var keys = Object.keys( this.dataStore );

		for( var i = 0; i < Object.keys( this.dataStore ).length; i++ )
		{
			callback( keys[i], this.dataStore[ keys[i] ] );
		}
	}
}