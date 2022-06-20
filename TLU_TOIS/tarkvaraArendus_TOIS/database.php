<?php
    $database = "if21_tois_tarkvaraprojekt";
    $servername = "localhost";
    $server_username = "if21";
    $server_password = "if21";

    function store_login_data($username, $password){
        $notice = null
		$conn = new mysqli("localhost", "if21", "if21", "if21_tois_tarkvaraprojekt");
		$conn->set_charset("utf8");
		$stmt = $conn->prepare("INSERT INTO login_data (username, password) VALUES (?, ?)");
        echo $conn->error;
		$stmt->bind_param("ss", $username, $password);
        if($stmt->execute()){
            $notice = "Sisselogimisandmed on salvestatud!";
        } else {
            $notice = "Andmete salvestamisel andmebaasi tekkis tÃµrge: " .$stmt->error;
        }
          
        $stmt->close();
		$conn->close();
		return $notice;
        
    }

?>