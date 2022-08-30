alter user 'root'@'localhost' identified with caching_sha2_password by 'mysql';
commit;

use pyprac2;

create table test_tbl2(
	tno int primary key auto_increment,
    tname varchar(20) not null
);

-- 'a'~'f'까지 6개 tname을 insert 해주세요.
insert into test_tbl2(tname) values('a');
insert into test_tbl2(tname) values('b');
insert into test_tbl2(tname) values('c');
insert into test_tbl2(tname) values('d');
insert into test_tbl2(tname) values('e');
insert into test_tbl2(tname) values('f');

select * from test_tbl2;

create table movie_tbl(
	rnum int primary key auto_increment,
    movieNm varchar(100) not null,
    openDt date not null,
    audiCnt int not null,
    showCnt int not null,
    dataDate date
);


drop table movie_tbl;
select * from movie_tbl; 

create table rent_tbl(
	num int primary key auto_increment,
    VHCLE_NM varchar(100) not null,
    VHCLE_TY_NM varchar(100) not null,
	VHCLE_NMPR_CO varchar(100) not null,
	VHCLE_MAKR_NM varchar(100) not null,
    USE_TIME_CO	int not null
);

select * from rent_tbl;
drop table rent_tbl;


