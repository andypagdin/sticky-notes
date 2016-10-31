//////////////////////////////////
// !!!WARNING!!! - JH
// -------------------------------
// If you are editing this in the services.js file don't! 
// Becuase as soon as the gulp process runs you work will be over written!!!
// Please edit the indavidual files in /www/js/services/..
//////////////////////////////////


//////////////////////////////////
//base start
//////////////////////////////////


//////////////////////////////////
// Information - JH
// -------------------------------
// I add app = to the angular.modules( 'bla', [ 'bla', 'bla', 'bla'])
// Becuase if anything that doesnt start with .whatever will break the app
// But! By assigning it to a var it always knows what its base module is!
//////////////////////////////////
app = angular.module( 'starter.services', [ ] )

//////////////////////////////////
//base end
//////////////////////////////////


//////////////////////////////////
//chatsServ start
//////////////////////////////////

app.factory( 'Chats', function ( )
{
	// Might use a resource here that returns a JSON array
	// Some fake testing data
	var chats = [
	{
		id: 0,
		name: 'Ben Sparrow',
		lastText: 'You on your way?',
		face: 'img/ben.png'
	},
	{
		id: 1,
		name: 'Max Lynx',
		lastText: 'Hey, it\'s me',
		face: 'img/max.png'
	},
	{
		id: 2,
		name: 'Adam Bradleyson',
		lastText: 'I should buy a boat',
		face: 'img/adam.jpg'
	},
	{
		id: 3,
		name: 'Perry Governor',
		lastText: 'Look at my mukluks!',
		face: 'img/perry.png'
	},
	{
		id: 4,
		name: 'Mike Harrington',
		lastText: 'This is wicked good ice cream.',
		face: 'img/mike.png'
	} ];

	return {
		all: function ( )
		{
			return chats;
		},
		remove: function ( chat )
		{
			chats.splice( chats.indexOf( chat ), 1 );
		},
		get: function ( chatId )
		{
			for ( var i = 0; i < chats.length; i++ )
			{
				if ( chats[ i ].id === parseInt( chatId ) )
				{
					return chats[ i ];
				}
			}
			return null;
		}
	};
} );

//////////////////////////////////
//chatsServ end
//////////////////////////////////

