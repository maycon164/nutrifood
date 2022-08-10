--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-08-01 08:20:17 -03

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
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 3448 (class 2604 OID 94959)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3593 (class 0 OID 94956)
-- Dependencies: 213
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" (id, name, email, password, phone, "isAdmin", address, num) VALUES (1, 'Yasmim', 'yasmim@gmail.com', 'senha123', '119436747', true, 'Rua Anecy Rocha', 158);
INSERT INTO public."user" (id, name, email, password, phone, "isAdmin", address, num) VALUES (2, 'Maycon', 'maycon@gmail.com', 'senha123', '119436747', true, 'Rua Francisco Diogo', 89);
INSERT INTO public."user" (id, name, email, password, phone, "isAdmin", address, num) VALUES (3, 'Welligton', 'well@gmail.com', 'senha123', '119436747', true, 'Rua das laranjas', 98);


--
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 3, true);


--
-- TOC entry 3452 (class 2606 OID 94963)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3450 (class 1259 OID 94970)
-- Name: user_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);


-- Completed on 2022-08-01 08:20:17 -03

--
-- PostgreSQL database dump complete
--

