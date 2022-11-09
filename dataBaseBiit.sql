USE biitfamily;
SELECT * FROM productos;

INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Biit-Shirt Negra", 250);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Biit-Shirt Gris", 250);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Biit-Cap Negra", 200);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Biit-Pets", 100);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Proteína Sabor Chocolate", 850);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Proteína Sabor Fresa", 850);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Proteína Sabor Vainilla", 850);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Proteína Sabor Mango", 810);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Conjunto Sporty", 900);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Backpack", 600);
INSERT INTO `biitfamily`.`productos`(`nombre`, `precio`) VALUES ("Red Shaker", 150);

SELECT * FROM clientes;
SELECT * FROM detalleventa;
SELECT * FROM productos;
SELECT * FROM ventas;
INSERT INTO `biitfamily`.`clientes`(`nombre`, `apellido`, `movil`, `direccion`) VALUES ("Rodrigo", "Mateos", 5552521652,"calle 23 col. Jaridnes de Merida");
INSERT INTO `biitfamily`.`clientes`(`nombre`, `apellido`, `movil`, `direccion`) VALUES ("Kevin", "Herrera", 5555565657,"calle 24 col. Los andes");
INSERT INTO `biitfamily`.`clientes`(`nombre`, `apellido`, `movil`, `direccion`) VALUES ("Jessi", "Guillen", 5533343536,"calle 30 col. El Himalaya");
INSERT INTO `biitfamily`.`clientes`(`nombre`, `apellido`, `movil`, `direccion`) VALUES ("Elizabeth", "Cruz", 5511121314,"calle 30 col. Azteca");
INSERT INTO `biitfamily`.`clientes`(`nombre`, `apellido`, `movil`, `direccion`) VALUES ("Karla", "Garcia", 5521222324,"calle 30 col. Las Vegas");

INSERT INTO  `biitfamily`.`ventas`(`fecha`, `idCliente`) VALUES(date(now()),1);
INSERT INTO  `biitfamily`.`ventas`(`fecha`, `idCliente`) VALUES(date(now()),2);
INSERT INTO  `biitfamily`.`ventas`(`fecha`, `idCliente`) VALUES(date(now()),3);
INSERT INTO  `biitfamily`.`ventas`(`fecha`, `idCliente`) VALUES(date(now()),4);
INSERT INTO  `biitfamily`.`ventas`(`fecha`, `idCliente`) VALUES(date(now()),5);
    









