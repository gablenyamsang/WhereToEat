<?php
include "lib/inc_pack.php";
echo json_encode(Query::getSqlResultList("SELECT * FROM tb_restaurant;"));
