--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-08-01 08:22:35 -03

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
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 3448 (class 2604 OID 95016)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3592 (class 0 OID 94981)
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
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 219
-- Name: item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_id_seq', 10, true);


--
-- TOC entry 3450 (class 2606 OID 94985)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3451 (class 2606 OID 95000)
-- Name: item item_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3452 (class 2606 OID 95037)
-- Name: item item_snackId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "item_snackId_fkey" FOREIGN KEY ("snackId") REFERENCES public.snack(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2022-08-01 08:22:36 -03

--
-- PostgreSQL database dump complete
--

