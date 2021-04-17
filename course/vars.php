<?php

$now = strtotime('now');
$dates = array(strtotime('2021-04-20'), strtotime('2021-04-21'), strtotime('2021-04-22'));

$sales1 = array('3 500р.','3 000р.','2 500р.');
$sales2 = array('35 950р.','34 950р.','33 950р.');

$todays1 = array('7 490р.','7 990р.','8 490р.');
$todays2 = array('29 990р.','30 990р.','31 990р.');

$links1 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5656&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=5657&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=5658&clean=true&lg=ru');
$links2 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5660&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=5661&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=5662&clean=true&lg=ru');

$prepLinks = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5664&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=5665&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=5666&clean=true&lg=ru');

if ($now < $dates[0]){
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];

    $link1 = $links1[0];
    $link2 = $links2[0];

    $prepLink = $prepLinks[0];
}
else if (($now >= $dates[0]) && $now < $dates[1]){
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];

    $link1 = $links1[1];
    $link2 = $links2[1];

    $prepLink = $prepLinks[1];
}
else {
    $sale1 = $sales1[2];
    $sale2 = $sales2[2];

    $today1 = $todays1[2];
    $today2 = $todays2[2];

    $link1 = $links1[2];
    $link2 = $links2[2];

    $prepLink = $prepLinks[2];
}

?>