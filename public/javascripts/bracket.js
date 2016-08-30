/**
 * Created by hbeckeri on 4/23/16.
 */

var beerPong = {
    teams : [
        ["Jamaica", "Usa"], /* first matchup */
        ["Russia", "Mars"]  /* second matchup */
    ],
    results : [
        //[[1,2], [3,4]],       /* first round */
    ]
};

$(function(){
    $('#beerPong').bracket({
       init: beerPong
    });
});