#!/bin/bash
# ========================================
# Battleground Deployment Script
# ========================================

set -e

echo "🚀 Starting Battleground deployment..."

# ========================================
# VARIABILI AMBIENTE
# ========================================
CONTAINER_NAME="${CONTAINER_NAME:-battleground}"
IMAGE_NAME="${IMAGE_NAME:-battleground}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
PORT="${PORT:-3000}"
NGINX_PORT="${NGINX_PORT:-80}"

# ========================================
# PREPARAZIONE
# ========================================
echo "🧹 Cleaning up old containers..."
sudo docker rm -f ${CONTAINER_NAME} 2>/dev/null || true

# ========================================
# BUILD
# ========================================
echo "🔨 Building Docker image..."
sudo docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .

# ========================================
# START CONTAINER
# ========================================
echo "📦 Starting Battleground container..."
sudo docker run -d --name ${CONTAINER_NAME} \
  -p ${PORT}:${NGINX_PORT} \
  ${IMAGE_NAME}:${IMAGE_TAG}

# ========================================
# HEALTH CHECK
# ========================================
echo "⏳ Waiting for Battleground to become ready..."
for i in $(seq 1 20); do
  if curl -f http://localhost:${PORT} 2>/dev/null > /dev/null; then
    echo "✅ Battleground is ready!"
    break
  fi
  echo "Attempt $i/20: not ready yet, retrying in 3s..."
  sleep 3
done

# ========================================
# CONNECTION INFO
# ========================================
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎮 Battleground Application Information"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📍 Application URL:"
echo "   http://localhost:${PORT}"
echo ""
echo "🐳 Docker Information:"
echo "   Container: ${CONTAINER_NAME}"
echo "   Image: ${IMAGE_NAME}:${IMAGE_TAG}"
echo "   Port Mapping: ${PORT}:${NGINX_PORT}"
echo ""
echo "📊 Container Status:"
sudo docker ps --filter name=${CONTAINER_NAME} --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo "✅ Battleground deployment completed successfully!"
