USE DATABASE ECOMMERCE

-- DEPARTMENTS
INSERT INTO departments (id,name, created_at, updated_at) VALUES (1,'Celulares', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (id,name, created_at, updated_at) VALUES (2,'Informática', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (id,name, created_at, updated_at) VALUES (3,'Moda', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (id,name, created_at, updated_at) VALUES (4,'Produtos importados', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO departments (id,name, created_at, updated_at) VALUES (5,'Games e livros', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- CATEGORIES
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (1,'Smartphones', 1,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (2,'Acessórios', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (3,'Computadores / Hardware', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (4,'Perfurmes', 4,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (5,'Livros de Ação', 5,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (6,'Hardware', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (7,'Periféricos', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (8,'Notebooks', 2,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (9,'Calçados', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (10,'Jaquetas', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO categories (id,name, department_id, created_at, updated_at) VALUES (11,'Calças', 3,'2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- PRODUCTS
INSERT INTO products (id,category_id, name, description, stock, price, created_at, updated_at)
VALUES (1,5, 'Galaxy S20', 'Descrição do Galaxy S20', 10, 3000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (id,category_id, name, description, stock, price, created_at, updated_at)
VALUES (2,4, 'Galaxy A30s', 'Descrição do A30s ', 10, 3000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (id,category_id, name, description, stock, price, created_at, updated_at)
VALUES (3,5, 'Galaxy Note 10', 'Descrição do Galaxy Note 20', 8, 3500, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (id,category_id, name, description, stock, price, created_at, updated_at)
VALUES (4,1, 'Xiaomi Mi 10 Pro', 'Descrição do Xiomi', 3, 5000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
INSERT INTO products (id,category_id, name, description, stock, price, created_at, updated_at)
VALUES (5,10, 'Jaqueta Corta Vento Starter Lettering Preta', 'Descrição do Galaxy S20', 3, 129.99, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- FILES
INSERT INTO files (id,name, path, created_at, updated_at, size, url) VALUES (1,'a.png', 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s10-azul-g973f-1dl-61-128gb-tripla-12mp-16mp-12mp/onofre-agora/789810/c32b7ed3e7aa27147188409605ecd16b.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s10-azul-g973f-1dl-61-128gb-tripla-12mp-16mp-12mp/onofre-agora/789810/c32b7ed3e7aa27147188409605ecd16b.jpg');
INSERT INTO files (id,name, path, created_at, updated_at, size, url) VALUES (2,'a.png', 'https://imagens.canaltech.com.br/produto/1549323535-5669-principal-m.png', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://imagens.canaltech.com.br/produto/1549323535-5669-principal-m.png');
INSERT INTO files (id,name, path, created_at, updated_at, size, url) VALUES (3,'a.png', 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-54-54b1-intel-core-i5-8gb-1tb-tela-156-windows-10/magazineluiza/225536300/98a9b6011e0cb9f3661740df19c8db35.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-54-54b1-intel-core-i5-8gb-1tb-tela-156-windows-10/magazineluiza/225536300/98a9b6011e0cb9f3661740df19c8db35.jpg');
INSERT INTO files (id,name, path, created_at, updated_at, size, url) VALUES (4,'a.png', 'https://i.zst.com.br/images/notebook-acer-aspire-5-intel-core-i5-8265u-8-geracao-8gb-de-ram-hd-1-tb-15-6-geforce-mx130-windows-10-a515-52g-577t-photo803331783-12-2e-31.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://i.zst.com.br/images/notebook-acer-aspire-5-intel-core-i5-8265u-8-geracao-8gb-de-ram-hd-1-tb-15-6-geforce-mx130-windows-10-a515-52g-577t-photo803331783-12-2e-31.jpg');
INSERT INTO files (id,name, path, created_at, updated_at, size, url) VALUES (5,'a.png', 'https://cdn.awsli.com.br/800x800/254/254900/produto/37352856/a0b9e38e0c.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://cdn.awsli.com.br/800x800/254/254900/produto/37352856/a0b9e38e0c.jpg');

INSERT INTO files (id,name, path, created_at, updated_at, size, url) VALUES (6,'Batman-Logo.png', 'https://http2.mlstatic.com/kit-2-adesivos-batman-logo-morcego-decoraco-parede-D_NQ_NP_831464-MLB31136887903_062019-F.jpg', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z', 123, 'https://http2.mlstatic.com/kit-2-adesivos-batman-logo-morcego-decoraco-parede-D_NQ_NP_831464-MLB31136887903_062019-F.jpg');


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

-- USER ADMIN
INSERT INTO USERS (id,name,email,administrator, password_hash, created_at, updated_at) 
VALUES (1,'THIAGO','admin@admin.com', TRUE, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTkzNzMyMDI1LCJleHAiOjE1OTQzMzY4MjV9.x34AG7cL3z2SrBIi_VZVTZ8RJWGJbTXiynpgW4-5Uic', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');
-- USER CLIENTE
INSERT INTO USERS (id,name,email,administrator, password_hash, created_at, updated_at) 
VALUES (2,'THIAGO CLIENTE','cliente@teste.com', FALSE, '$2a$08$Y3K3W0Yu1ITmaOOjjpyPPOBrMSNjIgYjn8aapUsmnGu6Vj9S56EwG', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- ADDRESS
INSERT INTO USER_ADDRESSES(id,user_id,zipcode,street,street_number,complement,neighborhood,city,state,created_at,updated_at)
VALUES (1,1,'15991168', 'RUA TESTE ENGENHARIA DE SOFT', '1176', '', 'FATEC', 'TAQUA', 'SP', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- LOGOS
INSERT INTO LOGOS (id,name,status,file_id,created_at,updated_at)
VALUES (1, 'Batman-Logo',1 , 6, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- BANNER
INSERT INTO BANNERS (id,name,status,file_id,created_at,updated_at)
VALUES (1, 'Batman-banner',1 , 6, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- CHECKOUTS
INSERT INTO CHECKOUTS (id, user_id, user_address_id, amount, created_at, updated_at)
VALUES (1, 1, 1, 3, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUTS (id, user_id,user_address_id,amount,created_at, updated_at)
VALUES (2, 1, 1, 2, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- CHECKOUTS_LISTS
INSERT INTO CHECKOUT_LISTS(id, product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (1, 1, 1, 3, 2600, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUT_LISTS(id, product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (2, 2, 2, 5, 8000, '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUT_LISTS(id, product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (3, 2, 2, 5, 8000, '2015-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

INSERT INTO CHECKOUT_LISTS(id, product_id, checkout_id, amount, total, created_at, updated_at)
VALUES (4, 2, 2, 5, 8000, '2019-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');

-- TRANSACTIONS
INSERT INTO TRANSACTIONS(id, checkout_id,status,email,created_at, updated_at)
VALUES (1, 1, 'approved', 'thiago.v.jorge@hotmail.com', '2018-08-08T18:18:23.481Z', '2018-08-08T18:18:23.481Z');