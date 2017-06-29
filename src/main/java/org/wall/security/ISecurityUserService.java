package org.wall.security;

public interface ISecurityUserService {

    String validatePasswordResetToken(long id, String token);

}
