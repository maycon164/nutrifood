--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-08-01 08:24:30 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 94923)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 94942)
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id integer NOT NULL,
    city text NOT NULL,
    district text NOT NULL,
    street text NOT NULL,
    number integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.address OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 94941)
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_id_seq OWNER TO postgres;

--
-- TOC entry 3634 (class 0 OID 0)
-- Dependencies: 210
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- TOC entry 216 (class 1259 OID 94981)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "snackId" integer,
    quantity integer NOT NULL,
    "totalValue" numeric(65,30)
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 95015)
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- TOC entry 3635 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 215 (class 1259 OID 94972)
-- Name: order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "totalValue" numeric(65,30) NOT NULL,
    payment text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."order" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 94971)
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_id_seq OWNER TO postgres;

--
-- TOC entry 3636 (class 0 OID 0)
-- Dependencies: 214
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- TOC entry 218 (class 1259 OID 94987)
-- Name: snack; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.snack (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    value numeric(65,30) NOT NULL,
    category text NOT NULL,
    status text NOT NULL,
    image text
);


ALTER TABLE public.snack OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 94986)
-- Name: snack_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.snack_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.snack_id_seq OWNER TO postgres;

--
-- TOC entry 3637 (class 0 OID 0)
-- Dependencies: 217
-- Name: snack_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.snack_id_seq OWNED BY public.snack.id;


--
-- TOC entry 213 (class 1259 OID 94956)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    phone text NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL,
    address text,
    num integer
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 94955)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3638 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 3456 (class 2604 OID 94945)
-- Name: address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- TOC entry 3461 (class 2604 OID 95016)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3459 (class 2604 OID 94975)
-- Name: order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- TOC entry 3462 (class 2604 OID 94990)
-- Name: snack id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack ALTER COLUMN id SET DEFAULT nextval('public.snack_id_seq'::regclass);


--
-- TOC entry 3457 (class 2604 OID 94959)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3618 (class 0 OID 94923)
-- Dependencies: 209
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('e1f2eee2-8aa5-4357-bee2-e3e5f5dab853', '89616a86afccfcafbb06f777885afd242e7065b980775a5b169fdff11b2c4f52', '2022-08-01 08:01:51.238288-03', '20220609011326_init', NULL, NULL, '2022-08-01 08:01:51.218293-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('1d515095-2a55-43ac-8f5a-41bd1a9d52fa', 'b70a3e6a095e8b606f3293f98ecb768820eeed40a62a7bff136d721b8dad6926', '2022-08-01 08:01:51.32974-03', '20220621175727_add_address_user', NULL, NULL, '2022-08-01 08:01:51.326732-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('bf050b53-1a60-45a1-978a-d1b2fde54e26', '5d655a01f925988c5526f7ebb373be1d37ae0e281d8993beb37eceece1e4e21f', '2022-08-01 08:01:51.258412-03', '20220609013544_client_to_user', NULL, NULL, '2022-08-01 08:01:51.239268-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('dc78e1d2-c7fd-4a05-a3d0-92a8c1242ac3', 'c3b4344010b4228a079120e539ea9b817e78539e95021e67031ecf37680d1620', '2022-08-01 08:01:51.262643-03', '20220609020648_user_isadmin_attr', NULL, NULL, '2022-08-01 08:01:51.259494-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('085655b7-2c24-40af-b9cd-987d9ca85c2f', 'b2eae026358af0feced3da74f24d51eb6627533de54ca5de6560cabc0173a208', '2022-08-01 08:01:51.266834-03', '20220609021857_email_as_unique', NULL, NULL, '2022-08-01 08:01:51.263534-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('ea7cd8cc-90ec-432c-bacf-e487c5df8c19', 'da1da1cf0e8b578adf84bde4131eaaee12c9af34213e471b35cccf89fbaa0928', '2022-08-01 08:01:51.290275-03', '20220609024254_tables_version_1', NULL, NULL, '2022-08-01 08:01:51.267757-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('7b6c1d44-3a76-4b18-bb3c-3e817ccc5cfb', '4a1f52b7268c5830aacdb0a5744fe42e07cafb209ab329cb454cf5d3cbfcdd4f', '2022-08-01 08:01:51.293975-03', '20220616011338_add_attr_quantity_totalvalue_item', NULL, NULL, '2022-08-01 08:01:51.291095-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('70cbfe62-c155-493a-a66e-1237e29ece61', '784cd025358c50551fe485eb436e85fc9ef2d2ede3a40a23a9259a41b3bb8712', '2022-08-01 08:01:51.297429-03', '20220616013629_add_attr_image_snack', NULL, NULL, '2022-08-01 08:01:51.295258-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('7e55e871-8044-4249-a9bf-5667062845f5', '4c163ccad6141f7e5bf45483aa21fcc972af265c6f02566533c3bbfd246f1342', '2022-08-01 08:01:51.300133-03', '20220616015036_optional_attr_desc_snack', NULL, NULL, '2022-08-01 08:01:51.298199-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('1457923e-53ea-4a97-9da6-d2cb351e8c1f', '433227b2717288b0dce3c7b4654783dfe234801c0de31ae1cdca856e75c11764', '2022-08-01 08:01:51.303257-03', '20220616021423_optional_totalvalue_item', NULL, NULL, '2022-08-01 08:01:51.300979-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('920d65f5-5ed3-4935-ba5a-2804128a03ee', '44f50ac019b914d31ca2e3b93db8a295307ba761878649591657c17e3e92c83a', '2022-08-01 08:01:51.306615-03', '20220616022605_auto_increment_id_item', NULL, NULL, '2022-08-01 08:01:51.303969-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('1ca04d88-61c6-4e7c-a6c8-3583db6f9e1f', 'cf85d1327d2f6046802aabb3851b5f6115b9986b65c12abf5e9bba132bad1f12', '2022-08-01 08:01:51.317125-03', '20220619194041_on_delete_set_null_snack', NULL, NULL, '2022-08-01 08:01:51.307221-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('c92c89ac-1f97-4025-a5b2-310b0bcd1e29', '4ac2000ca205f64781af1bd2d4bd19e64f185070bfee2a28536d32ff3b2e6c1d', '2022-08-01 08:01:51.320829-03', '20220619194547_set_default_on_delete_snack', NULL, NULL, '2022-08-01 08:01:51.317872-03', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('8f14cfcb-1947-4188-82b0-4c10326fe12a', 'd537e37c795721fd633ac0fdc0ba0a285d505c5555dccf95de62eec9fc198e60', '2022-08-01 08:01:51.325886-03', '20220619194839_snack_as_optional_item', NULL, NULL, '2022-08-01 08:01:51.321791-03', 1);


--
-- TOC entry 3620 (class 0 OID 94942)
-- Dependencies: 211
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3625 (class 0 OID 94981)
-- Dependencies: 216
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (1, 1, 1, 2, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (2, 1, 2, 1, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (3, 1, 3, 4, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (4, 2, 2, 2, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (5, 2, 4, 1, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (6, 2, 5, 4, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (7, 3, 1, 2, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (8, 4, 1, 2, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (9, 4, 2, 1, NULL);
INSERT INTO public.item (id, "orderId", "snackId", quantity, "totalValue") VALUES (10, 4, 3, 4, NULL);


--
-- TOC entry 3624 (class 0 OID 94972)
-- Dependencies: 215
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (1, 1, 100.990000000000000000000000000000, 'DEBIT_CARD', '2022-08-01 11:02:10.013', '2022-08-01 11:02:10.015');
INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (2, 1, 120.990000000000000000000000000000, 'PIX', '2022-08-01 11:02:10.014', '2022-08-01 11:02:10.015');
INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (3, 3, 10.990000000000000000000000000000, 'CREDIT_CARD', '2022-08-01 11:02:10.014', '2022-08-01 11:02:10.015');
INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (4, 3, 100.990000000000000000000000000000, 'TICKET', '2022-08-01 11:02:10.014', '2022-08-01 11:02:10.015');


--
-- TOC entry 3627 (class 0 OID 94987)
-- Dependencies: 218
-- Data for Name: snack; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (1, 'Hamburguer', NULL, 12.990000000000000000000000000000, 'fastfood', 'available', 'http://localhost:3000/food.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (2, 'Bolo', NULL, 15.990000000000000000000000000000, 'dessert', 'available', 'http://localhost:3000/bolo.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (3, 'Hot Dog', NULL, 10.990000000000000000000000000000, 'fastfood', 'available', 'http://localhost:3000/hotdog.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (4, 'Milkshake', NULL, 9.990000000000000000000000000000, 'dessert', 'available', 'http://localhost:3000/milkshake.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (5, 'Torta de Morango', NULL, 22.990000000000000000000000000000, 'dessert', 'available', 'http://localhost:3000/torta.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (6, 'Sorvete 4 bolas', NULL, 12.690000000000000000000000000000, 'dessert', 'available', 'http://localhost:3000/sorvete.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (7, 'Trancoso, do G&T Bar', NULL, 6.690000000000000000000000000000, 'drinks', 'available', 'http://localhost:3000/trancoso.webp');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (8, 'Santa Rosa Tavares', NULL, 9.690000000000000000000000000000, 'drinks', 'available', 'http://localhost:3000/rosatavares.webp');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (9, 'Salada Mista', NULL, 11.690000000000000000000000000000, 'salads', 'available', 'http://localhost:3000/saladamista.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (10, 'Gelatina Colorida', NULL, 12.990000000000000000000000000000, 'dessert', 'available', 'http://localhost:3000/gelatina-colorida.jpeg');
INSERT INTO public.snack (id, name, description, value, category, status, image) VALUES (11, 'Salada de Frutas', NULL, 7.990000000000000000000000000000, 'dessert', 'available', 'http://localhost:3000/salada-de-frutas.jpeg');


--
-- TOC entry 3622 (class 0 OID 94956)
-- Dependencies: 213
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (id, name, email, password, phone, "isAdmin", address, num) VALUES (1, 'Yasmim', 'yasmim@gmail.com', 'senha123', '119436747', true, 'Rua Anecy Rocha', 158);
INSERT INTO public."user" (id, name, email, password, phone, "isAdmin", address, num) VALUES (2, 'Maycon', 'maycon@gmail.com', 'senha123', '119436747', true, 'Rua Francisco Diogo', 89);
INSERT INTO public."user" (id, name, email, password, phone, "isAdmin", address, num) VALUES (3, 'Welligton', 'well@gmail.com', 'senha123', '119436747', true, 'Rua das laranjas', 98);


--
-- TOC entry 3639 (class 0 OID 0)
-- Dependencies: 210
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 1, false);


--
-- TOC entry 3640 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 10, true);


--
-- TOC entry 3641 (class 0 OID 0)
-- Dependencies: 214
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_id_seq', 4, true);


--
-- TOC entry 3642 (class 0 OID 0)
-- Dependencies: 217
-- Name: snack_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.snack_id_seq', 11, true);


--
-- TOC entry 3643 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- TOC entry 3464 (class 2606 OID 94931)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3466 (class 2606 OID 94949)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- TOC entry 3473 (class 2606 OID 94985)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3471 (class 2606 OID 94980)
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- TOC entry 3475 (class 2606 OID 94994)
-- Name: snack snack_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack
    ADD CONSTRAINT snack_pkey PRIMARY KEY (id);


--
-- TOC entry 3469 (class 2606 OID 94963)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3467 (class 1259 OID 94970)
-- Name: user_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);


--
-- TOC entry 3477 (class 2606 OID 95000)
-- Name: item item_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3478 (class 2606 OID 95037)
-- Name: item item_snackId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "item_snackId_fkey" FOREIGN KEY ("snackId") REFERENCES public.snack(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3476 (class 2606 OID 95032)
-- Name: order order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2022-08-01 08:24:31 -03

--
-- PostgreSQL database dump complete
--

