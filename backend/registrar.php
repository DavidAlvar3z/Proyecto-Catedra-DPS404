<?php
include("conexion.php");

$data = json_decode(file_get_contents("php://input"));

$email = $data->correo;
$username = $data->nombre;
$password = $data->contrasena;

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !str_ends_with($email, "@gmail.com")) {
    echo json_encode(["success" => false, "message" => "Correo inválido."]);
    exit;
}

if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/", $password)) {
    echo json_encode(["success" => false, "message" => "Contraseña débil."]);
    exit;
}

$result = $conn->query("SELECT * FROM usuarios WHERE email = '$email' OR username = '$username'");
if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Correo o nombre ya registrados."]);
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$conn->query("INSERT INTO usuarios (username, email, password) VALUES ('$username', '$email', '$hashedPassword')");

echo json_encode(["success" => true, "message" => "Registro exitoso."]);
?>
