USE DATABASE ECOMMERCE


-- DEPARTMENTS
INSERT INTO departments (name, created_at, updated_at) VALUES ('Celulares', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (name, created_at, updated_at) VALUES ('Informática', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (name, created_at, updated_at) VALUES ('Moda', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (name, created_at, updated_at) VALUES ('Produtos importados', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (name, created_at, updated_at) VALUES ('Games e livros', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- CATEGORIES
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Smartphones', 1,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Acessórios', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Computadores / Hardware', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Perfurmes', 4,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Livros de Ação', 5,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Hardware', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Periféricos', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Notebooks', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Calçados', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Jaquetas', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (name, department_id, created_at, updated_at) VALUES ('Calças', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- PRODUCTS
INSERT INTO products (category_id, name, description, stock, price, created_at, updated_at)
VALUES (1, 'Galaxy S20', 'Descrição do Galaxy S20', 10, 3000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (category_id, name, description, stock, price, created_at, updated_at)
VALUES (2, 'Galaxy A30s', 'Descrição do A30s ', 10, 3000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (category_id, name, description, stock, price, created_at, updated_at)
VALUES (3, 'Galaxy Note 10', 'Descrição do Galaxy Note 20', 8, 3500, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (category_id, name, description, stock, price, created_at, updated_at)
VALUES (3, 'Xiaomi Mi 10 Pro', 'Descrição do Xiomi', 3, 5000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (category_id, name, description, stock, price, created_at, updated_at)
VALUES (5, 'Jaqueta Corta Vento Starter Lettering Preta', 'Descrição do Galaxy S20', 3, 129.99, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- FILES
INSERT INTO files (name, path, created_at, updated_at, size, url) VALUES ('a.png', 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s10-azul-g973f-1dl-61-128gb-tripla-12mp-16mp-12mp/onofre-agora/789810/c32b7ed3e7aa27147188409605ecd16b.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s10-azul-g973f-1dl-61-128gb-tripla-12mp-16mp-12mp/onofre-agora/789810/c32b7ed3e7aa27147188409605ecd16b.jpg');
INSERT INTO files (name, path, created_at, updated_at, size, url) VALUES ('a.png', 'https://imagens.canaltech.com.br/produto/1549323535-5669-principal-m.png', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://imagens.canaltech.com.br/produto/1549323535-5669-principal-m.png');
INSERT INTO files (name, path, created_at, updated_at, size, url) VALUES ('a.png', 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-54-54b1-intel-core-i5-8gb-1tb-tela-156-windows-10/magazineluiza/225536300/98a9b6011e0cb9f3661740df19c8db35.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-54-54b1-intel-core-i5-8gb-1tb-tela-156-windows-10/magazineluiza/225536300/98a9b6011e0cb9f3661740df19c8db35.jpg');
INSERT INTO files (name, path, created_at, updated_at, size, url) VALUES ('a.png', 'https://i.zst.com.br/images/notebook-acer-aspire-5-intel-core-i5-8265u-8-geracao-8gb-de-ram-hd-1-tb-15-6-geforce-mx130-windows-10-a515-52g-577t-photo803331783-12-2e-31.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://i.zst.com.br/images/notebook-acer-aspire-5-intel-core-i5-8265u-8-geracao-8gb-de-ram-hd-1-tb-15-6-geforce-mx130-windows-10-a515-52g-577t-photo803331783-12-2e-31.jpg');
INSERT INTO files (name, path, created_at, updated_at, size, url) VALUES ('a.png', 'https://cdn.awsli.com.br/800x800/254/254900/produto/37352856/a0b9e38e0c.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://cdn.awsli.com.br/800x800/254/254900/produto/37352856/a0b9e38e0c.jpg');
INSERT INTO files (name, path, created_at, updated_at, size, url) VALUES ('Batman-Logo.png', 'https://http2.mlstatic.com/kit-2-adesivos-batman-logo-morcego-decoraco-parede-D_NQ_NP_831464-MLB31136887903_062019-F.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://http2.mlstatic.com/kit-2-adesivos-batman-logo-morcego-decoraco-parede-D_NQ_NP_831464-MLB31136887903_062019-F.jpg');


-- FILE PRDOCUT
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (1, 4, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (2, 5, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (3, 1, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (4, 2, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (5, 5, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (1, 5, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (2, 4, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (3, 3, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (4, 2, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (5, 1, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (1, 2, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO file_products (file_id, product_id, created_at, updated_at) VALUES (2, 1, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- TECHNICAL SPECIFICATIONS
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (1, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (1, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (1, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (2, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (2, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (2, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (3, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (3, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (4, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (4, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (4, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (5, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (5, 'Processador', 'Intel Core i5-9400F', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO technical_specifications (product_id, name, description, created_at, updated_at)
VALUES (5, 'Memória', '256GB', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- USER ADMIN SENHA: 123456
INSERT INTO USERS (name,email,administrator, password_hash, created_at, updated_at)
VALUES ('THIAGO','admin@admin.com', TRUE, '$2a$08$wKOP3QjYzs6ynUNtSLxKZu9IMZtfHoqb8GfaLmKCZ/NTrIZF7DhHu', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
-- USER CLIENTE
INSERT INTO USERS (name,email,administrator, password_hash, created_at, updated_at)
VALUES ('THIAGO CLIENTE','cliente@teste.com', FALSE, '$2a$08$wKOP3QjYzs6ynUNtSLxKZu9IMZtfHoqb8GfaLmKCZ/NTrIZF7DhHu', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- USER INFO
INSERT INTO USER_INFOS(user_id,	cpf, rg, first_phone, second_phone, created_at, updated_at)
VALUES (1, '12345678901', '12345678', '12345678', '12345678', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
-- USER INFO
INSERT INTO USER_INFOS(user_id,	cpf, rg, first_phone, second_phone, created_at, updated_at)
VALUES (2, '12345678902', '12345677', '12345678', '12345678', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
-- ADDRESS
INSERT INTO USER_ADDRESSES(user_id,zipcode,street,street_number,complement,neighborhood,city,state,created_at,updated_at)
VALUES (1,'15991168', 'RUA TESTE ENGENHARIA DE SOFT', '1176', '', 'FATEC', 'TAQUA', 'SP', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- LOGOS
INSERT INTO LOGOS (name,status,file_id,created_at,updated_at)
VALUES ('Batman-Logo',1 , 6, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- BANNER
INSERT INTO BANNERS (name,status,file_id,created_at,updated_at)
VALUES ('Batman-banner',1 , 6, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- CHECKOUTS
INSERT INTO CHECKOUTS (id,user_id, user_address_id, amount, created_at, updated_at)
VALUES (1, 1, 1, 3, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUTS (id,user_id,user_address_id,amount,created_at, updated_at)
VALUES (2, 1, 1, 2, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- CHECKOUTS_LISTS
INSERT INTO CHECKOUT_LISTS(product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (1, 1, 3, 2600, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUT_LISTS(product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (2, 2, 5, 8000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUT_LISTS(product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (2, 2, 5, 8000, '2015-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUT_LISTS(product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (2, 2, 5, 8000, '2019-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- TRANSACTIONS
INSERT INTO TRANSACTIONS(checkout_id,status,email,created_at, updated_at)
VALUES (1, 'approved', 'thiago.v.jorge@hotmail.com', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
