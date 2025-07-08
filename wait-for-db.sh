#!/bin/sh
echo "⏳ Aguardando MySQL em mysql:3306..."

until nc -z mysql 3306; do
  echo "❌ MySQL ainda não está pronto... tentando novamente em 2s"
  sleep 2
done

echo "✅ MySQL está pronto!"

echo "🚀 Iniciando a aplicação..."
