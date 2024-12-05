use kineclinic_db;

SET FOREIGN_KEY_CHECKS = 0;

truncate table history;
truncate table patients;
truncate table schedule;
truncate table sessions;
truncate table treatments;
truncate table workers;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO workers (first_name,last_name,email,password,phone) VALUES ("Ekaitz","Guerra","ekaitzguerra@gmail.com","1234","638725765"),("Marta","Espinal","MartaEspinal@gmail.com","1234","683877485");
INSERT INTO treatments (name,price) VALUES ("Traumatología","50"),("Neurología","60"),("Respiratorio","40"),("Ginecología","60");

INSERT INTO schedule (hours) VALUES ("10:00H"),("11:00H"),("12:00H"),("13:00H"),("16:00H"),("17:00H"),("18:00H"),("19:00H");

INSERT INTO patients (first_name, last_name, phone, medical_history, email) VALUES
('Álvaro', 'Martínez', '612345678', 'Hernia discal. Episodios recurrentes de ciática. Dolor lumbar crónico.', 'alvaro.martinez@example.com'),
('Lucía', 'González', '632458971', 'Cervicalgia. Tensión muscular en trapecio. Contracturas frecuentes en cuello.', 'lucia.gonzalez@example.com'),
('Sergio', 'López', '649857312', 'Esguince de tobillo. Rotura parcial de ligamentos. Dolor articular residual.', 'sergio.lopez@example.com'),
('María', 'Hernández', '627194835', 'Incontinencia urinaria. Episodios de diástasis abdominal. Dolor pélvico.', 'maria.hernandez@example.com'),
('Javier', 'Pérez', '619283746', 'Fractura de clavícula. Rigidez articular en hombro. Atrofia muscular en brazo.', 'javier.perez@example.com'),
('Carla', 'García', '623874519', 'Escoliosis leve. Dolor lumbar ocasional. Asimetría postural.', 'carla.garcia@example.com'),
('Rubén', 'Sánchez', '611928374', 'Distonía cervical. Espasmos musculares recurrentes. Movilidad limitada en cuello.', 'ruben.sanchez@example.com'),
('Elena', 'Fernández', '654983721', 'Bronquitis crónica. Fatiga al respirar. Debilidad muscular respiratoria.', 'elena.fernandez@example.com'),
('Andrés', 'Ruiz', '634587192', 'Lumbalgia crónica. Tensión muscular lumbar. Episodios de dolor irradiado.', 'andres.ruiz@example.com'),
('Ana', 'Jiménez', '629384571', 'Cesárea reciente. Dolor lumbar. Debilidad del suelo pélvico.', 'ana.jimenez@example.com'),
('Pablo', 'Molina', '647283915', 'Lesión de menisco. Artrosis en rodilla. Dolor al flexionar la pierna.', 'pablo.molina@example.com'),
('Claudia', 'Díaz', '617283459', 'Hiperlordosis lumbar. Dolor en zona baja de la espalda. Rigidez muscular.', 'claudia.diaz@example.com'),
('Miguel', 'Romero', '635192847', 'Accidente cerebrovascular. Hemiparesia en brazo izquierdo. Pérdida de fuerza muscular.', 'miguel.romero@example.com'),
('Irene', 'Vargas', '648372915', 'Tendinitis en muñeca. Inflamación recurrente. Dolor al realizar movimientos repetitivos.', 'irene.vargas@example.com'),
('Raúl', 'Castro', '619283547', 'Fractura de cadera. Atrofia muscular en extremidad inferior. Rigidez articular.', 'raul.castro@example.com'),
('Marta', 'Silva', '628374519', 'Bronquiolitis crónica. Dificultad respiratoria. Tos persistente.', 'marta.silva@example.com'),
('Óscar', 'Ortega', '631928475', 'Distensión muscular en muslo. Debilidad en pierna. Dolor al caminar.', 'oscar.ortega@example.com'),
('Laura', 'Morales', '629384751', 'Prolapso uterino. Dolor en la zona lumbar. Debilidad del suelo pélvico.', 'laura.morales@example.com'),
('Adrián', 'Iglesias', '647293851', 'Contractura cervical. Rigidez muscular. Dolor al girar la cabeza.', 'adrian.iglesias@example.com'),
('Sara', 'Blanco', '623487192', 'Asma moderada. Fatiga durante ejercicio. Congestión bronquial.', 'sara.blanco@example.com'),
('Daniel', 'Vega', '618374952', 'Fractura de húmero. Atrofia muscular en brazo. Rigidez en codo.', 'daniel.vega@example.com'),
('Eva', 'Marín', '652947381', 'Disfunción del suelo pélvico. Diástasis abdominal. Dolor pélvico recurrente.', 'eva.marin@example.com'),
('Pedro', 'Torres', '622938475', 'Dorsalgia crónica. Postura encorvada. Episodios de espasmos musculares.', 'pedro.torres@example.com'),
('Isabel', 'Serrano', '645829173', 'Distonía muscular. Movilidad limitada. Espasmos recurrentes.', 'isabel.serrano@example.com'),
('David', 'Cabrera', '617483295', 'Bronquitis asmática. Fatiga pulmonar. Tos persistente.', 'david.cabrera@example.com'),
('Carmen', 'Flores', '621948735', 'Embarazo múltiple reciente. Diástasis abdominal. Debilidad en suelo pélvico.', 'carmen.flores@example.com'),
('Luis', 'Reyes', '649287315', 'Cirugía de menisco. Atrofia en cuádriceps. Dolor al caminar.', 'luis.reyes@example.com'),
('Natalia', 'Navarro', '638471592', 'Hernia discal. Dolor lumbar recurrente. Tensión muscular en espalda.', 'natalia.navarro@example.com'),
('Hugo', 'Méndez', '622849375', 'Hemiparesia izquierda. Falta de coordinación. Rigidez muscular.', 'hugo.mendez@example.com'),
('Paula', 'Campos', '639284751', 'Escoliosis moderada. Dolor en zona dorsal. Desalineación de la columna.', 'paula.campos@example.com'),
('Alberto', 'Cruz', '615928374', 'Neumonía crónica. Dificultad para respirar. Fatiga pulmonar.', 'alberto.cruz@example.com'),
('Andrea', 'Ramos', '629483712', 'Incontinencia urinaria. Dolor pélvico. Episodios de debilidad muscular.', 'andrea.ramos@example.com'),
('Carlos', 'Santos', '633874512', 'Fractura de vértebras. Dolor dorsal. Espasmos musculares frecuentes.', 'carlos.santos@example.com'),
('Sandra', 'Lara', '641983275', 'Embarazo de alto riesgo. Diástasis abdominal. Dolor pélvico postparto.', 'sandra.lara@example.com'),
('Víctor', 'Nieto', '648729315', 'Síndrome de túnel carpiano. Inflamación en muñeca. Pérdida de fuerza en la mano.', 'victor.nieto@example.com'),
('Patricia', 'Cortés', '623874915', 'Migraña tensional. Contracturas cervicales. Episodios de mareo.', 'patricia.cortes@example.com'),
('Manuel', 'Gil', '619284735', 'EPOC. Dificultad respiratoria. Fatiga crónica.', 'manuel.gil@example.com'),
('Rosa', 'Soria', '645192873', 'Diástasis abdominal. Debilidad muscular. Dolor en la zona lumbar.', 'rosa.soria@example.com'),
('Antonio', 'Villar', '634875192', 'Fractura de tobillo. Rigidez articular. Pérdida de movilidad.', 'antonio.villar@example.com'),
('Alicia', 'Hidalgo', '619384752', 'Cifosis dorsal. Dolor en espalda alta. Espasmos musculares.', 'alicia.hidalgo@example.com'),
('Felipe', 'Pardo', '622948571', 'Ictus. Hemiparesia derecha. Dificultad para realizar movimientos finos.', 'felipe.pardo@example.com'),
('Beatriz', 'Salas', '637284519', 'Cesárea reciente. Diástasis abdominal. Dolor lumbar.', 'beatriz.salas@example.com'),
('Guillermo', 'Bueno', '625194873', 'Neumotórax. Fatiga respiratoria. Debilidad muscular torácica.', 'guillermo.bueno@example.com'),
('Victoria', 'Luna', '638274915', 'Contracturas lumbares. Dolor crónico. Episodios de rigidez al despertar.', 'victoria.luna@example.com'),
('Ángela', 'Pascual', '624738915', 'Prolapso pélvico. Incontinencia urinaria. Dolor en zona pélvica.', 'angela.pascual@example.com'),
('José', 'Montero', '615739482', 'Dorsalgia crónica. Postura encorvada. Dolor al estar mucho tiempo sentado.', 'jose.montero@example.com'),
('Verónica', 'Arroyo', '629385417', 'Bronquiectasias. Dificultad respiratoria. Tos con flema.', 'veronica.arroyo@example.com');

INSERT INTO sessions (treatment_id, patient_id, schedule_id, worker_id, date, status, reason) VALUES
(1, 1, 1, 1, '2024-11-02', 'Cerrada', 'Dolor en zona lumbar'),
(2, 2, 2, 2, '2024-11-02', 'Cerrada', 'Dolor cervical persistente'),
(3, 3, 3, 1, '2024-11-03', 'Cerrada', 'Dificultad respiratoria'),
(4, 4, 4, 2, '2024-11-03', 'Cerrada', 'Control postparto'),
(1, 5, 5, 1, '2024-11-04', 'Cerrada', 'Rehabilitación hombro'),
(2, 6, 6, 2, '2024-11-04', 'Cerrada', 'Evaluación escoliosis'),
(3, 7, 7, 1, '2024-11-05', 'Cerrada', 'Control respiratorio'),
(4, 8, 8, 2, '2024-11-05', 'Cerrada', 'Revisión suelo pélvico'),
(1, 9, 1, 1, '2024-11-06', 'Cerrada', 'Dolor lumbar crónico'),
(2, 10, 2, 2, '2024-11-06', 'Cerrada', 'Control postoperatorio'),
(1, 11, 3, 1, '2024-11-25', 'Cerrada', 'Rehabilitación rodilla'),
(2, 12, 4, 2, '2024-11-25', 'Cerrada', 'Dolor cervical agudo'),
(3, 13, 5, 1, '2024-11-26', 'Cerrada', 'Control respiratorio'),
(4, 14, 6, 2, '2024-11-26', 'Cerrada', 'Evaluación pélvica'),
(1, 15, 7, 1, '2024-11-27', 'Cerrada', 'Rehabilitación cadera'),
(2, 16, 8, 2, '2024-11-27', 'Cerrada', 'Control neurológico'),
(3, 17, 1, 1, '2024-11-28', 'Cerrada', 'Terapia respiratoria'),
(4, 18, 2, 2, '2024-11-28', 'Cerrada', 'Revisión postparto'),
(1, 19, 3, 1, '2024-11-29', 'Cerrada', 'Control lumbar'),
(2, 20, 4, 2, '2024-11-29', 'Cerrada', 'Terapia cervical');


INSERT INTO sessions (treatment_id, patient_id, schedule_id, worker_id, date, status, reason) VALUES
(1, 21, 5, 1, '2024-12-03', 'Pendiente', 'Primera evaluación lumbar'),
(2, 22, 6, 2, '2024-12-03', 'Pendiente', 'Control cervical'),
(3, 23, 7, 1, '2024-12-04', 'Pendiente', 'Terapia respiratoria'),
(4, 24, 8, 2, '2024-12-04', 'Pendiente', 'Evaluación ginecológica'),
(1, 25, 1, 1, '2024-12-05', 'Pendiente', 'Rehabilitación espalda'),
(2, 26, 2, 2, '2024-12-05', 'Pendiente', 'Control neurológico'),
(3, 27, 3, 1, '2024-12-06', 'Pendiente', 'Sesión respiratoria'),
(4, 28, 4, 2, '2024-12-06', 'Pendiente', 'Revisión postparto'),
(1, 29, 5, 1, '2024-12-09', 'Pendiente', 'Evaluación traumatológica'),
(2, 30, 6, 2, '2024-12-09', 'Pendiente', 'Control neurológico'),
(3, 31, 7, 1, '2024-12-10', 'Pendiente', 'Terapia respiratoria'),
(4, 32, 8, 2, '2024-12-10', 'Pendiente', 'Control ginecológico'),
(1, 33, 1, 1, '2024-12-11', 'Pendiente', 'Rehabilitación trauma'),
(2, 34, 2, 2, '2024-12-11', 'Pendiente', 'Evaluación neurológica'),
(3, 35, 3, 1, '2024-12-12', 'Pendiente', 'Control respiratorio'),
(4, 36, 4, 2, '2024-12-12', 'Pendiente', 'Revisión ginecológica'),
(1, 37, 5, 1, '2024-12-13', 'Pendiente', 'Primera evaluación'),
(2, 38, 6, 2, '2024-12-13', 'Pendiente', 'Control neurológico'),
(3, 39, 7, 1, '2024-12-16', 'Pendiente', 'Terapia respiratoria'),
(4, 40, 8, 2, '2024-12-16', 'Pendiente', 'Control ginecológico');













