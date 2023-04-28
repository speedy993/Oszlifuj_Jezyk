
<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    require_once 'database.php';

    $usersQuery = $db->query('SELECT id, anim, colorFinder, find,color,slowko, slowkoPL, obrazek, obrazekCaly,calyPL, calyDE FROM users14');
    $users = $usersQuery->fetchAll();

    header("Content-Type: application/json");
    echo json_encode($users);
    exit();
?>