// JAVASCRIPT CODE

// function getCountryInfo() {
//     const ipAddress = document.getElementById('ipAddress').value;
//     const countryInfoElement = document.getElementById('countryInfo');
 
//     // Check if the input is empty
//     if (!ipAddress.trim()) {
//         countryInfoElement.textContent = 'Please enter a valid IP address.';
//         return;
//     }
//     const url = `https://api.country.is/${ipAddress}`
           
//     async function doStuff(){
//         try{
//             const response = await fetch(url);
//             const data = await response.json();
//             displayCountryInfo(data);
//         }catch(error){
//             console.error('Error fetching country information:', error);
//             countryInfoElement.textContent = 'Error fetching country information';
//         }
//     };
//     doStuff();
// }
 
// function displayCountryInfo(data) {
//     const countryInfoElement = document.getElementById('countryInfo');
 
//     if (data && data.country) {
//         const country = data.country;
 
//         countryInfoElement.textContent = `The IP address is located in ${country}.`;
//     } else {
//         countryInfoElement.textContent = 'Country information not available.';
//     }
// }
 
 
//  jQuery Code 


// script.js
$(document).ready(function() {
    // Handle button click using jQuery
    $('#getCountryInfoButton').click(function() {
        // Get the entered IP address
        var ipAddress = $('#ipAddress').val();
        var countryInfoElement = $('#countryInfo');
 
        // Check if the input is empty
        if (!ipAddress.trim()) {
            countryInfoElement.text('Please enter a valid IP address.');
            return;
        }
 
        // Make an AJAX request to get country information
        $.ajax({
            url: 'https://api.country.is/' + ipAddress,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                displayCountryInfo(data);
            },
            error: function(error) {
                console.error('Error fetching country information:', error);
                countryInfoElement.text('Error fetching country information');
            }
        });
    });
 
    // Function to display country information
    function displayCountryInfo(data) {
        var countryInfoElement = $('#countryInfo');
 
        if (data && data.country) {
            var country = data.country;
            countryInfoElement.text('The IP address is located in ' + country + '.');
        } else {
            countryInfoElement.text('Country information not available.');
        }
    }
});