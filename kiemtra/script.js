const timerInput = document.getElementById("timerInput");
      const startBtn = document.getElementById("startBtn");
      const stopBtn = document.getElementById("stopBtn");
      const resetBtn = document.getElementById("resetBtn");

      let timerInterval;
      let totalSeconds = 0;

      function startTimer() {
        if (timerInterval) return;
        timerInterval = setInterval(() => {
          totalSeconds++;
          updateTimerDisplay();
        }, 1000);
      }
      function updateTimerDisplay() {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timerInput.value = `${String(minutes).padStart(2, "0")}:${String(
          seconds
        ).padStart(2, "0")}`;
      }

      function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      function resetTimer() {
        stopTimer();
        totalSeconds = 0;
        updateTimerDisplay();
      }

      startBtn.addEventListener("click", startTimer);
      stopBtn.addEventListener("click", stopTimer);
      resetBtn.addEventListener("click", resetTimer);