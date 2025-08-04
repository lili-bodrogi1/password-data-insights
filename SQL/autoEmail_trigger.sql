set serverouput on;
Create or replace trigger AutoEmail
after insert on people
for each row
declare
email varchar2(255);
ev number;
begin
SELECT EXTRACT(YEAR from birth_date) INTO ev FROM people WHERE people_id = :NEW.people_id;
SELECT email INTO email FROM people WHERE people_id = :NEW.people_id;
if email is null then
insert into people values(people_id_seq.nextval, :NEW.first_name, :NEW.last_name, :NEW.job_id, :NEW.birth_date,
:NEW.sex, :NEW.city_id,
(select :NEW.first_name||'_'||:NEW.last_name||ev||'@gmail.com'
from people
where people.people_id = :NEW.people_id),:NEW.rockyou_id, :NEW.ashley_id, :NEW.linkedin_id, :NEW.plus_id);
dbms_output.put_line('Automatic email generated.');
else
dbms_output.put_line('Email was filled.');
end if;
end;