<?php
include("conexion.php");

$data = json_decode(file_get_contents("php://input"));

$username = $data->username ?? null;
$password = $data->password ?? null;

if (!$username || !$password) {
    echo json_encode(["success" => false, "message" => "Faltan datos."]);
    exit;
}

$result = $conn->query("SELECT * FROM usuarios WHERE username = '$username'");

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        // Token simple generado (mejor usar JWT en producción)
        $token = bin2hex(random_bytes(16));
        echo json_encode(["success" => true, "token" => $token, "username" => $username]);
    } else {
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Usuario no encontrado."]);
}
?>