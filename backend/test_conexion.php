<?php
// Mostrar todos los errores posibles
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verifica si la extensión mysqli está cargada
if (!extension_loaded('mysqli')) {
    die("❌ ERROR: La extensión MySQLi no está habilitada en PHP. Actívala en php.ini.");
}

echo "<h2>✅ Comprobación de conexión a MySQL</h2>";

// Parámetros de conexión
$host = "localhost";  // puede probarse con 127.0.0.1 también
$port = 3306;         // Puerto por defecto
$user = "root";
$pass = "";
$db   = "appusuarios";

// Prueba de conexión al servidor
echo "<p>1. Conectando a MySQL en <strong>$host:$port</strong>...</p>";
$mysqli = @new mysqli($host, $user, $pass, '', $port);

// Verificar conexión al servidor
if ($mysqli->connect_errno) {
    die("<p style='color:red;'>❌ ERROR 1: No se pudo conectar al servidor MySQL.<br>Detalles: " . $mysqli->connect_error . "</p>");
}
echo "<p style='color:green;'>✅ Conexión al servidor MySQL establecida correctamente.</p>";

// Comprobar permisos para listar bases de datos
echo "<p>2. Probando permisos para listar bases de datos...</p>";
$result = @$mysqli->query("SHOW DATABASES");

if (!$result) {
    echo "<p style='color:red;'>❌ ERROR 2: No se pudieron listar las bases de datos. Revisa permisos del usuario.</p>";
} else {
    echo "<p style='color:green;'>✅ Se listaron las bases de datos correctamente.</p>";
    echo "<ul>";
    while ($row = $result->fetch_row()) {
        echo "<li>" . $row[0] . "</li>";
    }
    echo "</ul>";
    $result->free();
}

// Comprobar si la base de datos existe
echo "<p>3. Verificando si existe la base de datos <strong>$db</strong>...</p>";
$db_selected = @$mysqli->select_db($db);
if (!$db_selected) {
    echo "<p style='color:red;'>❌ ERROR 3: La base de datos <strong>$db</strong> no existe o no se puede acceder.</p>";
} else {
    echo "<p style='color:green;'>✅ La base de datos <strong>$db</strong> existe y se puede acceder.</p>";
}

// Verificar si se puede hacer una consulta a una tabla ejemplo (si existe)
echo "<p>4. Buscando tabla 'usuarios' (opcional)...</p>";
$check_table = @$mysqli->query("SELECT * FROM usuarios LIMIT 1");

if (!$check_table) {
    echo "<p style='color:orange;'>⚠️ Aviso: No se pudo consultar la tabla 'usuarios'. Puede que no exista o esté vacía.</p>";
} else {
    echo "<p style='color:green;'>✅ La tabla 'usuarios' se pudo consultar correctamente.</p>";
    $check_table->free();
}

// Prueba de inserción ficticia
echo "<p>5. Probando permiso de escritura en base de datos (INSERT)...</p>";

$crear_temp = @$mysqli->query("CREATE TEMPORARY TABLE test_temp(id INT);");
$insertar = @$mysqli->query("INSERT INTO test_temp(id) VALUES (1);");

if (!$crear_temp) {
    echo "<p style='color:red;'>❌ ERROR 4A: No se pudo crear la tabla temporal. Verifica los permisos.</p>";
} elseif (!$insertar) {
    echo "<p style='color:red;'>❌ ERROR 4B: No se pudo insertar en la tabla temporal. Verifica los permisos de escritura.</p>";
} else {
    echo "<p style='color:green;'>✅ Permiso de escritura confirmado mediante tabla temporal.</p>";
}

// Cierre de conexión
$mysqli->close();
echo "<p style='color:blue;'>ℹ️ Conexión cerrada correctamente.</p>";

echo "<hr><p>✔️ Verifica tu archivo de conexión, permisos, nombre de base y tablas.</p>";
?>
