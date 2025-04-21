// src/components/AdsterraBanner.js
import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    // 1st script
    const script1 = document.createElement("script");
    script1.src = "//pl26437425.profitableratecpm.com/4b/38/91/4b3891d202f305de1be3a854f1aebc8d.js";
    script1.type = "text/javascript";
    script1.async = true;
    document.body.appendChild(script1);

    // Inline script for atOptions
    const inlineScript = document.createElement("script");
    inlineScript.type = "text/javascript";
    inlineScript.innerHTML = `
      atOptions = {
        'key' : 'c65fe8893e7cc70edf2f570619a10316',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    document.body.appendChild(inlineScript);

    // 2nd script
    const script2 = document.createElement("script");
    script2.src = "//www.highperformanceformat.com/c65fe8893e7cc70edf2f570619a10316/invoke.js";
    script2.type = "text/javascript";
    script2.async = true;
    document.body.appendChild(script2);

    // Clean up on unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(inlineScript);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="ad-container" />;
};

export default AdsterraBanner;
