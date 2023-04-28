
<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    require_once 'database.php';

    // $rej_login = "now";
    // $rej_pass = "ff";

    // $hash = password_hash($rej_pass, PASSWORD_DEFAULT);

    // $query = $db->prepare("INSERT INTO admins VALUES (100, '$rej_login', '$hash', 0)");
    // $query->execute();

    $usersQuery = $db->query('SELECT id, anim, colorFinder, find,color,slowko, slowkoPL, obrazek, obrazekCaly,calyPL, calyDE FROM users15');
$users = $usersQuery->fetchAll();

//  echo $users;
   
    // echo "doi";


    // foreach ($users as $user) {
    //     echo "{$user['slowko']}";
    // }

    header("Content-Type: application/json");
    echo json_encode($users);
    exit();
?>