<?php
session_start(); // Start a new session or resume an existing one

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "travel";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["data"]["email"];
    $password = $_POST["data"]["password"];

    // Prepare the SQL query to check user credentials
    $sql = "SELECT id, first_name, last_name, email, role FROM users WHERE email = ? AND password = ?";
    
    // Prepare the statement
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind parameters and execute the statement
        $stmt->bind_param("ss", $email, $password);
        
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            
            if ($result->num_rows == 1) {
                $user = $result->fetch_assoc();
                
                // Set session variables
                $_SESSION["user_id"] = $user["id"];
                $_SESSION["user_first_name"] = $user["first_name"];
                $_SESSION["user_last_name"] = $user["last_name"];
                $_SESSION["user_role"] = $user["role"];
                
                $response["status"] = "success";
                $response["message"] = "Login successful";
                $response["user_data"] = $user; // Include user data in the response
            } else {
                $response["status"] = "error";
                $response["message"] = "Invalid email or password";
            }
        } else {
            $response["status"] = "error";
            $response["message"] = "Database error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        $response["status"] = "error";
        $response["message"] = "Database error: " . $conn->error;
    }
}

// Close the connection
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
