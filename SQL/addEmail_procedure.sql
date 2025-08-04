SET SERVEROUPUT ON;
CREATE OR REPLACE PROCEDURE AddEmail IS
person people%ROWTYPE;
szam number;
BEGIN
FOR person IN (SELECT * FROM people)
LOOP
select MOD(SYS.DBMS_RANDOM.RANDOM,2) into szam from dual;
if szam = 0 THEN
UPDATE people SET email =
first_name||'_'||last_name||'@gmail.com'
where people.people_id = person.people_id;
else
UPDATE people SET email =
first_name||'.'||last_name||'@yahoo.com'
where people.people_id = person.people_id;
END IF;
END LOOP;
dbms_output.put_line('Email frissítve');
END;
