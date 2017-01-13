<?php
/* Current Db functions optimized for sqlite3.
*/
function db_connect() {
    try {
        $connection = new SQLite3('/var/www/private/database/rugbyProd.db');
    }
    catch(Exception $e){
        $msg = $e->getMessage();
        $msg .= " (" . $e->getTraceAsString() . ")";
        exit($msg);
    }
    return $connection;
}

function db_query($connection, $sql) {
    $result_set = $connection->query($sql);
    if(substr($sql, 0, 7) == 'SELECT ') {
        confirm_query($result_set);
    }
    return $result_set;
}

function confirm_query($result_set) {
    if(!$result_set) {
        exit("Database query failed.");
    }
}

function db_fetch_assoc($result_set) {
    return $result_set->fetchArray(1);
}

function db_free_result($result_set) {
    return $result_set->finalize();
}

function db_num_rows($result_set) {
    return $result_set->numColumns();
}

function db_insert_id($connection) {
    return $connection->lastInsertRowId();
}

function db_error($connection) {
    return $connection->lastErrorMsg();
}

function db_close($connection) {
    return $connection->close();
}

function db_escape($connection, $string) {
    return $connection->escapeString($string);
}

?>