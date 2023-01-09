--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2023-01-09 09:41:36 -03

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

--
-- TOC entry 3634 (class 1262 OID 589320)
-- Name: nutrifood; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE nutrifood WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE nutrifood OWNER TO postgres;

\connect nutrifood

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
-- TOC entry 209 (class 1259 OID 589433)
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
-- TOC entry 211 (class 1259 OID 589452)
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
-- TOC entry 210 (class 1259 OID 589451)
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
-- TOC entry 3635 (class 0 OID 0)
-- Dependencies: 210
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- TOC entry 216 (class 1259 OID 589491)
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
-- TOC entry 219 (class 1259 OID 589525)
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
-- TOC entry 3636 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 215 (class 1259 OID 589482)
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
-- TOC entry 214 (class 1259 OID 589481)
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
-- TOC entry 3637 (class 0 OID 0)
-- Dependencies: 214
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- TOC entry 218 (class 1259 OID 589497)
-- Name: snack; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.snack (
    id integer NOT NULL,
    name text NOT NULL,
    description text,
    value numeric(65,30) NOT NULL,
    category text NOT NULL,
    status text NOT NULL,
    image text,
    "imageId" text
);


ALTER TABLE public.snack OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 589496)
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
-- TOC entry 3638 (class 0 OID 0)
-- Dependencies: 217
-- Name: snack_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.snack_id_seq OWNED BY public.snack.id;


--
-- TOC entry 213 (class 1259 OID 589466)
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
-- TOC entry 212 (class 1259 OID 589465)
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
-- TOC entry 3639 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 3456 (class 2604 OID 589455)
-- Name: address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- TOC entry 3461 (class 2604 OID 589526)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3459 (class 2604 OID 589485)
-- Name: order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- TOC entry 3462 (class 2604 OID 589500)
-- Name: snack id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack ALTER COLUMN id SET DEFAULT nextval('public.snack_id_seq'::regclass);


--
-- TOC entry 3457 (class 2604 OID 589469)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3618 (class 0 OID 589433)
-- Dependencies: 209
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a425a2b7-f879-4ad3-a8fc-9b649b7be3c7	89616a86afccfcafbb06f777885afd242e7065b980775a5b169fdff11b2c4f52	2023-01-03 14:29:28.488259-03	20220609011326_init	\N	\N	2023-01-03 14:29:28.462565-03	1
ce596979-f16b-441c-b569-b56ca036a6d5	b70a3e6a095e8b606f3293f98ecb768820eeed40a62a7bff136d721b8dad6926	2023-01-03 14:29:28.601127-03	20220621175727_add_address_user	\N	\N	2023-01-03 14:29:28.597752-03	1
4c252d1a-01ab-4603-9bbb-bae26c12d9e4	5d655a01f925988c5526f7ebb373be1d37ae0e281d8993beb37eceece1e4e21f	2023-01-03 14:29:28.513312-03	20220609013544_client_to_user	\N	\N	2023-01-03 14:29:28.489355-03	1
9bf4ded0-ebf0-4451-b6a6-405a15e71333	c3b4344010b4228a079120e539ea9b817e78539e95021e67031ecf37680d1620	2023-01-03 14:29:28.517015-03	20220609020648_user_isadmin_attr	\N	\N	2023-01-03 14:29:28.51455-03	1
eb3a9350-7476-4a09-bdd4-cab81cfccfd0	b2eae026358af0feced3da74f24d51eb6627533de54ca5de6560cabc0173a208	2023-01-03 14:29:28.521335-03	20220609021857_email_as_unique	\N	\N	2023-01-03 14:29:28.518085-03	1
d6e50b1e-8196-4dbe-9126-df31c8911fa1	bc91c404aad9c6df7e0fe38d63240f2c12bf38494c9db100362db3de72d8891e	2023-01-03 14:29:28.604494-03	20220812191253_image_id	\N	\N	2023-01-03 14:29:28.602204-03	1
67136ea1-3fda-4892-a04d-0d9df7d3f574	da1da1cf0e8b578adf84bde4131eaaee12c9af34213e471b35cccf89fbaa0928	2023-01-03 14:29:28.553336-03	20220609024254_tables_version_1	\N	\N	2023-01-03 14:29:28.522112-03	1
e404f6cf-eba7-414c-8cf3-204e3a296a77	4a1f52b7268c5830aacdb0a5744fe42e07cafb209ab329cb454cf5d3cbfcdd4f	2023-01-03 14:29:28.55681-03	20220616011338_add_attr_quantity_totalvalue_item	\N	\N	2023-01-03 14:29:28.554274-03	1
9c0a1506-9910-4cfe-9e41-67d0260b2978	784cd025358c50551fe485eb436e85fc9ef2d2ede3a40a23a9259a41b3bb8712	2023-01-03 14:29:28.560376-03	20220616013629_add_attr_image_snack	\N	\N	2023-01-03 14:29:28.557748-03	1
3b7787b6-3e39-4e46-9e9a-89b0206ba913	4c163ccad6141f7e5bf45483aa21fcc972af265c6f02566533c3bbfd246f1342	2023-01-03 14:29:28.564287-03	20220616015036_optional_attr_desc_snack	\N	\N	2023-01-03 14:29:28.56126-03	1
d2311e5c-9905-4991-98d5-6783d8713c76	433227b2717288b0dce3c7b4654783dfe234801c0de31ae1cdca856e75c11764	2023-01-03 14:29:28.568532-03	20220616021423_optional_totalvalue_item	\N	\N	2023-01-03 14:29:28.565294-03	1
9441a8c3-2eb0-4ad7-895d-7f0dbee265a0	44f50ac019b914d31ca2e3b93db8a295307ba761878649591657c17e3e92c83a	2023-01-03 14:29:28.573109-03	20220616022605_auto_increment_id_item	\N	\N	2023-01-03 14:29:28.569612-03	1
e76b6620-6c3d-4cc0-a288-f43827b90b1f	cf85d1327d2f6046802aabb3851b5f6115b9986b65c12abf5e9bba132bad1f12	2023-01-03 14:29:28.586146-03	20220619194041_on_delete_set_null_snack	\N	\N	2023-01-03 14:29:28.573934-03	1
66bc72db-5928-4ce2-bc5a-6341e8100fc2	4ac2000ca205f64781af1bd2d4bd19e64f185070bfee2a28536d32ff3b2e6c1d	2023-01-03 14:29:28.590328-03	20220619194547_set_default_on_delete_snack	\N	\N	2023-01-03 14:29:28.587156-03	1
4fc3e465-e5e1-4682-88bf-0e5287cfb96f	d537e37c795721fd633ac0fdc0ba0a285d505c5555dccf95de62eec9fc198e60	2023-01-03 14:29:28.596304-03	20220619194839_snack_as_optional_item	\N	\N	2023-01-03 14:29:28.591151-03	1
\.


--
-- TOC entry 3620 (class 0 OID 589452)
-- Dependencies: 211
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (id, city, district, street, number, "userId") FROM stdin;
\.


--
-- TOC entry 3625 (class 0 OID 589491)
-- Dependencies: 216
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (id, "orderId", "snackId", quantity, "totalValue") FROM stdin;
1	1	1	2	\N
2	1	2	1	\N
3	1	3	4	\N
4	2	2	2	\N
5	2	4	1	\N
6	2	5	4	\N
7	3	1	2	\N
8	4	1	2	\N
9	4	2	1	\N
10	4	3	4	\N
11	5	1	2	\N
28	22	1	2	100.000000000000000000000000000000
\.


--
-- TOC entry 3624 (class 0 OID 589482)
-- Dependencies: 215
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") FROM stdin;
1	1	100.990000000000000000000000000000	DEBIT_CARD	2023-01-03 17:29:58.239	2023-01-03 17:29:58.24
2	1	120.990000000000000000000000000000	PIX	2023-01-03 17:29:58.239	2023-01-03 17:29:58.24
3	3	10.990000000000000000000000000000	CREDIT_CARD	2023-01-03 17:29:58.239	2023-01-03 17:29:58.24
4	3	100.990000000000000000000000000000	TICKET	2023-01-03 17:29:58.239	2023-01-03 17:29:58.24
5	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:36:52.593	2023-01-04 11:36:52.595
6	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:37:36.854	2023-01-04 11:37:36.855
7	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:39:30.455	2023-01-04 11:39:30.456
8	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:40:48.252	2023-01-04 11:40:48.253
9	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:45:20.851	2023-01-04 11:45:20.851
10	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:48:05.982	2023-01-04 11:48:05.982
11	2	1000.000000000000000000000000000000	CASH	2023-01-04 11:48:20.587	2023-01-04 11:48:20.588
12	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:00:28.281	2023-01-04 12:00:28.282
13	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:32:31.442	2023-01-04 12:32:31.445
14	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:48:14.386	2023-01-04 12:48:14.388
15	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:48:47.271	2023-01-04 12:48:47.272
16	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:49:44.625	2023-01-04 12:49:44.625
17	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:50:21.675	2023-01-04 12:50:21.675
18	2	1000.000000000000000000000000000000	CASH	2023-01-04 12:53:56.461	2023-01-04 12:53:56.461
19	2	1000.000000000000000000000000000000	CASH	2023-01-04 13:03:11.118	2023-01-04 13:03:11.119
20	2	1000.000000000000000000000000000000	CASH	2023-01-04 13:17:46.573	2023-01-04 13:17:46.574
21	2	1000.000000000000000000000000000000	CASH	2023-01-04 13:25:22.505	2023-01-04 13:25:22.506
22	2	1000.000000000000000000000000000000	CASH	2023-01-05 01:07:03.683	2023-01-05 01:07:03.687
23	2	1000.000000000000000000000000000000	CASH	2023-01-05 01:10:18.186	2023-01-05 01:10:18.186
24	2	1000.000000000000000000000000000000	CASH	2023-01-05 01:10:23.553	2023-01-05 01:10:23.553
25	2	1000.000000000000000000000000000000	CASH	2023-01-05 01:10:34.844	2023-01-05 01:10:34.844
26	2	1000.000000000000000000000000000000	CASH	2023-01-05 01:11:20.178	2023-01-05 01:11:20.179
\.


--
-- TOC entry 3627 (class 0 OID 589497)
-- Dependencies: 218
-- Data for Name: snack; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.snack (id, name, description, value, category, status, image, "imageId") FROM stdin;
1	Hamburguer	\N	12.990000000000000000000000000000	fastfood	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/food_iwfesu.jpg	\N
2	Bolo	\N	15.990000000000000000000000000000	dessert	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326745/bolo_nszblr.jpg	\N
3	Hot Dog	\N	10.990000000000000000000000000000	fastfood	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/hotdog_lou48t.jpg	\N
4	Milkshake	\N	9.990000000000000000000000000000	dessert	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/milkshake_d9xyq8.jpg	\N
5	Torta de Morango	\N	22.990000000000000000000000000000	dessert	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/torta_la7w7e.jpg	\N
6	Sorvete 4 bolas	\N	12.690000000000000000000000000000	dessert	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/sorvete_oh6ggu.jpg	\N
7	Trancoso, do G&T Bar	\N	6.690000000000000000000000000000	drinks	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326747/trancoso_jjvjtq.webp	\N
8	Santa Rosa Tavares	\N	9.690000000000000000000000000000	drinks	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/rosatavares_h1emzz.webp	\N
9	Salada Mista	\N	11.690000000000000000000000000000	salads	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326747/saladamista_iksheh.jpg	\N
10	Gelatina Colorida	\N	12.990000000000000000000000000000	dessert	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326745/gelatina-colorida_cqu8ax.jpg	\N
11	Salada de Frutas	\N	7.990000000000000000000000000000	dessert	available	https://res.cloudinary.com/drprqitgl/image/upload/v1660326746/salada-de-frutas_xay3im.jpg	\N
\.


--
-- TOC entry 3622 (class 0 OID 589466)
-- Dependencies: 213
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, name, email, password, phone, "isAdmin", address, num) FROM stdin;
1	Yasmim	yasmim@gmail.com	senha123	119436747	t	Rua Anecy Rocha	158
2	Maycon	maycon@gmail.com	senha123	119436747	t	Rua Francisco Diogo	89
3	Welligton	well@gmail.com	senha123	119436747	t	Rua das laranjas	98
\.


--
-- TOC entry 3640 (class 0 OID 0)
-- Dependencies: 210
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 1, false);


--
-- TOC entry 3641 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 32, true);


--
-- TOC entry 3642 (class 0 OID 0)
-- Dependencies: 214
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_id_seq', 26, true);


--
-- TOC entry 3643 (class 0 OID 0)
-- Dependencies: 217
-- Name: snack_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.snack_id_seq', 11, true);


--
-- TOC entry 3644 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- TOC entry 3464 (class 2606 OID 589441)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3466 (class 2606 OID 589459)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (id);


--
-- TOC entry 3473 (class 2606 OID 589495)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3471 (class 2606 OID 589490)
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- TOC entry 3475 (class 2606 OID 589504)
-- Name: snack snack_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack
    ADD CONSTRAINT snack_pkey PRIMARY KEY (id);


--
-- TOC entry 3469 (class 2606 OID 589473)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3467 (class 1259 OID 589480)
-- Name: user_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);


--
-- TOC entry 3477 (class 2606 OID 589510)
-- Name: item item_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3478 (class 2606 OID 589547)
-- Name: item item_snackId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "item_snackId_fkey" FOREIGN KEY ("snackId") REFERENCES public.snack(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3476 (class 2606 OID 589542)
-- Name: order order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2023-01-09 09:41:37 -03

--
-- PostgreSQL database dump complete
--

