<?php

$vis_email = $_POST['email'];
$mess = $_POST['wiadomosc'];


    if(empty($mess) || $mess == " ")

    {
        header("Location: start");
    }

   
    
    else
    {
        $email_tytul = "Wiadomośc automatyczna";

        $email_body = "E-mail od : $vis_email.\n".
                        "Wiadomość: $mess.\n";
    
        $to = "masza221@gmail.com";
    
    
        mail($to,$email_tytul,$email_body,$headers);
		header("Location: start");
    }
?>