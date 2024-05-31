ALTER TABLE task
DROP CONSTRAINT task_user_id_fkey,
ADD CONSTRAINT task_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;