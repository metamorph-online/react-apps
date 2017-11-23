// this component adds and reads information from localStorage

import React from 'react';


//we get the array of data to proccess. We need to pass the array and the name of the localStorage keyword 
//uder which we want to save data

export function writeToStorage(arr, storageName){

	localStorage[storageName] = JSON.stringify(arr);
}


//read and return the storage keyword data
export function readFromStorage(storageName){
	
	if(localStorage[storageName]){
		 return JSON.parse(localStorage[storageName]);
	}
}
