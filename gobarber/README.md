yarn init -y

yarn add express

yarn add sucrase nodemon -D

-----------------------

yarn add eslint

yarn eslint --init

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

para corrigir todos os arquivos de uma pasta com o eslint:
yarn eslint --fix src --ext .js

---------------------------

yarn add sequelize

yarn add sequelize-cli -D

dependencias do postgres:
yarn add pg pg-hstore

---------------------------

yarn sequelize migration:create --name=create-users

yarn sequelize db:migrate

yarn sequelize db:migrate:undo (desfaz as alteracoes da ultima migrate)

-------------------------------------
para utilizar a criptografia da senha:
yarn add bcryptjs

para gerar um token json JWT:
yarn add jsonwebtoken

-------------------------------------
Para fazer as validações de campos:
yarn add yup

---------------------------------------------------------------------
Continuando API do GoBarber
Envio de arquivos
yarn add multer
