<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include("conexion.php");

$data = json_decode(file_get_contents("php://input"));
error_log("Datos recibidos: " . print_r($data, true));

$username = $data->username ?? null;
$password = $data->password ?? null;
error_log("Username: $username");
error_log("Password recibido: " . ($password ? 'Sí' : 'No'));

if (!$username || !$password) {
    error_log("Faltan datos username o password");
    echo json_encode(["success" => false, "message" => "Faltan datos."]);
    exit;
}

$result = $conn->query("SELECT * FROM usuarios WHERE username = '$username'");
error_log("Consulta ejecutada: SELECT * FROM usuarios WHERE username = '$username'");
error_log("Número de filas encontradas: " . $result->num_rows);

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    error_log("Usuario encontrado: " . print_r($user, true));

    if (password_verify($password, $user['password'])) {
        error_log("Contraseña correcta");
        echo json_encode(["success" => true]);
    } else {
        error_log("Contraseña incorrecta");
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
    }
} else {
    error_log("Usuario no encontrado");
    echo json_encode(["success" => false, "message" => "Usuario no encontrado."]);
}
?>
