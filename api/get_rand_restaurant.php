<?php
include "lib/inc_pack.php";
$restaurant_list = Query::getSqlResultList("SELECT * FROM tb_restaurant;");
$restaurant_i = rand(0, count($restaurant_list)-1);
echo json_encode($restaurant_list[$restaurant_i]);
