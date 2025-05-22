<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include("conexion.php");

$data = json_decode(file_get_contents("php://input"));
file_put_contents("registro_log.txt", print_r($data, true), FILE_APPEND);

$email = $data->correo ?? '';
$username = $data->nombre ?? '';
$password = $data->contrasena ?? '';

if (!$email || !$username || !$password) {
    file_put_contents("registro_log.txt", "❌ Datos incompletos\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Faltan datos."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !str_ends_with($email, "@gmail.com")) {
    file_put_contents("registro_log.txt", "❌ Correo inválido\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Correo inválido."]);
    exit;
}

if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/", $password)) {
    file_put_contents("registro_log.txt", "❌ Contraseña débil\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Contraseña débil."]);
    exit;
}

// Verifica duplicados
$query = "SELECT * FROM usuarios WHERE email = '$email' OR username = '$username'";
file_put_contents("registro_log.txt", "🔍 $query\n", FILE_APPEND);
$result = $conn->query($query);

if ($result->num_rows > 0) {
    file_put_contents("registro_log.txt", "❌ Usuario o correo ya existen\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Correo o nombre ya registrados."]);
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$insertQuery = "INSERT INTO usuarios (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";
file_put_contents("registro_log.txt", "📥 $insertQuery\n", FILE_APPEND);

if ($conn->query($insertQuery)) {
    file_put_contents("registro_log.txt", "✅ Registro exitoso para $username\n", FILE_APPEND);
    echo json_encode(["success" => true, "message" => "Registro exitoso."]);
} else {
    file_put_contents("registro_log.txt", "❌ Error al insertar: " . $conn->error . "\n", FILE_APPEND);
    echo json_encode(["success" => false, "message" => "Error al registrar."]);
}
?>