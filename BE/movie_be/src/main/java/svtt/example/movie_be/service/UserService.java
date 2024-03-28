package svtt.example.movie_be.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import svtt.example.movie_be.dto.UserDTO;
import svtt.example.movie_be.entities.User;
import svtt.example.movie_be.repository.UserRepository;
import svtt.example.movie_be.service.imp.UserServiceIplm;

@Service
public class UserService implements UserServiceIplm {
     
    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(UserDTO userDTO) {
        User user = new User();
        user.setUser_name(userDTO.getUser_name());
        user.setUser_password(userDTO.getUser_password());
        user.setEmail(userDTO.getUser_email());
        // Set default values for other fields if needed
        user.setUser_age(0);
        user.setUser_gender(0);
        user.setUser_image("");
        user.setUser_role("user");
        user.setUser_upgrade_status("free");

        return userRepository.save(user);
    }

    @Override
    public UserDTO loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getUser_password().equals(password)) {
            UserDTO userDTO = new UserDTO();
            userDTO.setUser_name(user.getUser_name());              
            userDTO.setUser_email(user.getEmail());
            return userDTO;
        }
        return null;
    }
}
