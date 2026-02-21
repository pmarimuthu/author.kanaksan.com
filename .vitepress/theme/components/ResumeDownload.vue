<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();
const showModal = ref(false);
const inputValue = ref("");
const error = ref("");

// Load PDF as base64 at build time
const resumeBase64 = __RESUME_BASE64__;

const allowedHashes = [
  "0938bd39c0824d02abe1645dcadc40d968b5e278be1b2671aca56614f946edd4",
  "588551eff948145f912b5aaa145e72a246a7a061dbb1ab281e701d1a4729396a",
];

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function openModal() {
  inputValue.value = "";
  error.value = "";
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

async function verify() {
  const hash = await sha256(inputValue.value);
  if (allowedHashes.includes(hash)) {
    showModal.value = false;

    // Decode base64 and trigger download
    const byteCharacters = atob(resumeBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Marimuthu_Periyannan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } else {
    error.value = "Verification failed. Please check and try again.";
  }
}

function handleKeydown(e) {
  if (e.key === "Enter") verify();
  if (e.key === "Escape") closeModal();
}

router.onBeforeRouteChange = (to) => {
  if (to === "/resume-download" || to === "/resume-download.html") {
    openModal();
    return false;
  }
  return true;
};

function interceptResumeClick(e) {
  const anchor = e.target.closest("a");
  if (anchor && anchor.getAttribute("href") === "/resume-download") {
    e.preventDefault();
    e.stopPropagation();
    openModal();
  }
}

onMounted(() => {
  document.addEventListener("click", interceptResumeClick, true);
});

onUnmounted(() => {
  document.removeEventListener("click", interceptResumeClick, true);
});
</script>

<template>
  <Teleport v-if="showModal" to="body">
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" @keydown="handleKeydown">
        <button class="modal-close" @click="closeModal" aria-label="Close">
          &times;
        </button>
        <h3>Verify to Download</h3>
        <p>
          Please enter Marimuthu's email address or phone number to download the
          resume.
        </p>
        <input
          v-model="inputValue"
          type="text"
          placeholder="Email or Phone number"
          autofocus
          class="modal-input"
        />
        <p v-if="error" class="modal-error">{{ error }}</p>
        <div class="modal-actions">
          <button class="modal-verify-btn" @click="verify">
            Verify & Download
          </button>
          <button class="modal-cancel-btn" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 32px;
  max-width: 420px;
  width: 90%;
  position: relative;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: var(--vp-c-text-2);
}

.modal-content h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: var(--vp-c-text-1);
}

.modal-content p {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.modal-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 14px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
  box-sizing: border-box;
}

.modal-input:focus {
  border-color: var(--vp-c-brand-1);
}

.modal-error {
  color: var(--vp-c-danger-1, #e53e3e) !important;
  font-size: 13px !important;
  margin: 8px 0 0 0 !important;
}

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.modal-verify-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.25s;
}

.modal-verify-btn:hover {
  background-color: var(--vp-c-brand-2);
}

.modal-cancel-btn {
  padding: 10px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
}
</style>
