CREATE DATABASE nutrifood
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- TABLE Address

CREATE TABLE IF NOT EXISTS public.address
(
    id integer NOT NULL DEFAULT nextval('address_id_seq'::regclass),
    city text COLLATE pg_catalog."default" NOT NULL,
    district text COLLATE pg_catalog."default" NOT NULL,
    street text COLLATE pg_catalog."default" NOT NULL,
    "number" integer NOT NULL,
    "userId" integer NOT NULL,
    CONSTRAINT address_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.address
    OWNER to postgres;

--TABLE users

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    phone text COLLATE pg_catalog."default" NOT NULL,
    "isAdmin" boolean NOT NULL DEFAULT false,
    address text COLLATE pg_catalog."default",
    num integer,
    CONSTRAINT user_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;
-- Index: user_email_key

-- DROP INDEX IF EXISTS public.user_email_key;

CREATE UNIQUE INDEX IF NOT EXISTS user_email_key
    ON public."user" USING btree
    (email COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;

-- Table: public.snack

-- DROP TABLE IF EXISTS public.snack;

CREATE TABLE IF NOT EXISTS public.snack
(
    id integer NOT NULL DEFAULT nextval('snack_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    value numeric(65,30) NOT NULL,
    category text COLLATE pg_catalog."default" NOT NULL,
    status text COLLATE pg_catalog."default" NOT NULL,
    image text COLLATE pg_catalog."default",
    CONSTRAINT snack_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.snack
    OWNER to postgres;

-- Table: public.order

-- DROP TABLE IF EXISTS public."order";

CREATE TABLE IF NOT EXISTS public."order"
(
    id integer NOT NULL DEFAULT nextval('order_id_seq'::regclass),
    "userId" integer NOT NULL,
    "totalValue" numeric(65,30) NOT NULL,
    payment text COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp(3) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    CONSTRAINT order_pkey PRIMARY KEY (id),
    CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."order"
    OWNER to postgres;

-- Table: public.item

-- DROP TABLE IF EXISTS public.item;

CREATE TABLE IF NOT EXISTS public.item
(
    id integer NOT NULL DEFAULT nextval('item_id_seq'::regclass),
    "orderId" integer NOT NULL,
    "snackId" integer,
    quantity integer NOT NULL,
    "totalValue" numeric(65,30),
    CONSTRAINT item_pkey PRIMARY KEY (id),
    CONSTRAINT "item_orderId_fkey" FOREIGN KEY ("orderId")
        REFERENCES public."order" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT "item_snackId_fkey" FOREIGN KEY ("snackId")
        REFERENCES public.snack (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.item
    OWNER to postgres;