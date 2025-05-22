<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include("conexion.php");

$data = json_decode(file_get_contents("php://input"));
file_put_contents("login_log.txt", print_r($data, true), FILE_APPEND);

$username = $data->username ?? null;
$password = $data->password ?? null;

if (!$username || !$password) {
    file_put_contents("login_log.txt", "❌ Faltan datos\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Faltan datos."]);
    exit;
}

$query = "SELECT * FROM usuarios WHERE username = '$username'";
file_put_contents("login_log.txt", "🔍 $query\n", FILE_APPEND);
$result = $conn->query($query);

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        $token = bin2hex(random_bytes(16));
        file_put_contents("login_log.txt", "✅ Login correcto para $username\n", FILE_APPEND);
        echo json_encode(["success" => true, "token" => $token, "username" => $username]);
    } else {
        file_put_contents("login_log.txt", "❌ Contraseña incorrecta\n", FILE_APPEND);
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
    }
} else {
    file_put_contents("login_log.txt", "❌ Usuario no encontrado: $username\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Usuario no encontrado."]);
}
?>