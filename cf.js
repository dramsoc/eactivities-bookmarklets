function getAY() {
    d = new Date();
    if (d.getMonth() >= 7) { /* check if month is Aug (index 7) or higher (start of financial year) */
        ay = d.getFullYear().toString().slice(-2) + '-' + (d.getFullYear()+1).toString().slice(-2);
    } else {
        ay = (d.getFullYear()-1).toString().slice(-2) + '-' + d.getFullYear().toString().slice(-2);
    }
    return ay;
}

var centre = '406'; /* set the eActivities centre code */

var docID = window.prompt('Enter CF number to view in FY ' + getAY(),'XXXXX');

var oldURL = location.href.split('#')[0];
var newURL = 'https://eactivities.union.ic.ac.uk/finance/documents/' + centre + '#' + getAY() + '/Expenditure/Claims/Details/' + docID;
location.href = newURL;

if (newURL.split('#')[0] == oldURL) { location.reload(); } /* since eA doesn't listen for window.onhashchange */
