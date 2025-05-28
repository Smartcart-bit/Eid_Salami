body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #f0f8ff;
  padding: 20px;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

footer {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 0.7em;
  color: #555;
}

#animation {
  margin-top: 20px;
}

/* Simple confetti animation styles */
.confetti-piece {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #ff6f61;
  opacity: 0.8;
  animation: fall 3s linear infinite;
  border-radius: 2px;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(200px) rotate(360deg);
    opacity: 0;
  }
}
