package com.ecommerceapp.backend.auth.services;

import com.ecommerceapp.backend.auth.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public String sendMail(User user ){
        String subject = "Verify your email";
        String senderName = "Levone";
        String mailContent = "Hello " + user.getUsername() + "\n";
        mailContent += "Your verification code is: " + user.getVerificationCode() + "\n";
        mailContent += "Please enter this code to verify your email.";
        mailContent += "\n";
        mailContent += senderName;

        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(user.getEmail());
            mailMessage.setText(mailContent);
            mailMessage.setSubject(subject);

            System.out.println("Sending email to: " + user.getEmail());

            javaMailSender.send(mailMessage);
            return "Email Sent!";
        } catch (Exception e) {
            return "Error while sending the Email";
        }
    }
}
