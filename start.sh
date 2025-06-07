#!/bin/sh
echo "Aguarde o banco iniciar..."

until npx prisma migrate dev --name init; do
  echo "Aguardando o banco de dados estar pronto..."
  sleep 3
done

echo "Migrations aplicadas com sucesso."
echo "Iniciando aplicação NestJS..."
npm run start:dev