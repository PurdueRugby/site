<?php
// Make sure output buffering is turned on before attempting page redirects.
// Best to turn it on in php.ini, but the line below ensures it is on.
ob_start();

// path shortcuts
define("PRIVATE_PATH", dirname(__FILE__));
define("PROJECT_PATH", dirname(PRIVATE_PATH));
define("SHARED_PATH", PRIVATE_PATH . '/shared');
define("PUBLIC_PATH", PROJECT_PATH . '/public');

/*
require_once('functions.php');
require_once('database.php');
require_once('query_functions.php');
require_once('validation_functions.php');
*/

// $db = db_connect();

?>
