--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-08-01 08:21:10 -03

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
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 217
-- Name: snack_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.snack_id_seq OWNED BY public.snack.id;


--
-- TOC entry 3448 (class 2604 OID 94990)
-- Name: snack id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack ALTER COLUMN id SET DEFAULT nextval('public.snack_id_seq'::regclass);


--
-- TOC entry 3591 (class 0 OID 94987)
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
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 217
-- Name: snack_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.snack_id_seq', 11, true);


--
-- TOC entry 3450 (class 2606 OID 94994)
-- Name: snack snack_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snack
    ADD CONSTRAINT snack_pkey PRIMARY KEY (id);


-- Completed on 2022-08-01 08:21:11 -03

--
-- PostgreSQL database dump complete
--

