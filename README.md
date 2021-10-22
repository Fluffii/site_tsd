Для начала необходимо создать базу данных. Для этого в консоли прописываем команды:
python
from app import db
db.create_all()
exit()

Запуск приложения с файла __init__.py

Команды для миграции БД:
python manage.py db init
python manage.py db migrate
python manage.py db upgrade