"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Check if user has dismissed the prompt before
      const dismissed = localStorage.getItem("installPromptDismissed");
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("installPromptDismissed", "true");
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-28 left-4 right-4 md:bottom-8 md:left-auto md:right-8 md:max-w-md z-50 animate-[slideUp_0.5s_ease-out]">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl shadow-2xl p-4 border border-blue-400/30">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-3 mb-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Download size={24} />
          </div>
          <div className="flex-1 pr-6">
            <h3 className="font-bold text-lg mb-1">Install Sali Products App</h3>
            <p className="text-sm text-blue-100">
              Get quick access to our products anytime. Install our app for a better shopping experience!
            </p>
          </div>
        </div>

        <button
          onClick={handleInstallClick}
          className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Install Now
        </button>
      </div>
    </div>
  );
}
