# Tabla USUARIO, passwords hasheados con sha1 iguales al nombre de usuario + id como salt

INSERT INTO USERS (ID, USERNAME, PASSWORD, FIN_VIGENCIA_PASS, EMAIL, NOMBRE) VALUES (1, 'demo', sha1('demo{1}'), '2020-12-31', 'demo@domain.com', 'Demo user');
INSERT INTO USERS (ID, USERNAME, PASSWORD, FIN_VIGENCIA_PASS, EMAIL, NOMBRE) VALUES (2, 'admin', sha1('admin{2}'), '2020-12-31', 'admin@domain.com', 'Administrator');

# Tabla AUTHORITY

INSERT INTO AUTHORITY (USER_ID, AUTHORITY) VALUES ((SELECT id FROM users WHERE username = 'admin'), 'ROLE_ADMIN');
#Roles de devon para que los usuario puedan entrar a la aplicación
INSERT INTO AUTHORITY (USER_ID, AUTHORITY) SELECT id, 'ROLE_USER' FROM USERS;
