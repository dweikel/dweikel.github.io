// ---------------------
// Request Data
// ---------------------

var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'url': 'http://mysafeinfo.com/api/data?list=cod4weapons&format=json',
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#weapon").text('The armory is unavailable at this time.')
        }
    });
    //debugger
    return json
})();
var slicedArray = json.slice(0,26)
var finalArray = _.reject(slicedArray,function(num, i){
  return i === 6;
})

var weaponsImages = [
                      "images/weaponImages/m16.png",
                      "images/weaponImages/ak47.png",
                      "images/weaponImages/g3.png",
                      "images/weaponImages/g36c.png",
                      "images/weaponImages/m4.png",
                      "images/weaponImages/m14.png",
                      "images/weaponImages/m40a3.png",
                      "images/weaponImages/m21.png",
                      "images/weaponImages/dragu.png",
                      "images/weaponImages/r700.png",
                      "images/weaponImages/barret.png",
                      "images/weaponImages/mp5.png",
                      "images/weaponImages/skorpion.png",
                      "images/weaponImages/miniuzi.png",
                      "images/weaponImages/ak74u.png",
                      "images/weaponImages/p90.png",
                      "images/weaponImages/m249.png",
                      "images/weaponImages/rpd.png",
                      "images/weaponImages/m60.png",
                      "images/weaponImages/w1200.png",
                      "images/weaponImages/m1014.png",
                      "images/weaponImages/m9.png",
                      "images/weaponImages/usp45.png",
                      "images/weaponImages/colt45.png",
                      "images/weaponImages/deserteagle.png"
                     ]
var template = weapons.innerHTML;
//var shuffledAlbums = _.shuffle(json)
target.innerHTML = _.template(template,{weapons:finalArray, images:weaponsImages});
