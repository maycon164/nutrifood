--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-08-01 08:22:12 -03

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
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 214
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- TOC entry 3448 (class 2604 OID 94975)
-- Name: order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- TOC entry 3593 (class 0 OID 94972)
-- Dependencies: 215
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (1, 1, 100.990000000000000000000000000000, 'DEBIT_CARD', '2022-08-01 11:02:10.013', '2022-08-01 11:02:10.015');
INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (2, 1, 120.990000000000000000000000000000, 'PIX', '2022-08-01 11:02:10.014', '2022-08-01 11:02:10.015');
INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (3, 3, 10.990000000000000000000000000000, 'CREDIT_CARD', '2022-08-01 11:02:10.014', '2022-08-01 11:02:10.015');
INSERT INTO public."order" (id, "userId", "totalValue", payment, "createdAt", "updatedAt") VALUES (4, 3, 100.990000000000000000000000000000, 'TICKET', '2022-08-01 11:02:10.014', '2022-08-01 11:02:10.015');


--
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 214
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_id_seq', 4, true);


--
-- TOC entry 3451 (class 2606 OID 94980)
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- TOC entry 3452 (class 2606 OID 95032)
-- Name: order order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2022-08-01 08:22:12 -03

--
-- PostgreSQL database dump complete
--

