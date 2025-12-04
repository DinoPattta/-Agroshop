--
-- PostgreSQL database dump
--

\restrict i2ZEyfDdYcm8j2TvOdquPHxb3ha4SS08Zd6v2FemYLQYFff9nRKdTzGONJpiuEa

-- Dumped from database version 17.6 (Ubuntu 17.6-0ubuntu0.25.04.1)
-- Dumped by pg_dump version 17.6 (Ubuntu 17.6-0ubuntu0.25.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- Name: categorias_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categorias_id_seq OWNER TO postgres;

--
-- Name: categorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;


--
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre character varying(200) NOT NULL,
    descripcion text,
    precio numeric(10,2) NOT NULL,
    categoria_id integer,
    imagen_url character varying(500),
    stock integer DEFAULT 0,
    activo boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- Name: productos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.productos_id_seq OWNER TO postgres;

--
-- Name: productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;


--
-- Name: categorias id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);


--
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias (id, nombre, descripcion, created_at) FROM stdin;
1	frutas	Frutas frescas y naturales	2025-11-21 10:02:53.069021
2	verduras	Verduras orgánicas y saludables	2025-11-21 10:02:53.069021
3	lacteos	Productos lácteos frescos	2025-11-21 10:02:53.069021
4	cereales	Granos y cereales nutritivos	2025-11-21 10:02:53.069021
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id, nombre, descripcion, precio, categoria_id, imagen_url, stock, activo, created_at, updated_at) FROM stdin;
1	Manzanas Rojas	Manzanas rojas frescas y crujientes	2.50	1	https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400	100	t	2025-11-21 10:03:41.525888	2025-11-21 10:03:41.525888
5	Tomates Frescos	Tomates rojos y jugosos	3.00	2	https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400	90	t	2025-11-21 10:04:17.996165	2025-11-21 10:04:17.996165
2	Plátanos Frescos	Plátanos maduros y dulces	1.80	1	https://images.unsplash.com/photo-1573828235229-fb27fdc8da91?q=80&w=899&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	80	t	2025-11-21 10:03:41.525888	2025-11-21 10:03:41.525888
6	Lechuga Verde	Lechuga fresca y crujiente	1.50	2	https://images.unsplash.com/photo-1713082063917-59863809f007?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	60	t	2025-11-21 10:04:17.996165	2025-11-21 10:04:17.996165
4	Zanahorias Orgánicas	Zanahorias frescas cultivadas orgánicamente	1.20	2	https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	75	t	2025-11-21 10:04:17.996165	2025-11-21 10:04:17.996165
3	Naranjas	Naranjas jugosas y ricas en vitamina C	2.00	1	https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	120	t	2025-11-21 10:03:41.525888	2025-11-21 10:03:41.525888
7	Leche Fresca Pura	Leche fresca pasteurizada	1.50	3	https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	50	t	2025-11-21 10:04:29.5618	2025-11-21 10:04:29.5618
8	Queso Artesanal	Queso artesanal de alta calidad	12.00	3	https://images.unsplash.com/photo-1683314573422-649a3c6ad784?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	30	t	2025-11-21 10:04:29.5618	2025-11-21 10:04:29.5618
9	Yogurt Natural	Yogurt natural sin azúcar añadida	3.50	3	https://images.unsplash.com/photo-1564149503905-7fef56abc1f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	40	t	2025-11-21 10:04:29.5618	2025-11-21 10:04:29.5618
12	Arroz Integral	Arroz integral de grano largo	2.50	4	https://images.unsplash.com/photo-1627482265910-5c0ff6bee088?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	95	t	2025-11-21 10:04:39.477019	2025-11-21 10:04:39.477019
10	Avena en Hojuelas	Avena integral en hojuelas	4.00	4	https://images.unsplash.com/photo-1614373532018-92a75430a0da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	85	t	2025-11-21 10:04:39.477019	2025-11-21 10:04:39.477019
11	Maíz Fresco	Maíz dulce y fresco	1.00	4	https://images.unsplash.com/photo-1634467524884-897d0af5e104?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	110	t	2025-11-21 10:04:39.477019	2025-11-21 10:04:39.477019
\.


--
-- Name: categorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorias_id_seq', 4, true);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_seq', 12, true);


--
-- Name: categorias categorias_nombre_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_nombre_key UNIQUE (nombre);


--
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);


--
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- Name: productos productos_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT USAGE ON SCHEMA public TO agroshop_user;


--
-- Name: TABLE categorias; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,UPDATE ON TABLE public.categorias TO agroshop_user;
GRANT ALL ON TABLE public.categorias TO agroshop_sne;


--
-- Name: SEQUENCE categorias_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT USAGE ON SEQUENCE public.categorias_id_seq TO agroshop_user;
GRANT ALL ON SEQUENCE public.categorias_id_seq TO agroshop_sne;


--
-- Name: TABLE productos; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,UPDATE ON TABLE public.productos TO agroshop_user;
GRANT ALL ON TABLE public.productos TO agroshop_sne;


--
-- Name: SEQUENCE productos_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT USAGE ON SEQUENCE public.productos_id_seq TO agroshop_user;
GRANT ALL ON SEQUENCE public.productos_id_seq TO agroshop_sne;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO agroshop_sne;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO agroshop_sne;


--
-- PostgreSQL database dump complete
--

\unrestrict i2ZEyfDdYcm8j2TvOdquPHxb3ha4SS08Zd6v2FemYLQYFff9nRKdTzGONJpiuEa

